import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Rating } from "react-native-ratings";
import {
  FontAwesome5 as Icon,
  EvilIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SwipeButton from "rn-swipe-button";

import BadgeAndImage from "../../components/BadgeAndImage";
import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";
import styles from "./style";
import BottomButtons from "../../components/BottomButtons";
import GmapsDirections from "../../components/Directions";

export const OrderStartedTopContainer = ({
  duration,
  sideMenuOpen,
  driverStatus,
}) => {
  let newDur = (Math.round(duration * 100) / 100).toFixed(2);

  let newDuration = newDur.toString();
  let arr = newDuration.split(".");
  let min = parseInt(arr[0]);
  let sec = parseInt(arr[1]);

  let minutes = min > 60 ? min - 60 : min;
  let second = sec > 60 ? sec - 60 && minutes + 1 : sec;

  return (
    <View style={styles.topContent}>
      <TouchableOpacity onPress={sideMenuOpen}>
        <BadgeAndImage />
      </TouchableOpacity>
      <View style={styles.orderStarted}>
        <Text style={styles.orderStartedText}>{driverStatus}</Text>
        <Text style={styles.timeToReachAndDistance}>
          {minutes}m {second}s
        </Text>
      </View>
    </View>
  );
};

export const OrderStartedBottomContainer = ({
  onPressZoomIn,
  onPressZoomOut,
  onSwipeToArrive,
  getUserLocation,
  rating = 5,
  driverLocation,
  custLocation,
  waypoints,
  driverStatus,
  onSwipeforArrival,
}) => {
  const IconAndText = ({ text, onPress, color, children }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>{text}</Text>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              borderWidth: 2,
              borderColor: color,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              padding: hp(1.5),
            }}
          >
            {children}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.customBottomLayout, { bottom: hp(27) }]}>
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
        <View style={[styles.topContainer, { height: hp(27) }]} />
        <View style={{ position: "absolute", top: 0, left: 10 }}>
          <Text>Passenger Info</Text>
        </View>
        <View style={styles.imageAndCustomerInfo}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.customerImageContainer}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={{ marginLeft: wp(3), marginTop: hp(2) }}>
            <Text style={{ color: "black", fontSize: hp(2.5) }}>
              Sok Raingsey
            </Text>
            <Text style={{ marginTop: hp(1), fontSize: hp(2.5) }}>
              0968-168-111
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 3,
              left: 1,
              height: hp(5),
              width: "95%",
            }}
          >
            <Rating
              type="star"
              ratingCount={5}
              ratingColor={colors.yellowStarColor}
              imageSize={hp(2)}
              readonly
              startingValue={rating}
              minValue={1}
              tintColor={colors.whiteColor}
              style={{
                alignSelf: "flex-start",
                marginTop: hp(1),
                backgroundColor: "white",
              }}
            />
            <Text
              numberOfLines={2}
              style={{ width: "80%", fontSize: 10, marginLeft: wp(3) }}
            >
              This is the address which is long to read but we to have read in
              this bottom container This is the address which is long to read
              but we to have read in this bottom container This is the address
              which is long to read but we to have read in this bottom container
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              right: 0,
              top: -10,
              flexDirection: "row",
              marginRight: wp(5),
              justifyContent: "space-between",
              width: wp(40),
            }}
          >
            <IconAndText
              color={colors.darkRedColor}
              onPress={() => console.log("This is from call center")}
              text="Call Center"
            >
              <SimpleLineIcons
                name="user-female"
                size={30}
                color={colors.darkRedColor}
              />
            </IconAndText>

            <IconAndText
              color={colors.primaryColor}
              onPress={() => console.log("This is from call client")}
              text="Call Client"
            >
              <MaterialCommunityIcons
                name="phone-hangup"
                size={30}
                color={colors.primaryColor}
              />
            </IconAndText>
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
            backgroundColor: colors.orangeColor,
            width: "100%",
            marginLeft: 0,
          }}
          height={50}
          onSwipeSuccess={
            driverStatus === "arrival" ? onSwipeforArrival : onSwipeToArrive
          }
          shouldResetAfterSuccess
          title="SWIPE TO ARRIVE"
          thumbIconComponent={RightArrow}
          thumbIconBackgroundColor={colors.orangeColor}
          thumbIconStyles={{ borderRadius: 0, borderWidth: 0 }}
          railStyles={{
            backgroundColor: colors.orangeColor,
            borderWidth: 0,
            padding: 2,
          }}
          railBackgroundColor={colors.orangeColor}
          titleColor="white"
        />
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
