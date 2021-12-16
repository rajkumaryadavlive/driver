import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";

import * as colors from "../../constants/colors";
import styles from "./style";
import BadgeAndImage from "../../components/BadgeAndImage";

const IdealDriver = ({ onSwitchValueChange, switchValue }) => {
  return (
    <View style={styles.topContent}>
      <BadgeAndImage />
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

export default IdealDriver;
