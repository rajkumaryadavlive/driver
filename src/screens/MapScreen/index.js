import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import * as colors from "../../constants/colors";
import styles from "./style";

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0061;
const latlng = { latitude: 18.5868, longitude: 73.813 };

import { hp, wp } from "../../constants/dimensions";
import BadgeAndImage from "../../components/BadgeAndImage";

const CustomMap = ({ route, navigation }) => {
  const [region, setRegion] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState(true);

  const mapView = useRef();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
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

  const BottomButtons = ({ onPress, children }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttons}>{children}</View>
      </TouchableOpacity>
    );
  };

  const getUser = async () => {
    let location = await Location.getCurrentPositionAsync();
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
    mapView.current.animateToRegion(newRegion, 2000);
  };
  const zoomOut = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 2000);
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
      </MapView>
      <View style={styles.customLayout}>
        <View>
          <BottomButtons onPress={zoomIn}>
            <Icon name="plus" size={hp(2.5)} color={colors.primaryColor} />
          </BottomButtons>
          <BottomButtons onPress={zoomOut}>
            <Icon name="minus" size={hp(2.5)} color={colors.primaryColor} />
          </BottomButtons>
        </View>
        <View>
          <BottomButtons>
            <Icon
              name="traffic-light"
              size={hp(2.5)}
              color={colors.primaryColor}
            />
          </BottomButtons>
          <BottomButtons onPress={getUser}>
            <Icon
              name="location-arrow"
              size={hp(2.5)}
              color={colors.primaryColor}
            />
          </BottomButtons>
        </View>
      </View>
      <View style={styles.topContainer} />
      <View style={styles.topContent}>
        <BadgeAndImage />
        <View style={styles.switchContainer}>
          <Text
            style={{
              color: switchValue ? colors.primaryColor : "red",
              fontWeight: "700",
            }}
          >
            {switchValue ? "ON" : "OFF"}
          </Text>
          <Switch
            value={switchValue}
            onValueChange={(val) => setSwitchValue(val)}
            thumbColor={switchValue ? colors.primaryColor : "red"}
            trackColor={{ true: colors.primaryColor, false: "red" }}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log("This is from trip button")}
        >
          <View style={styles.tripButtonContainer}>
            <Text style={styles.tripButtonText}>Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomMap;
