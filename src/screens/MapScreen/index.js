import React, { useState, useEffect, useRef } from "react";
import { View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import MapViewDirections from "react-native-maps-directions";

import styles from "./style";
import { hp, wp } from "../../constants/dimensions";

import { NewJobTopContainer, OrderStarted } from "./TopContainer";
import Buttons from "./Buttons";
import IdealDriver from "./IdealDriver";
import { NewJobBottomContainer } from "./BottomContainer";
import GOOGLE_API_KEY from "../../constants/apikey";

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

const CustomMap = ({ route, navigation }) => {
  const mapView = useRef();

  const [region, setRegion] = useState({
    latitude: userLoc.latitude,
    longitude: userLoc.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState(true);

  console.log(region);

  // const [userStatus, setUserStatus] = useState("ready");
  const [userStatus, setUserStatus] = useState("");
  const [duration, setDuration] = useState(0);

  const [second, setSeconds] = React.useState(60);

  useEffect(() => {
    // async () => {
    //   let { status } = await requestForegroundPermissionsAsync();
    //   if (status !== "granted") {
    //     setErrorMsg("Permission to access location was denied");
    //     return;
    //   }
    //   let location = await getCurrentPositionAsync();
    //   let currentLoc = {
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     longitudeDelta: LONGITUDE_DELTA,
    //     latitudeDelta: LATITUDE_DELTA,
    //   };
    //   setRegion(currentLoc);
    // };
    getUser();
    second > 0 && setTimeout(() => setSeconds(second - 1), 1000);
  }, [second]);
  if (userStatus === "") {
    setTimeout(() => {
      setUserStatus("ready"); // When there is  setUserStatus() is changed then that time we have to call userReady()
      userReady();
    }, 5000);
  }
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
    mapView.current.animateToRegion(newRegion, 5000);
  };
  const zoomOut = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 5000);
  };

  const ideal = () => {
    return (
      <IdealDriver
        onSwitchValueChange={(val) => setSwitchValue(val)}
        switchValue={switchValue}
      />
    );
  };

  let userLocation = { latitude: region.latitude, longitude: region.longitude };
  const userReady = () => {
    let Markers = [userLocation, latlng];
    mapView.current.fitToCoordinates(Markers, {
      edgePadding: { top: 20, bottom: 20, left: 20, right: 20 },
      animated: true,
    });
    return (
      <>
        <NewJobTopContainer onPressReject={() => setUserStatus("")} />
        <NewJobBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          onPressAccept={goToOrderStarted}
          seconds={second}
        />
      </>
    );
  };

  const goToOrderStarted = () => {
    setUserStatus("orderStarted");
  };

  const orderStarted = () => {
    return <OrderStarted />;
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
        {/* <MapViewDirections
          origin={userLocation}
          destination={latlng}
          apikey={GOOGLE_API_KEY}
          strokeWidth={1}
          strokeColor="blue"
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(result.duration);

            if (!isReady) {
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 20, bottom: 20, left: 20, right: 20 },
                animated: true,
              });
            }
          }}
        /> */}
        {userStatus === "ready" ? (
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

      {userStatus === "" && ideal()}
      {userStatus === "ready" && userReady()}
      {userStatus === "orderStarted" && orderStarted()}
    </View>
  );
};

export default CustomMap;
