import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import * as colors from "../../constants/colors";
import styles from "./style";
import { hp, wp } from "../../constants/dimensions";
import BadgeAndImage from "../../components/BadgeAndImage";

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0061;
const latlng = { latitude: 18.5868, longitude: 73.813 };

import NewJob from "./NewJob";
import Buttons from "./Buttons";
import IdealDriver from "./IdealDriver";
import BottomContainer from "./BottomContainer";

const CustomMap = ({ route, navigation }) => {
  const mapView = useRef();

  const [region, setRegion] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState(true);

  // const [userStatus, setUserStatus] = useState("ready");
  const [userStatus, setUserStatus] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await getCurrentPositionAsync();
      //   setLocation(location);
      let currentLoc = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA,
      };
      setRegion(currentLoc);
    })();
  }, []);

  setTimeout(() => {
    setUserStatus("ready");
    console.log("This is from timer 2");
  }, 5000);

  const getUser = async () => {
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

  const userReady = () => {
    let coords = { latitude: region.latitude, longitude: region.longitude };
    let Markers = [coords, latlng];
    mapView.current.fitToCoordinates(Markers, {
      edgePadding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
      animated: true,
    });
    return <NewJob onPressReject={() => setUserStatus("")} />;
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
      {userStatus === "" ? (
        <Buttons
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          onPressUserLocation={getUser}
        />
      ) : (
        <BottomContainer onPressZoomIn={zoomIn} onPressZoomOut={zoomOut} />
      )}
      {userStatus === "" && ideal()}
      {userStatus === "ready" && userReady()}
    </View>
  );
};

export default CustomMap;
