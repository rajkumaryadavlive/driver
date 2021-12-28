import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as colors from "../constants/colors";
import { hp, wp } from "../constants/dimensions";

const AppTextInput = ({
  leftIcon,
  rightIcon,
  width = "100%",
  containerStyle,
  leftIconStyle,
  rightIconStyle,
  leftIconSize = 25,
  rightIconSize = 25,
  leftIconColor = colors.FONT_GREY,
  rightIconColor = colors.FONT_GREY,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }, containerStyle]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={leftIconSize}
          color={leftIconColor}
          style={[styles.leftIcon, leftIconStyle]}
        />
      )}
      <TextInput
        style={styles.text}
        placeholderTextColor={colors.FONT_GREY}
        {...otherProps}
      />
      {rightIcon && (
        <MaterialCommunityIcons
          name={rightIcon}
          size={rightIconSize}
          color={rightIconColor}
          style={[styles.rightIcon, rightIconStyle]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    borderRadius: hp(20),
    flexDirection: "row",
    // alignItems: "center",
    // padding: 10,
    // marginVertical: 10,
  },
  leftIcon: {
    marginRight: wp(5),
    marginTop: hp(1),
  },
  rightIcon: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  text: {
    fontSize: 18,
    color: colors.blackColor,
  },
});

export default AppTextInput;
