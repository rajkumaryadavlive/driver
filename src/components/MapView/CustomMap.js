import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0041;

import { hp, wp } from "../../constants/dimensions";
const CustomMap = (props) => {
  const [region, setRegion] = useState();

  const [errorMsg, setErrorMsg] = useState(null);

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

  const regionChange = (region) => {
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        region={region}
        showsUserLocation
        showsMyLocationButton={false}
        zoomControlEnabled
        followsUserLocation
        onRegionChangeComplete={regionChange}
      />
      <View style={styles.customLayout}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customLayout: {
    backgroundColor: "tomato",
    width: wp(90),
    position: "absolute",
    bottom: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomMap;
