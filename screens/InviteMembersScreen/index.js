import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

import styles from "./style";
import { darkGreenColor, orangeColor } from "../../constants/colors";

const InviteMembersScreen = ({ empty = false }) => {
  const Fields = ({ title, value }) => {
    return (
      <View style={styles.firstContainer}>
        <Text style={styles.labels}>{title} :</Text>
        <Text style={styles.value}> {value}</Text>
      </View>
    );
  };

  const InvitedList = ({
    levelNo = "L-1",
    invitedId = "1234",
    name = "AAAAA",
    phoneNumber = "+855-12-345-678",
    earned = "0",
    date = "01-Jan-2020",
    color = "green",
  }) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.imageAndDetails}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/user.png")}
              style={styles.userImage}
            />
            <View style={styles.badgeContainer}>
              <Image
                source={require("../../assets/images/silvermedal.png")}
                style={styles.medalImage}
              />
            </View>
            <Fields title="Level" value={levelNo} />
          </View>
          <View>
            <View style={styles.dateContainer}>
              <Fields title="Invited ID" value={invitedId} />
              <Text style={styles.date}>Register Date : {date}</Text>
            </View>
            <Fields title="Name" value={name} />
            <Fields title="Phone No" value={phoneNumber} />
            <View style={styles.iconContainer}>
              <Fields title="Earned" value={earned} />
              <Icon
                name="circle"
                size={21}
                color={color === "green" ? darkGreenColor : orangeColor}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  if (!empty) {
    return (
      <View style={styles.container}>
        <InvitedList />
        <InvitedList />
        <InvitedList
          levelNo="L-2"
          invitedId="12345"
          name="BBBBB"
          phoneNumber="321654987"
          earned="234"
          color="orange"
        />
        <InvitedList
          levelNo="L-2"
          invitedId="12345"
          name="BBBBB"
          phoneNumber="321654987"
          earned="234"
          color="orange"
        />
      </View>
    );
  }
  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.emptyContainerImage}
      />
      <Text style={styles.text}>Empty Invite Members</Text>
    </View>
  );
};

export default InviteMembersScreen;
