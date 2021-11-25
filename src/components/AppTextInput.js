import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as colors from "../constants/colors";

const AppTextInput = ({
  leftIcon,
  rightIcon,
  width = "100%",
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={23}
          color={colors.FONT_GREY}
          style={styles.leftIcon}
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
          size={23}
          color={colors.FONT_GREY}
          style={styles.rightIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // padding: 10,
    // marginVertical: 10,
  },
  leftIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  rightIcon: {
    marginLeft: 10,
    marginTop: 3,
  },
  text: {
    fontSize: 18,
    color: colors.blackColor,
  },
});

export default AppTextInput;
