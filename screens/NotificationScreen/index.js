import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import styles from "./style";
import Screen from "../../components/Screen";
import { primaryColor } from "../../constants/colors";

const NotificationScreen = ({
  empty = false,
  body = "this is a sentence to check whether how it is looking in the body of the card and if its working or not in the card component this is a sentence to check whether how it is looking in the body of the card and if its working or not in the card component this is a sentence to check whether how it is looking in the body of the card and if its working or not in the card component",
  heading = "Happy Khmer New Year",
  date = "Mon 27-Jan-2020",
  imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  // imageUrl,
}) => {
  const [expandable, setExpandable] = useState(false);
  if (!empty) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={9}
          onPress={() => setExpandable(!expandable)}
        >
          <View style={styles.card}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>{heading}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.body}>
              {expandable ? (
                <Text style={styles.bodyText}>{body}</Text>
              ) : (
                <Text numberOfLines={1} style={styles.bodyText}>
                  {body}
                </Text>
              )}
              {imageUrl && (
                <View style={expandable ? styles.imageContainer : null}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={expandable ? styles.cardImage : null}
                  />
                </View>
              )}
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name={expandable ? "chevron-up" : "chevron-down"}
                size={23}
                color={primaryColor}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
