import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
import * as Yup from "yup";
import { Entypo as Icon } from "@expo/vector-icons";

import styles from "./style";
import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import authApi from "../../api/auth";
import { wp } from "../../constants/dimensions";
import Screen from "../../components/Screen";

const validationSchema = Yup.object().shape({
  contactNumber: Yup.string()
    .required("Please enter phone number")
    .min(10, "Phone number is not valid")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Password should be minimum of 6 characters"),
});

const Login = (props) => {
  const { navigation } = props;
  // const [show, setShow] = useState(false);
  // const [countryCode, setCountryCode] = useState("+91");
  // const [countryFlag, setCountryFlag] = useState("🇮🇳");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState();

  const handleSubmit = async (userContact) => {
    const phoneNumber = userContact.contactNumber;
    const result = await authApi.login(phoneNumber);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
      }
      return;
    } else {
      console.log(result.data);
      navigation.navigate("VerifyOTP");
    }
  };

  const handleEyeIcon = () => {
    setShowPassword(!showPassword);
  };
  const handleForgotPassword = () => {
    console.log("This is forgot password");
  };

  // const loginWithOtp = () => {
  //   navigation.navigate("VerifyOTP");
  // };

  return (
    <Screen style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={() => setShow(false)}> */}
      <View style={styles.contentContainer}>
        {/* <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/cmplogo.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View> */}

        {/* <View style={styles.headingContainer}>
            <Text style={styles.heading}>Enter phone number</Text>
          </View> */}
        <AppForm
          validationSchema={validationSchema}
          initialValues={{ contactNumber: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <View>
            {/* <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.callingCodeContainer}
              >
                <View style={styles.callingCodeContent}>
                  <Icon
                    name="chevron-thin-down"
                    size={15}
                    color={colors.blackColor}
                  />
                  <Text style={styles.countryFlag}>{countryFlag} </Text>
                  <Text style={styles.countryCode}>{countryCode}</Text>
                </View>
              </TouchableOpacity> */}
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="contactNumber"
              keyboardType="numeric"
              trim
              placeholder="Your Phone Number"
              style={styles.textInput}
              maxLength={10}
              containerStyle={styles.textInputContainer}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              secureTextEntry={!showPassword}
              placeholder="Your Password"
              textContentType="password"
              style={styles.textInput}
              rightIcon={showPassword ? "eye" : "eye-off"}
              onRightIconPress={handleEyeIcon}
              rightIconSize={wp(5.5)}
              rightIconColor={
                showPassword ? colors.primaryColor : colors.FONT_GREY
              }
              containerStyle={styles.textInputContainer}
            />
            <Text
              style={styles.forgotPasswordText}
              onPress={handleForgotPassword}
            >
              Forgot password?
            </Text>
          </View>
          <ErrorMessage error={error} visible={error} />
          {/* <View style={styles.loginButtons}> */}
          <SubmitButton
            title="Login"
            onSubmit={handleSubmit}
            style={styles.button}
          />
          {/* <AppButton
              title="Login with OTP"
              style={styles.button}
              onPress={loginWithOtp}
            /> */}
          {/* </View> */}
        </AppForm>

        {/* <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              setCountryFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={styles.modal}
          /> */}
      </View>
      <View style={styles.bottomContainer}>
        <Text>OR</Text>
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpButton}
        />
        {/* <Text style={styles.noteText}>
              Registration means that you fully agree with terms and condition
            </Text> */}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Screen>
  );
};
export default Login;
