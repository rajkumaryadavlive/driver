import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import styles from "./style";

import Screen from "../../components/Screen";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openCountry, setOpenCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const toggleCountry = (openCountry) => {
    setOpenCountry(openCountry);
  };

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
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <TextInput
          editable={false}
          style={styles.countryCodeTextInput}
          value="91"
        />
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            bottom: 5,
            left: 70,
          }}
        />
        <TextInput
          style={{ marginLeft: 10, borderBottomWidth: 1, width: "50%" }}
          value={phoneNumber}
          onChangeText={(val) => setPhoneNumber(val)}
          keyboardType="number-pad"
          placeholder="Phone number"
        />
      </View>

      <TouchableOpacity onPress={() => console.log("this is from next button")}>
        <View
          style={{
            width: "80%",
            height: "25%",
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            alignSelf: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ color: "white" }}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", width: "80%" }}>
          Registration means that you fully agree with terms and condition
        </Text>
      </View>
    </Screen>
  );
};
export default Login;
