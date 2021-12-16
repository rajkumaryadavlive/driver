import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Switch } from "react-native";

import * as colors from "../../constants/colors";
import styles from "./style";
import { hp, wp } from "../../constants/dimensions";
import BadgeAndImage from "../../components/BadgeAndImage";

const NewJob = ({ onPressReject }) => {
  const Dot = () => {
    return <View style={styles.dot} />;
  };

  return (
    <View style={styles.topContent}>
      <BadgeAndImage />
      <View style={styles.newJob}>
        <View style={{ marginRight: hp(7) }}>
          <Text style={styles.newJobText}>New Job</Text>
          <View style={styles.threeDots}>
            <Dot />
            <Dot />
            <Dot />
          </View>
        </View>

        <TouchableOpacity onPress={onPressReject}>
          <View style={[styles.buttonContainer, styles.rejectButtonContainer]}>
            <Text
              style={[
                styles.buttonText,
                { color: colors.whiteColor, fontSize: 15 },
              ]}
            >
              Reject
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewJob;
