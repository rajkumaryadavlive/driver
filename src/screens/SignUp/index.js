import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { EvilIcons as Icon, Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import styles from "./style";
import * as colors from "../../constants/colors";
import { wp, hp } from "../../constants/dimensions";
import Screen from "../../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().min(3, "Name is too short").label("Name"),
  phoneNumber: Yup.string()
    .required()
    .label("Phone No.")
    .min(10, "Phone number is not valid")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  email: Yup.string().email().required().label("Email-id"),
  password: Yup.string().required().min(4).max(20).label("Password"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords does not match"
  ),
});

const SignUp = ({ navigation, route }) => {
  const FieldTitle = ({ title, required }) => {
    return (
      <Text style={styles.fieldName}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
    );
  };

  const handleSubmit = (userInfo) => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Screen>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/splash.png")}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.header}>Create an account</Text>
            <AppForm
              validationSchema={validationSchema}
              initialValues={{
                userName: "",
                phoneNumber: "",
                email: "",
                password: "",
                cpassword: "",
              }}
              onSubmit={handleSubmit}
            >
              <FieldTitle title="Name" />
              <AppFormField
                name="userName"
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Enter Name"
                style={styles.textInput}
              />

              <FieldTitle title="Phone No." />
              <AppFormField
                name="phoneNumber"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter phone number"
                keyboardType="numeric"
                trim
                maxLength={10}
                style={styles.textInput}
              />

              <FieldTitle title="Email ID" />
              <AppFormField
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter e-mail ID"
                trim
                style={styles.textInput}
              />
              <FieldTitle title="Password" />
              <AppFormField
                name="password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Password"
                trim
                minLength={6}
                style={styles.textInput}
              />
              <FieldTitle title="Confirm Password" />
              <AppFormField
                name="cpassword"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Password"
                trim
                maxLength={10}
                style={styles.textInput}
              />

              <SubmitButton
                title="SIGN UP"
                onSubmit={handleSubmit}
                style={styles.button}
              />
            </AppForm>
          </View>
        </KeyboardAwareScrollView>
      </Screen>
    </View>
  );
};

export default SignUp;
