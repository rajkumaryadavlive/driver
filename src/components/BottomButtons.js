import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  FontAwesome5 as Icon,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { hp, wp } from "../constants/dimensions";
import * as colors from "../constants/colors";

const BottomButtons = ({ onPress, iconName, fontAwesome, materialCI }) => {
  const IconType = () => {
    return (
      <View>
        {fontAwesome && (
          <Icon name={iconName} size={hp(3)} color={colors.primaryColor} />
        )}
        {materialCI && (
          <MaterialCommunityIcons
            name={iconName}
            size={hp(3)}
            color={colors.primaryColor}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttons}>
        <IconType />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: wp(3),
    borderRadius: wp(20),
    backgroundColor: "#ffffff",
    margin: hp(1),
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomButtons;
