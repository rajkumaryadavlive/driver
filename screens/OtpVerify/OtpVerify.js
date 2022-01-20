import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import OTPTextInput from "react-native-otp-textinput";

import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";

import authApi from "../../api/auth";
import useAuth from "../../hooks/useAuth";

const OtpVerify = ({ navigation, route }) => {
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = useState("");

  const otpInput = useRef(null);
  const { getUserToken } = useAuth();

  const phoneNumber = route.params.phoneNumber;

  const handleSubmit = async () => {
    const result = await authApi.verifyOTP(phoneNumber, otp);
    if (!result.ok) {
      console.log(result.data);
      return;
    } else {
      console.log(result.data);
      const isProfileUpdated = result.data.data.isProfileUpdated;
      console.log("====================================");
      console.log("This is profile status", isProfileUpdated);
      console.log("====================================");
      const userToken = result.data.data.userToken;
      getUserToken(userToken);
      otpInput.current.clear();
      navigation.navigate(isProfileUpdated ? "Drawer" : "EditProfile");
    }
  };

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
      >
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/images/cmplogo.png")}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, textAlign: "center", marginTop: 20 }}>
              Please enter the verification code to your phone number
            </Text>
            <OTPTextInput
              ref={otpInput}
              placeholder="0"
              handleTextChange={(val) => {
                setOtp(val);
              }}
            />
          </View>
          <View style={styles.verifyButton}>
            {/* <Button title="VERIFY CODE" onPress={() => clearText} /> */}
            <AppButton
              title="VERIFY CODE"
              onPress={handleSubmit}
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
