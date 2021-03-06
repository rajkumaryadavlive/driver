import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import * as colors from "../../constants/colors";

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0061;

import { hp, wp } from "../../constants/dimensions";

const CustomMap = (props) => {
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
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA,
      });
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
        region={region}
        ref={mapView}
        showsUserLocation={true}
        showsMyLocationButton={false}
        followsUserLocation={true}
      ></MapView>
      <View style={styles.customLayout}>
        <View>
          <BottomButtons onPress={zoomIn}>
            <Text style={styles.zoomButtons}>+</Text>
          </BottomButtons>
          <BottomButtons onPress={zoomOut}>
            <Text style={styles.zoomButtons}>-</Text>
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
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.image}
          />
        </View>
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

        <Text>something</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3),
    backgroundColor: "#ffffff",
    margin: hp(1),
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  customLayout: {
    position: "absolute",
    bottom: hp(5),
    left: wp(5),
    width: wp(90),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(10),
  },
  imageContainer: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: colors.orangeColor,
    padding: wp(0.3),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(20),
    justifyContent: "space-between",
  },
  topContainer: {
    width: wp(100),
    backgroundColor: colors.whiteColor,
    opacity: 0.5,
    height: hp(7),
  },
  topContent: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
    height: hp(7),
  },
  zoomButtons: {
    fontSize: hp(4),
    color: colors.primaryColor,
    fontWeight: "bold",
  },
});

export default CustomMap;
