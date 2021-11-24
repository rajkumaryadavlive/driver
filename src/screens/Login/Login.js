import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./style";

import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState("🇮🇳");

  return (
    // <View style={styles.phoneNumberContainer}>
    //   <View style={styles.logoContainer}>
    //     <Image
    //       style={{ width: 100, height: 100, marginRight: 5 }}
    //       source={require("../../assets/images/user.png")}
    //     />
    //   </View>
    //   <Text style={styles.enterMonoTextStyle_1}>Enter phone number</Text>

    //   <View style={styles.phoneCodeContainer}>
    //     <View style={styles.countryCodeContainer}>
    //       <TextInput
    //         editable={false}
    //         keyboardType="number-pad"
    //         style={styles.countryCodeTextInput}
    //         value="91"
    //       />
    //       <Image
    //         style={styles.dropDownImageStyle}
    //         source={{
    //           uri: "expand_more",
    //           isStatic: true,
    //         }}
    //       />

    //       <TouchableOpacity>
    //         <View
    //           style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
    //         >
    //           <Text style={styles.phoneTextStyle}>
    //             {selectedCountry !== null ? selectedCountry : "91"}
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //     <TextInput
    //       placeholder="Phone Number"
    //       keyboardType="number-pad"
    //       returnKeyType={"done"}
    //       value={phoneNumber}
    //       style={styles.phoneNumberInputStyle}
    //       maxLength={14}
    //       onChangeText={(text) => setPhoneNumber(text)}
    //     />

    //     <View style={styles.nextButtonContainer}>
    //       <Button style={styles.nextButtonText} title="Next" />
    //     </View>
    //   </View>
    // </View>
    <Screen>
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 100,
              height: 100,
              marginTop: 80,
              alignSelf: "center",
            }}
          />
          <View style={{ marginLeft: 40, marginTop: 40 }}>
            <Text>Enter phone number</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                width: "25%",
                borderBottomWidth: 1,
                marginLeft: 40,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 20 }}>{countryFlag} </Text>
                <Text style={{ fontSize: 23 }}>{countryCode}</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                marginLeft: 10,
                borderBottomWidth: 1,
                width: "50%",
                fontSize: 23,
              }}
              maxLength={10}
              value={phoneNumber}
              onChangeText={(val) => setPhoneNumber(val)}
              keyboardType="numeric"
              placeholder="Phone number"
            />
          </View>
          <AppButton
            title="NEXT"
            onPress={() => {
              phoneNumber.length === 0 || phoneNumber.length < 10
                ? null
                : navigation.navigate("VerifyOTP");
            }}
            color="primaryColor"
            style={{ width: "80%", padding: 10, marginTop: 30 }}
          />
          <View style={{ marginTop: 100, alignItems: "center" }}>
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
              color="orangeColor"
              style={{ width: "40%", padding: 10, marginTop: 20 }}
            />
            <Text style={{ textAlign: "center", width: "80%" }}>
              Registration means that you fully agree with terms and condition
            </Text>
          </View>
          <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              setCountryFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{
              modal: {
                position: "absolute",
                top: "40%",
              },
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};
export default Login;
