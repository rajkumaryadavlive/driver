import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import styles from "./style";

const IncomingCallScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Incoming Call</Text>
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
        <View style={styles.buttonsContainer}>
          <View style={styles.iconContainer}>
            <Icon
              name="phone"
              color="white"
              style={styles.pickUpCallIcon}
              size={50}
              onPress={() => console.log("This is from pick up")}
            />
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="phone"
              color="white"
              style={styles.endCallIcon}
              size={50}
              onPress={() => console.log("This is from end up call")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IncomingCallScreen;
