import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
import * as Yup from "yup";
import { Entypo as Icon } from "@expo/vector-icons";

import styles from "./style";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  contactNumber: Yup.string()
    .required("This field is Required")
    .min(10, "Phone number is not valid")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
});

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState("🇮🇳");
  const [error, setError] = useState();

  const handleSubmit = () => {
    navigation.navigate("VerifyOTP");
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 100,
              height: 100,
              marginTop: 75,
              alignSelf: "center",
            }}
          />
          <View style={{ marginLeft: 40, marginTop: 40 }}>
            <Text style={{ fontSize: 15 }}>Enter phone number</Text>
          </View>
          <AppForm
            validationSchema={validationSchema}
            initialValues={{ contactNumber: "" }}
            onSubmit={handleSubmit}
          >
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  width: "25%",
                  marginLeft: 40,
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "100%",
                    marginTop: 1,
                  }}
                >
                  <Icon
                    name="chevron-thin-down"
                    size={15}
                    color={colors.blackColor}
                  />
                  <Text style={{ fontSize: 20 }}>{countryFlag} </Text>
                  <Text style={{ fontSize: 15 }}>{countryCode}</Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginLeft: 10 }}>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="contactNumber"
                  keyboardType="numeric"
                  textAlign="center"
                  trim
                  placeholder="Enter phone number"
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 20,
                    width: "70%",
                  }}
                  maxLength={10}
                />
              </View>
            </View>
            {/* <TextInput
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
            /> */}
            <ErrorMessage error="Phone Number is not valid" visible={error} />
            <SubmitButton
              title="NEXT"
              onSubmit={handleSubmit}
              style={{ width: "80%" }}
            />
          </AppForm>
          {/* <AppButton
            title="NEXT"
            onPress={() => {
              phoneNumber.length === 0 || phoneNumber.length < 10
                ? null
                : navigation.navigate("VerifyOTP");
            }}
            color="primaryColor"
            style={{ width: "80%", padding: 10, marginTop: 30 }}
          /> */}

          <View style={{ marginTop: 100, alignItems: "center" }}>
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
              style={{
                width: "40%",
                padding: 10,
                marginTop: 20,
                backgroundColor: colors.orangeColor,
              }}
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
                height: 400,
              },
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};
export default Login;
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
