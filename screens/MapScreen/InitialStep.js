import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";

import * as colors from "../../constants/colors";
import styles from "./style";
import BadgeAndImage from "../../components/BadgeAndImage";
import BottomButtons from "../../components/BottomButtons";
import AppButton from "../../components/AppButton";

export const InitialStep = ({}) => {
  return (
    <View style={styles.topContent}>
      <Text>Set Your Location</Text>
    </View>
  );
};

export const InitialButton = ({ updateDriverLocation }) => {
  return (
    <View style={styles.customBottomLayout}>
      <AppButton title="Confirm" onPress={updateDriverLocation} />
    </View>
  );
};
