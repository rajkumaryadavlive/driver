import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default ErrorMessage;
