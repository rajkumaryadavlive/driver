import React, { useState, useEffect, useRef } from "react";
import { View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import MapViewDirections from "react-native-maps-directions";

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
    latitude: userLoc.latitude,
    longitude: userLoc.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);

  // const [userStatus, setUserStatus] = useState("ready");
  const [userStatus, setUserStatus] = useState("onARide");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [routeArr, setRouteArr] = useState([]);
  const [second, setSeconds] = useState(60);

  // console.log(routeArr);

  useEffect(() => {
    getUser();
  }, []);

  console.log(userStatus);

  const getUser = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await getCurrentPositionAsync();
    let currentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: LONGITUDE_DELTA,
      latitudeDelta: LATITUDE_DELTA,
    };
    setRegion(currentLocation);
    mapView.current.animateToRegion(currentLocation, 1000);
  };

  const zoomIn = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
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
  const searchCustomer = (val) => {
    setSwitchValue(val);
    if (val) setUserStatus("ready");
    if (!val) setUserStatus("");
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
    let sec = setTimeout(() => setSeconds(second - 1), 1000);
    clearTimeout(sec);
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
          seconds={second}
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
        />
      </>
    );
  };

  const onARide = () => {
    return (
      <>
        <OnARideTopContainer />
        <OnARideBottomContainer />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        ref={mapView}
        showsUserLocation={true}
        showsMyLocationButton={false}
        followsUserLocation={true}
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
  );
};

export default CustomMap;
