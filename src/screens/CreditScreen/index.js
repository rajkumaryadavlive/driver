import React from "react";
import { View, Text } from "react-native";
import AppButton from "../../components/AppButton";

import styles from "./style";

const CreditScreen = ({ currentBalance = "1,000", navigation }) => {
  const HistoryList = ({
    date = "Mon 01-Jan-2020 12.11 PM",
    amount = "1,000",
  }) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>Amount</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.amount}>KHR {amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentBalanceContainer}>
        <Text style={styles.currentBalanceText}>Current Balance</Text>
        <Text style={styles.amount}>KHR {currentBalance}</Text>
      </View>
      <AppButton
        title="ADD CREDIT"
        onPress={() => {
          navigation.navigate("AddCreditScreen");
        }}
        style={styles.button}
      />
      <View
        style={{ borderBottomWidth: 1, alignSelf: "flex-start", width: "100%" }}
      >
        <Text style={styles.topUpHistory}>Top up history</Text>
      </View>
      <HistoryList />
      <HistoryList />
      <HistoryList />
    </View>
  );
};

export default CreditScreen;
