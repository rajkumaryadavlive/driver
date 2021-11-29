import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./style";
import Screen from "../../components/Screen";

const ReferralScreen = ({ empty = false }) => {
  let wholeDate = new Date().toLocaleString();
  let day = wholeDate.slice(0, 3);
  let year = new Date().getFullYear();
  let newDate = new Date().toLocaleDateString();
  let d = newDate.split("/", 3);
  let date = d[1];
  let month = d[0];

  const ReferralCard = ({ value = "1,000" }) => {
    return (
      <View style={styles.card}>
        <View style={styles.nameAndDateContainer}>
          <Text style={styles.name}>Name here</Text>
          <Text style={styles.date}>
            {day} {date}-{month}-{year}
          </Text>
        </View>
        <Text style={styles.amount}>KHR {value}</Text>
        <View style={styles.divider} />
        <View style={styles.secondContentContainer}>
          <View>
            <Text style={styles.heading}>Plate No</Text>
            <Text style={styles.ids}>PP-007885</Text>
          </View>
          <View>
            <Text style={styles.heading}>Ride ID</Text>
            <Text style={styles.ids}>123456</Text>
          </View>
        </View>

        <View style={styles.pickUpAndDestinationContainer}>
          <Text style={styles.heading}>Pick Up</Text>
          <Text style={styles.pickUpAddress}>
            Doun teav village, Pream ek commune, ek phnmo district Doun teav
            village, Pream ek commune, ek phnmo district Doun teav village,
            Pream ek commune, ek phnmo district
          </Text>
        </View>
        <View style={styles.pickUpAndDestinationContainer}>
          <Text style={styles.heading}>Destination</Text>
          <Text style={styles.destinationAddress}>
            19B, Street 43212305, Phnom Penh, 43212 19B, Street 43212305, Phnom
            Penh, 43212 19B, Street 43212305, Phnom Penh, 43212
          </Text>
        </View>
      </View>
    );
  };

  if (!empty) {
    return (
      <ScrollView>
        <Screen style={styles.container}>
          <ReferralCard />
          <ReferralCard />
          <ReferralCard />
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
      <Text style={styles.emptyText}>Empty Referral Earnings</Text>
    </Screen>
  );
};

export default ReferralScreen;
