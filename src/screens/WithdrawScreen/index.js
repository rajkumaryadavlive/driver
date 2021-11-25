import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const WithdrawScreen = ({ empty = false }) => {
  const WithDrawLayout = ({ value = 0 }) => {
    let wholeDate = new Date().toLocaleString();
    let day = wholeDate.slice(0, 3);
    let year = new Date().getFullYear();
    let newDate = new Date().toLocaleDateString();
    let d = newDate.split("/", 3);
    let date = d[1];
    let month = d[0];
    return (
      <View style={styles.withDrawLayout}>
        <View style={styles.amountDateContainer}>
          <Text style={styles.amountText}>Amount</Text>
          <Text style={styles.date}>
            {day} {date}-{month}-{year}
          </Text>
        </View>
        <Text style={styles.khr}>KHR {value}</Text>
      </View>
    );
  };

  if (!empty) {
    return (
      <View style={styles.container}>
        <WithDrawLayout />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Empty withdraw</Text>
    </View>
  );
};

export default WithdrawScreen;
