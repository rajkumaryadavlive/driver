import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as colors from "../constants/colors";

function CustomActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator
        animating={visible}
        color={colors.primaryColor}
        size="large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.whiteColor,
    height: "100%",
    width: "100%",
    opacity: 0.7,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomActivityIndicator;
