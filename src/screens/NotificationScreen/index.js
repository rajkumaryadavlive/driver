import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const ReferralScreen = ({ empty = true }) => {
  if (!empty) {
    return (
      <View style={styles.container}>
        <Text>This is Notification screen</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Empty Notifications</Text>
    </View>
  );
};

export default ReferralScreen;
