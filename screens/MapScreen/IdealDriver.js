import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";

import * as colors from "../../constants/colors";
import styles from "./style";
import BadgeAndImage from "../../components/BadgeAndImage";
import BottomButtons from "../../components/BottomButtons";

export const IdealDriver = ({
  onSwitchValueChange,
  switchValue,
  sideMenuOpen,
}) => {
  return (
    <View style={styles.topContent}>
      <TouchableOpacity onPress={sideMenuOpen}>
        <BadgeAndImage />
      </TouchableOpacity>
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
          onValueChange={onSwitchValueChange}
          thumbColor={switchValue ? colors.primaryColor : "red"}
          trackColor={{ true: colors.primaryColor, false: "red" }}
        />
      </View>
      <TouchableOpacity onPress={() => console.log("This is from trip button")}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Trip</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Buttons = ({
  onPressZoomIn,
  onPressZoomOut,
  onPressUserLocation,
}) => {
  return (
    <View style={styles.customBottomLayout}>
      <View>
        <BottomButtons onPress={onPressZoomIn} iconName="plus" fontAwesome />
        <BottomButtons onPress={onPressZoomOut} iconName="minus" fontAwesome />
      </View>
      <View>
        <BottomButtons
          onPress={() => {}}
          iconName="traffic-light"
          fontAwesome
        />
        <BottomButtons
          onPress={onPressUserLocation}
          iconName="location-arrow"
          fontAwesome
        />
      </View>
    </View>
  );
};
