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
import AppButton from "../../components/AppButton";

export const OnARideTopContainer = ({
  sideMenuOpen,
  status,
  onSwitchValueChange,
  switchValue,
}) => {
  return (
    <View style={[styles.topContent, { justifyContent: "flex-start" }]}>
      <TouchableOpacity onPress={sideMenuOpen}>
        <BadgeAndImage />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={
            status === "swiped"
              ? { marginRight: wp(6) }
              : { marginRight: wp(35) }
          }
        >
          <Text style={[styles.orderStartedText, { textAlign: "center" }]}>
            On a ride.
          </Text>
          {status === "swiped" ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: wp(45),
              }}
            >
              <AppButton
                style={{
                  width: wp(17),
                  padding: hp(0.2),
                  backgroundColor: colors.darkRedColor,
                }}
                textStyle={{ fontSize: hp(2.5) }}
                title="Trip 1"
              />
              <AppButton
                style={{
                  width: wp(17),
                  padding: hp(0.2),
                  backgroundColor: colors.orangeColor,
                }}
                textStyle={{ fontSize: hp(2.5) }}
                title="Trip 2"
                onPress={() => console.log("This is from Trip 2")}
              />
            </View>
          ) : null}
        </View>
        {status === "swiped" ? (
          <View>
            <Switch
              value={switchValue}
              onValueChange={onSwitchValueChange}
              thumbColor={switchValue ? colors.primaryColor : "red"}
              trackColor={{ true: colors.primaryColor, false: "red" }}
            />
            <Text>{switchValue ? "ON Share" : "OFF Share"}</Text>
          </View>
        ) : null}
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
  status,
  onFinishTrip,
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
          <Text style={{ fontSize: hp(5) }}>
            {status === "swiped" ? `KHR   3,200.00` : `KHR   400.00`}
          </Text>
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
              <Text style={{ fontSize: hp(5) }}>
                {status === "swiped" ? "2m 10s" : "0m 10s"}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2) }}>DISTANCE</Text>
              <Text style={{ fontSize: hp(5) }}>
                {status === "swiped" ? "2km" : "10m"}
              </Text>
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
              backgroundColor: colors.darkRedColor,
              width: "100%",
              marginLeft: 0,
            }}
            height={50}
            onSwipeSuccess={status === "" ? onSwipeToArrive : onFinishTrip}
            shouldResetAfterSuccess
            title={status === "" ? "SWIPE TO ARRIVE" : "SWIPE TO FINISH TRIP"}
            thumbIconComponent={RightArrow}
            thumbIconBackgroundColor={
              status === "" ? colors.primaryColor : colors.darkRedColor
            }
            thumbIconStyles={{ borderRadius: 0, borderWidth: 0 }}
            railStyles={{
              backgroundColor:
                status === "" ? colors.primaryColor : colors.darkRedColor,
              borderWidth: 0,
              padding: 2,
            }}
            railBackgroundColor={
              status === "" ? colors.primaryColor : colors.darkRedColor
            }
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
