import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./style";

const InviteAndEarnDetailsScreen = (props) => {
  let count = 0;

  const Triangle = () => {
    return (
      <View style={styles.triangle}>
        <View style={styles.textContainer}>
          <Text style={styles.levelText}>Level</Text>
          <Text style={styles.levelText}>{++count}</Text>
        </View>
      </View>
    );
  };

  const List = ({ inviteId, amount }) => {
    return (
      <View style={styles.list}>
        <Triangle />
        <View style={styles.detailsContainer}>
          <Text style={styles.inviteId}>Invite : {inviteId}</Text>
          <Text style={styles.amount}>Earned : {amount}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageAndDetails}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.image}
          />
          <View style={styles.badgeContainer}>
            <Image
              source={require("../../assets/images/silvermedal.png")}
              style={styles.image}
            />
          </View>
        </View>
        <View>
          <Text style={styles.invitedId}>Invited : 2168</Text>
          <Text style={styles.invitedId}>Earn : KHR 2,00,000</Text>
        </View>
      </View>
      <List inviteId="2168" amount="KHR 2,00,000" />
      <List inviteId="2168" amount="KHR 2,00,000" />
      <List inviteId="2168" amount="KHR 2,00,000" />
      <List inviteId="2168" amount="KHR 2,00,000" />
      <List inviteId="2168" amount="KHR 2,00,000" />
    </ScrollView>
  );
};

export default InviteAndEarnDetailsScreen;
