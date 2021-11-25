import React, { useRef, useState, useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import OTPTextInput from "react-native-otp-textinput";

import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";

const OtpVerify = () => {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const [seconds, setSeconds] = useState(30);

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    return () => {
      setSeconds(seconds - 1);
    };
  });

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
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Please enter the verification code to your phone number
            </Text>
            <OTPTextInput ref={otpInput} />
          </View>
          <View style={styles.verifyButton}>
            {/* <Button title="VERIFY CODE" onPress={() => clearText} /> */}
            <AppButton
              title="VERIFY CODE"
              onPress={clearText}
              color="primaryColor"
              style={{ width: "90%" }}
            />
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17 }}>Don't get code?</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log("Resend the code ....");
                }}
              >
                <Text style={{ color: colors.orangeColor, fontSize: 20 }}>
                  {" "}
                  Resend code{" "}
                </Text>
              </TouchableOpacity>
              {seconds > 0 && (
                <Text style={{ color: "black", fontSize: 17 }}>
                  in {seconds}s
                </Text>
              )}
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default OtpVerify;
