import React from "react";
import { View, Text } from "react-native";
import { EvilIcons as Icon } from "@expo/vector-icons";

import styles from "./style";
import { primaryColor } from "../../constants/colors";

const MyBookingsScreen = ({ cancelled = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.amountAndDateContainer}>
          <Text style={cancelled ? styles.cancelled : styles.amount}>
            {cancelled ? `Cancelled` : `12,000.00 KHR`}
          </Text>
          <View>
            <Text style={styles.dateAndTime}>Mon 22 Mar 19 09.02 AM</Text>
            {!cancelled && (
              <View style={styles.successfulTrip}>
                <Text style={styles.successText}>Successful trip</Text>
                <Icon name="check" size={15} color={primaryColor} />
              </View>
            )}
          </View>
        </View>
        <View style={styles.nameAndNumber}>
          <Text style={styles.nameAndNumberText}>Sok Chanraksmey</Text>
          <Text style={styles.nameAndNumberText}>+85512254141</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
          <Text style={styles.fromAndTo}>From:</Text>
          <Text style={styles.fromName}>Toul Tom Pong</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.fromAndTo}>To:</Text>
          <Text style={styles.toName}>Thsa Thmey</Text>
        </View>
      </View>
    </View>
  );
};

export default MyBookingsScreen;
