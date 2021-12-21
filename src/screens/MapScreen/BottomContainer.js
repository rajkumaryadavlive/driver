import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Rating } from "react-native-ratings";
import {
  FontAwesome5 as Icon,
  EvilIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SwipeButton from "rn-swipe-button";

import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";
import styles from "./style";
import AppButton from "../../components/AppButton";

const BottomButtons = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Icon
          name={iconName}
          size={hp(3)}
          color={colors.primaryColor}
          style={styles.buttons}
        />
      </View>
    </TouchableOpacity>
  );
};
const NewJobBottomContainer = ({
  onPressZoomIn,
  onPressZoomOut,
  onPressAccept,
  seconds,
  duration,
  distance,
}) => {
  let calculatedDistance = (Math.round(distance * 100) / 100).toFixed(2);

  let newDur = (Math.round(duration * 100) / 100).toFixed(2);
  console.log(newDur);

  let newDuration = newDur.toString();
  let arr = newDuration.split(".");
  let min = parseInt(arr[0]);
  let sec = parseInt(arr[1]);

  let minutes = min > 60 ? min - 60 : min;
  console.log(minutes);
  let second = sec > 60 ? sec - 60 && minutes + 1 : sec;
  return (
    <>
      <View style={[styles.customBottomLayout, { bottom: hp(25) }]}>
        <View>
          <BottomButtons onPress={onPressZoomIn} iconName="plus" />
          <BottomButtons onPress={onPressZoomOut} iconName="minus" />
        </View>
        <View>
          <BottomButtons iconName="traffic-light" />
        </View>
      </View>
      {seconds > 0 && (
        <View style={styles.customBottomLayout2}>
          <View style={[styles.topContainer, { height: hp(25) }]}>
            <View style={styles.bottomContent}>
              <View style={styles.timerContainer}>
                <Text style={styles.timerText}>
                  {seconds > 0 ? seconds : 0}
                </Text>
              </View>
              <View style={styles.durationAndDistance}>
                <Text style={styles.durationAndDistanceText}>DURATION</Text>
                <Text style={styles.timeToReachAndDistance}>
                  {minutes}m {second}s
                </Text>
              </View>
              <View style={styles.durationAndDistance}>
                <Text style={styles.durationAndDistanceText}>DISTANCE</Text>
                <Text style={styles.timeToReachAndDistance}>
                  {calculatedDistance} km
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.addressContainer}>
              <EvilIcons name="location" size={hp(4)} color="black" />
              <Text numberOfLines={1} style={{ width: "93%" }}>
                Address this is the address from another component that will be
                available from another component
              </Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: wp(100),
            }}
          >
            <AppButton
              title="ACCEPT"
              onPress={onPressAccept}
              style={{ width: wp(90), alignSelf: "center" }}
              textStyle={{ fontWeight: "700" }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const OrderStartedBottomContainer = ({
  onPressZoomIn,
  onPressZoomOut,
  onPressAccept,
  getUserLocation,
  rating = 5,
}) => {
  return (
    <>
      <View style={[styles.customBottomLayout, { bottom: hp(27) }]}>
        <View style={{ alignSelf: "flex-end" }}>
          <BottomButtons onPress={onPressZoomIn} iconName="plus" />
          <BottomButtons onPress={onPressZoomOut} iconName="minus" />
        </View>
        <View>
          <BottomButtons iconName="directions" />
          <BottomButtons iconName="traffic-light" />
          <BottomButtons iconName="location-arrow" onPress={getUserLocation} />
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
              imageSize={12}
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
            <View style={{ alignItems: "center" }}>
              <Text>Call Center</Text>
              <TouchableOpacity
                onPress={() => console.log("This is from call center")}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: colors.darkRedColor,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: hp(1.5),
                  }}
                >
                  <SimpleLineIcons
                    name="user-female"
                    size={30}
                    color={colors.darkRedColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>Call Client</Text>
              <TouchableOpacity
                onPress={() => console.log("This is from call client")}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: colors.primaryColor,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: hp(1.5),
                  }}
                >
                  <MaterialCommunityIcons
                    name="phone-hangup"
                    size={30}
                    color={colors.primaryColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
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
        {/* <AppButton
          title="SWIPE TO ARRIVE"
          onPress={() => console.log("This is from swipe")}
          style={{
            borderRadius: 0,
            padding: hp(2),
            backgroundColor: colors.orangeColor,
          }}
          textStyle={{ fontWeight: "700" }}
        /> */}
        <SwipeButton
          containerStyles={{
            borderRadius: 0,
            backgroundColor: colors.orangeColor,
            width: "100%",
            marginLeft: 0,
          }}
          height={50}
          onSwipeSuccess={() => console.log("This is from swipe")}
          title="SWIPE TO ARRIVE"
          thumbIconComponent={CheckoutButton}
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
const CheckoutButton = () => {
  return (
    <View>
      <SimpleLineIcons name="arrow-right" size={25} color={colors.whiteColor} />
    </View>
  );
};
export { NewJobBottomContainer, OrderStartedBottomContainer };
