import React from "react";
import { View, Text } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

import styles from "./style";
import { orangeColor } from "../../constants/colors";

const BillingPlanScreen = () => {
  const PlanCard = ({ heading, status, offer }) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Icon name="circle" size={20} color={orangeColor} />
          <Text style={styles.offer}>{offer}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PlanCard
        heading="Personal Plan"
        status="Current Plan"
        offer="15% per booking transaction"
      />
    </View>
  );
};

export default BillingPlanScreen;
