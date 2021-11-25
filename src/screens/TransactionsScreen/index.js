import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const WithdrawScreen = ({ empty = true }) => {
  if (!empty) {
    return (
      <View style={styles.container}>
        <Text>This is Transaction screen</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Empty Recent Transactions</Text>
    </View>
  );
};

export default WithdrawScreen;
