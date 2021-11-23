import React, { useRef } from "react";
import { View, Text, Button, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import OTPTextInput from "react-native-otp-textinput";
const OtpVerify = () => {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
    console.log(otpInput);
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
        style={{ backgroundColor: "white" }}
      >
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/images/logo.png")}
            />
          </View>
          <View style={{ textAlign: "center" }}>
            <Text style={{ fontSize: 18 }}>
              Please enter the verification code to your phone number
            </Text>
            <OTPTextInput ref={otpInput} />
            <View style={styles.verifyButton}>
              <Button title="VERIFY CODE" onClick={clearText} />
            </View>
            <Text style={{ marginTop: 20 }}>
              Don't get code? Resend code 00:30s
            </Text>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default OtpVerify;
