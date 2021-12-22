import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import SwipeButton from "rn-swipe-button";
import { SimpleLineIcons } from "@expo/vector-icons";

import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";
import styles from "./style";
import BadgeAndImage from "../../components/BadgeAndImage";
import BottomButtons from "../../components/BottomButtons";
import GmapsDirections from "../../components/Directions";

export const OnARideTopContainer = ({ sideMenuOpen }) => {
  return (
    <View style={[styles.topContent, { justifyContent: "flex-start" }]}>
      <TouchableOpacity onPress={sideMenuOpen}>
        <BadgeAndImage />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={[styles.orderStartedText, { marginRight: hp(5) }]}>
          On a ride.
        </Text>
      </View>
    </View>
  );
};

export const OnARideBottomContainer = ({
  onPressZoomIn,
  onPressZoomOut,
  getUserLocation,
  onSwipeToArrive,
  driverLocation,
  custLocation,
  waypoints,
}) => {
  return (
    <>
      <View style={[styles.customBottomLayout, { bottom: hp(25) }]}>
        <View style={{ alignSelf: "flex-end" }}>
          <BottomButtons onPress={onPressZoomIn} iconName="plus" fontAwesome />
          <BottomButtons
            onPress={onPressZoomOut}
            iconName="minus"
            fontAwesome
          />
        </View>
        <View>
          <GmapsDirections
            source={driverLocation}
            destination={custLocation}
            coords={waypoints}
          />
          {/* <BottomButtons iconName="directions" fontAwesome onPress={goToMap} /> */}
          <BottomButtons iconName="traffic-light" fontAwesome />
          <BottomButtons
            iconName="location-arrow"
            onPress={getUserLocation}
            fontAwesome
          />
          <BottomButtons iconName="credit-card-scan-outline" materialCI />
        </View>
      </View>

      <View style={styles.customBottomLayout2}>
        <View style={[styles.topContainer, { height: hp(25) }]} />
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            width: wp(100),
          }}
        >
          <Text style={{ fontSize: hp(5) }}>{`KHR   400.00`}</Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: wp(80),
              marginTop: hp(1),
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2) }}>DURATION</Text>
              <Text style={{ fontSize: hp(5) }}>0m 10s</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2) }}>DISTANCE</Text>
              <Text style={{ fontSize: hp(5) }}>10m</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: -5,
            width: wp(100),
          }}
        >
          <SwipeButton
            containerStyles={{
              borderRadius: 0,
              backgroundColor: colors.primaryColor,
              width: "100%",
              marginLeft: 0,
            }}
            height={50}
            onSwipeSuccess={onSwipeToArrive}
            // shouldResetAfterSuccess
            title="SWIPE TO ARRIVE"
            thumbIconComponent={RightArrow}
            thumbIconBackgroundColor={colors.primaryColor}
            thumbIconStyles={{ borderRadius: 0, borderWidth: 0 }}
            railStyles={{
              backgroundColor: colors.primaryColor,
              borderWidth: 0,
              padding: 2,
            }}
            railBackgroundColor={colors.primaryColor}
            titleColor="white"
          />
        </View>
      </View>
    </>
  );
};
const RightArrow = () => {
  return (
    <View>
      <SimpleLineIcons name="arrow-right" size={25} color={colors.whiteColor} />
    </View>
  );
};
