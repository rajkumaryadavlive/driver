import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import Screen from "../../components/Screen";
import styles from "./style";

const WithdrawScreen = ({ empty = false, value = 0 }) => {
  let wholeDate = new Date().toLocaleString();
  let day = wholeDate.slice(0, 3);
  let year = new Date().getFullYear();
  let newDate = new Date().toLocaleDateString();
  let d = newDate.split("/", 3);
  let date = d[1];
  let month = d[0];
  const WithDrawLayout = ({ value = 0 }) => {
    return (
      <View style={styles.withDrawLayout}>
        <TouchableOpacity
          onPress={() => {
            console.log("This is from withdraw screen");
          }}
        >
          <View style={styles.amountDateContainer}>
            <Text style={styles.amountText}>Amount</Text>
            <Text style={styles.date}>
              {day} {date}-{month}-{year}
            </Text>
          </View>
          <Text style={styles.khr}>KHR {value}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!empty) {
    return (
      <ScrollView>
        <Screen style={styles.container}>
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
          <WithDrawLayout />
        </Screen>
      </ScrollView>
    );
  }
  return (
    <Screen style={[styles.container, { justifyContent: "center" }]}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Empty withdraw</Text>
    </Screen>
  );
};

export default WithdrawScreen;
