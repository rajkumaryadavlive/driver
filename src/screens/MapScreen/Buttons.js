import React from "react";
import { View, TouchableOpacity, Switch } from "react-native";

import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";
import styles from "./style";

const Buttons = ({ onPressZoomIn, onPressZoomOut, onPressUserLocation }) => {
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

  return (
    <View style={styles.customBottomLayout}>
      <View>
        <BottomButtons onPress={onPressZoomIn} iconName="plus" />
        <BottomButtons onPress={onPressZoomOut} iconName="minus" />
      </View>
      <View>
        <BottomButtons onPress={() => {}} iconName="traffic-light" />
        <BottomButtons
          onPress={onPressUserLocation}
          iconName="location-arrow"
        />
      </View>
    </View>
  );
};

export default Buttons;
