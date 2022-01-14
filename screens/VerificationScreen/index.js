import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

const VerificationScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/underreview.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.heading}>Your profile is under review</Text>
      <Text style={styles.subTitle}>
        Your profile has been submitted and will be reviewed by our team. You
        will be notified if anything is needed.
      </Text>
    </View>
  );
};

export default VerificationScreen;
