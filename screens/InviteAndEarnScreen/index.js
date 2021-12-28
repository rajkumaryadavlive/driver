import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./style";
import AppButton from "../../components/AppButton";

const InviteAndEarnScreen = (props) => {
  const InviteCard = ({ title, inviteCode, buttonText, onButtonPress }) => {
    return (
      <>
        <View style={styles.card}>
          <Text style={styles.inviteMsg}>{title}</Text>
          <Text style={styles.code}>{inviteCode}</Text>
        </View>
        <AppButton
          title={buttonText}
          onPress={onButtonPress}
          style={styles.button}
        />
      </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <InviteCard
          title="Invite your friend via social media"
          inviteCode="GO786IJK"
          buttonText="SHARE"
          onButtonPress={() =>
            console.log("This is from share button from invite and earn")
          }
        />
        <InviteCard
          title="Invite your friend via SMSs"
          inviteCode="GO786IJK"
          buttonText="SEND SMS"
          onButtonPress={() =>
            console.log("This is from send sms button from invite and earn")
          }
        />
        <View style={styles.qrContainer}>
          <Image
            source={{
              uri: "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.qrText}>Scan QR code</Text>
      </View>
    </ScrollView>
  );
};

export default InviteAndEarnScreen;
