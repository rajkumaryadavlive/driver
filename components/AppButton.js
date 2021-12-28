import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import * as colors from "../constants/colors";

function AppButton({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: colors.whiteColor,
  },
});

export default AppButton;
