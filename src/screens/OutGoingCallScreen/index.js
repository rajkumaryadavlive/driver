import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import styles from "./style";

const OutGoingCallScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Out Going Call</Text>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              //   uri: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
              uri: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.passengerText}>Passenger GoGo Taxi.</Text>
        <Text style={styles.passengerName}>Huon Thornith</Text>
        <Text style={styles.ringingText}>Ringing...</Text>
        <View style={styles.iconContainer}>
          <Icon name="phone" color="white" style={styles.icon} size={35} />
        </View>
      </View>
    </View>
  );
};

export default OutGoingCallScreen;
