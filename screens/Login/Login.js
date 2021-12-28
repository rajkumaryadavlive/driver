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
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import * as colors from "../../constants/colors";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import authApi from "../../api/auth";

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

  const handleSubmit = async (userContact) => {
    const phoneNumber = userContact.contactNumber;
    const result = await authApi.login(phoneNumber, Platform.OS);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
      }
      return;
    } else {
      console.log(result.data);
      navigation.navigate("VerifyOTP", {
        phoneNumber: userContact.contactNumber,
      });
    }
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/cmplogo.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Enter phone number</Text>
          </View>
          <AppForm
            validationSchema={validationSchema}
            initialValues={{ contactNumber: "" }}
            onSubmit={handleSubmit}
          >
            <View style={styles.codeAndNumber}>
              <TouchableOpacity
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
              </TouchableOpacity>
              <View style={styles.textInputContainer}>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="contactNumber"
                  keyboardType="numeric"
                  trim
                  placeholder="Enter phone number.."
                  style={styles.textInput}
                  maxLength={10}
                />
              </View>
            </View>
            <ErrorMessage error={error} visible={error} />
            <SubmitButton
              title="NEXT"
              onSubmit={handleSubmit}
              style={styles.button}
            />
          </AppForm>
          <View style={styles.bottomContainer}>
            <AppButton
              title="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
              style={styles.signUpButton}
            />
            <Text style={styles.noteText}>
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
            style={styles.modal}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};
export default Login;
