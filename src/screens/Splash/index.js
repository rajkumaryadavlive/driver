import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { connect } from "react-redux";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/logo.png")}
      />
      <View>
        <Text style={styles.logoText}>--Driver--</Text>
      </View>
    </View>
  );
};

export default Splash;
