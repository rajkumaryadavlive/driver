import React, { useState, useEffect, useRef } from "react";
import { View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import io from "socket.io-client";

import profileApi from "../../api/profile";
import useAuth from "../../hooks/useAuth";

import Screen from "../../components/Screen";
import styles from "./style";
import GOOGLE_API_KEY from "../../constants/apikey";
import { hp, wp } from "../../constants/dimensions";
import { IdealDriver, Buttons } from "./IdealDriver";
import { NewJobTopContainer, NewJobBottomContainer } from "./NewJob";
import {
  OrderStartedTopContainer,
  OrderStartedBottomContainer,
} from "./OrderStarted";
import { OnARideTopContainer, OnARideBottomContainer } from "./OnARide";

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0061;
const latlng = {
  latitude: 18.5868,
  longitude: 73.813,
};
const userLoc = {
  latitude: 18.5842,
  longitude: 73.8226,
};

const CustomMap = ({ route, navigation, openDrawer }) => {
  const mapView = useRef();

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [currentLoc, setCurrentLoc] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState();

  const [userStatus, setUserStatus] = useState("");
  const [onARideStatus, setonARideStatus] = useState("");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [routeArr, setRouteArr] = useState([]);

  const socket = useRef();
  const SOCKET_URL = "http://3.110.149.0:3000";

  const driverId = "61bc1c5190e208be7a5a70eb";
  const { token } = useAuth();

  useEffect(() => {
    getUser();
    getStatus(token);
  }, []);

  useEffect(() => {
    socket.current = io(SOCKET_URL, {
      transports: ["websocket"],
      jsonp: false,
      query: `id=${driverId}`,
    });
    socket.current.on("connect", () => {
      console.log("Connected");
      socket.current.emit("join", {
        id: driverId,
      });
      socket.current.on("order-pickup-request", async function (data) {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });
    });

    const interval = setInterval(() => {
      getCurrentPos();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getStatus = async (token) => {
    const result = await profileApi.getDriverStatus(token);
    const status = result.data.data.status;
    console.log("====================================");
    console.log(status);
    console.log("====================================");
    setSwitchValue(status === "active" ? true : false);
  };

  const getCurrentPos = async () => {
    let location = await getCurrentPositionAsync();
    // console.log("====================================");
    // console.log(
    //   "This is log from get Pos ",
    //   location.coords.latitude,
    //   location.coords.longitude
    // );
    // console.log("====================================");
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    setCurrentLoc({ latitude, longitude });
    socket.current.emit("update-driver-location", {
      lat: latitude,
      long: longitude,
      id: driverId,
    });
  };

  const getUser = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await getCurrentPositionAsync();
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: region.longitudeDelta,
      latitudeDelta: region.latitudeDelta,
    });

    mapView.current.animateToRegion(region, 1000);
  };

  const zoomIn = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion({
      latitude: newRegion.latitude,
      longitude: newRegion.longitude,
      latitudeDelta: newRegion.latitudeDelta,
      longitudeDelta: newRegion.longitudeDelta,
    });
    mapView.current.animateToRegion(newRegion, 1000);
  };
  const zoomOut = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 1000);
  };

  let userLocation = { latitude: region.latitude, longitude: region.longitude };

  const fitToMarkers = (coords, timerId, spaceNum) => {
    mapView.current.fitToCoordinates(coords, {
      edgePadding: {
        top: spaceNum,
        bottom: spaceNum,
        left: spaceNum,
        right: spaceNum,
      },
      animated: true,
    });
    clearTimeout(timerId);
  };

  const goToOrderStarted = () => {
    // socket.current.on("order-pickup-request", async function (data) {
    //   console.log("====================================");
    //   console.log(data);
    //   console.log("====================================");
    // });
    socket.current.emit("accept-request-pickup", {
      driverId,
      orderId: "134654646",
      lat: currentLoc.latitude,
      long: currentLoc.longitude,
    });
    setUserStatus("orderStarted");
  };

  const mapContent = () => {
    switch (userStatus) {
      case "":
        return ideal();
      case "ready":
        return userReady();
      case "orderStarted":
        return orderStarted();
      case "arrived":
        return arrival();
      case "onARide":
        return onARide();
    }
  };

  //Function to search for a customer.
  const searchCustomer = async (val) => {
    setSwitchValue(val);
    if (val) {
      const result = await profileApi.updateDriverStatus(driverId, "active");
      console.log("====================================");
      console.log("This is switch value", result.data);
      console.log("====================================");
      setUserStatus("ready");
      socket.current.on("order-pickup-request", async function (data) {
        console.log("====================================");
        console.log("this is from order pickup request", data);
        console.log("====================================");
      });
    } else {
      const result = await profileApi.updateDriverStatus(driverId, "inactive");
      console.log("====================================");
      console.log(result.data);
      console.log("====================================");
      setUserStatus("");
    }
  };

  const ideal = () => {
    return (
      <IdealDriver
        sideMenuOpen={openDrawer}
        onSwitchValueChange={(val) => searchCustomer(val)}
        switchValue={switchValue}
      />
    );
  };

  const userReady = () => {
    let Markers = [userLocation, latlng];
    let timer = setTimeout(() => fitToMarkers(Markers, timer, 20), 2000);

    return (
      <>
        <NewJobTopContainer
          onPressReject={() => setUserStatus("")}
          sideMenuOpen={openDrawer}
        />
        <NewJobBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          onPressAccept={goToOrderStarted}
          duration={duration}
          distance={distance}
        />
      </>
    );
  };
  const orderStarted = () => {
    let Markers = [userLocation, latlng];
    let timer = setTimeout(() => fitToMarkers(Markers, timer, 80), 2000);
    return (
      <>
        <OrderStartedTopContainer
          duration={duration}
          sideMenuOpen={openDrawer}
          driverStatus="Order Started"
        />
        <OrderStartedBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeToArrive={() => setUserStatus("arrived")}
          driverLocation={userLocation}
          custLocation={latlng}
          waypoints={routeArr}
        />
      </>
    );
  };

  const arrival = () => {
    return (
      <>
        <OrderStartedTopContainer
          duration={duration}
          sideMenuOpen={openDrawer}
          driverStatus="Arrival"
        />
        <OrderStartedBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeforArrival={() => setUserStatus("onARide")}
          driverLocation={userLocation}
          custLocation={latlng}
          waypoints={routeArr}
          driverStatus="arrival"
        />
      </>
    );
  };

  const onARide = () => {
    return (
      <>
        <OnARideTopContainer
          status={onARideStatus}
          sideMenuOpen={openDrawer}
          onSwitchValueChange={(val) => searchCustomer(val)}
          switchValue={switchValue}
        />
        <OnARideBottomContainer
          status={onARideStatus}
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeToArrive={() => setonARideStatus("swiped")}
          onFinishTrip={() => navigation.navigate("Receipt")}
          driverLocation={userLocation}
          custLocation={latlng}
          waypoints={routeArr}
        />
      </>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={region}
          ref={mapView}
          showsUserLocation={true}
          showsMyLocationButton={false}
          followsUserLocation={true}
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        >
          <MapViewDirections
            lineDashPattern={[0]}
            origin={userLocation}
            destination={userStatus !== "" ? latlng : null}
            apikey={GOOGLE_API_KEY}
            strokeWidth={userStatus === "orderStarted" ? 4 : 0}
            strokeColor="blue"
            optimizeWaypoints={true}
            onReady={(result) => {
              // console.log(result);
              setDuration(result.duration);
              setDistance(result.distance);
              setRouteArr([...result.coordinates]);
            }}
          />

          {userStatus !== "" ? (
            <Marker coordinate={latlng}>
              <View
                style={{
                  height: hp(6),
                  width: hp(6),
                  borderRadius: hp(3),
                }}
              >
                <Image
                  source={require("../../assets/images/user.png")}
                  style={styles.image}
                />
              </View>
            </Marker>
          ) : null}
        </MapView>
        <View
          style={
            userStatus === ""
              ? styles.topContainer
              : [styles.topContainer, { height: hp(10) }]
          }
        />
        {userStatus === "" && (
          <Buttons
            onPressZoomIn={zoomIn}
            onPressZoomOut={zoomOut}
            onPressUserLocation={getUser}
          />
        )}

        {mapContent()}
      </View>
    </Screen>
  );
};

export default CustomMap;
