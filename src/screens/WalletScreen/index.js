import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

import styles from "./style";
import Screen from "../../components/Screen";
import { primaryColor } from "../../constants/colors";
import AppButton from "../../components/AppButton";

const WalletScreen = ({ value = "2,000,000.00" }) => {
  const Box = ({ children }) => {
    return <View style={styles.contentContainer}>{children}</View>;
  };

  const EarnedAmount = () => {
    return (
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Amount</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.referralAmount}>KHR 7,999.00</Text>
          <Icon
            name="chevron-thin-right"
            size={20}
            color={primaryColor}
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.image}
          />
          <Box>
            <View style={styles.innerContainer}>
              <Text style={styles.heading}>Balance</Text>
              <Text style={styles.balanceAmount}>KHR {value}</Text>
            </View>
          </Box>
          <Box>
            <TouchableOpacity
              onPress={() => {
                console.log("This is from referral earning");
              }}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.heading}>Referral earning</Text>
                <EarnedAmount />
              </View>
            </TouchableOpacity>
          </Box>
          <Box>
            <TouchableOpacity
              onPress={() => {
                console.log("This is from withdraw of the referral earning");
              }}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.heading}>
                  Withdraw of the referral earnings
                </Text>
                <EarnedAmount />
              </View>
            </TouchableOpacity>
          </Box>
          <AppButton title="EARN MORE" style={styles.button} />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default WalletScreen;
