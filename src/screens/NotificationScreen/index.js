import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import styles from "./style";
import Screen from "../../components/Screen";
import { primaryColor } from "../../constants/colors";

const NotificationScreen = ({
  empty = false,
  body = "this is a sentence to check whether how it is looking in the body of the card and if its working or not in the card component",
}) => {
  const [expandable, setExpandable] = useState(false);

  if (!empty) {
    return (
      <Screen style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            activeOpacity={9}
            onPress={() => setExpandable(!expandable)}
          >
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Happy Khmer New Year</Text>
              <Text style={styles.date}>Mon 27-Jan-2020</Text>
            </View>
            {expandable ? (
              <Text style={styles.body}>{body}</Text>
            ) : (
              <Text numberOfLines={1} style={styles.body}>
                {body}
              </Text>
            )}
            <View style={styles.iconContainer}>
              <Icon
                name={expandable ? "chevron-up" : "chevron-down"}
                size={23}
                color={primaryColor}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
  return (
    <Screen style={[styles.container, { justifyContent: "center" }]}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Empty Notifications</Text>
    </Screen>
  );
};

export default NotificationScreen;
