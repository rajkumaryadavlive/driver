import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 as Icon, EvilIcons } from "@expo/vector-icons";

import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";
import styles from "./style";
import AppButton from "../../components/AppButton";

const BottomButtons = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
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
const BottomContainer = ({ onPressZoomIn, onPressZoomOut, onPressAccept }) => {
  const [seconds, setSeconds] = React.useState(60);
  setTimeout(() => setSeconds(seconds - 1), 1000);
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
                <Text style={styles.timeToReachAndDistance}>2m 10s</Text>
              </View>
              <View style={styles.durationAndDistance}>
                <Text style={styles.durationAndDistanceText}>DISTANCE</Text>
                <Text style={styles.timeToReachAndDistance}>2km</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.addressContainer}>
              <EvilIcons name="location" size={hp(4)} color="black" />
              <Text numberOfLines={1}>
                Address this is the address from another component that will be
                available from another component
              </Text>
            </View>
            <AppButton
              title="ACCEPT"
              onPress={onPressAccept}
              style={{ width: wp(90) }}
              textStyle={{ fontWeight: "700" }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default BottomContainer;
