import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import * as colors from "../constants/colors";

function AppButton({ title, onPress, color, style, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default AppButton;
