import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../../components/AppButton";
import { hp } from "../../constants/dimensions";

import styles from "./style";

const ReceiptScreen = (props) => {
  const [seconds, setSeconds] = useState(15);

  const {
    dateAndTime = "Thu 16 Jan 2020 13.21pm",
    amount = "3,200.00",
    duration = "2m 10s",
    distance = "2",
    navigation,
  } = props;

  useEffect(() => {
    let timer;
    if (seconds > 0) timer = setTimeout(() => setSeconds(seconds - 1), 1000);

    return () => {
      clearTimeout(timer);
      seconds === 1 && navigation.navigate("Summary");
    };
  }, [seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.totalAndDate}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.date}>Date: {dateAndTime}</Text>
        </View>
        <Text style={styles.amount}>{`KHR  ${amount}`}</Text>
        <View style={styles.durationAndDistance}>
          <View style={styles.center}>
            <Text style={styles.text}>DURATION</Text>
            <Text style={styles.value}>{duration}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.text}>DISTANCE</Text>
            <Text style={styles.value}>{distance}km</Text>
          </View>
        </View>
        <AppButton
          title="CASH PAID"
          style={styles.button}
          onPress={() => navigation.navigate("Summary")}
          textStyle={styles.buttonText}
        />
        <Text style={styles.note}>
          Payment will be automatically closed within
        </Text>
        <Text style={styles.seconds}>{seconds} s</Text>
      </View>
    </View>
  );
};

export default ReceiptScreen;
