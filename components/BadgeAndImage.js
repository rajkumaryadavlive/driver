import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { wp, hp } from "../constants/dimensions";
import * as colors from "../constants/colors";

const BadgeAndImage = ({
  containerStyle,
  imageContainerStyle,
  imageStyle,
  badgeContainerStyle,
  medal = require("../assets/images/silvermedal.png"),
  userImage = require("../assets/images/user.png"),
}) => {
  return (
    <View style={containerStyle}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image source={userImage} style={[styles.image, imageStyle]} />
        <View style={[styles.badgeContainer, badgeContainerStyle]}>
          <Image source={medal} style={[styles.image, imageStyle]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    width: wp(4),
    height: hp(3),
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(10),
  },
  imageContainer: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: colors.orangeColor,
    padding: wp(0.3),
  },
});

export default BadgeAndImage;
