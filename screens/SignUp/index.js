import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";

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
import authApi from "../../api/auth";

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
  email: Yup.string().email().label("Email-id"),
  // password: Yup.string().required().min(4).max(20).label("Password"),
  // cpassword: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords does not match"
  // ),
});

const SignUp = ({ navigation, route }) => {
  const [gender, setGender] = useState(null);
  const [genderError, setGenderError] = useState(false);
  const [dobError, setDOBError] = useState(false);
  const [date, setDate] = useState(new Date());
  const [touched, setTouched] = useState(false);
  const [show, setShow] = useState(false);

  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();

  let newDate = yyyy + "-" + mm + "-" + dd;
  console.log(newDate);

  let today = new Date().getFullYear();
  let age = today - yyyy;
  console.log(age);

  const FieldTitle = ({ title, required }) => {
    return (
      <Text style={styles.fieldName}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
    );
  };

  const showMode = () => {
    setShow(true);
    setTouched(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handleSubmit = async (userInfo) => {
    if (gender === null) {
      return setGenderError(true);
    }
    if (age < 18) {
      return setDOBError(true);
    }
    console.log(userInfo);
    let data = {
      name: userInfo.userName,
      email: userInfo.email,
      phone: userInfo.phoneNumber,
      gender: gender,
      dob: newDate,
    };

    const result = await authApi.signUp(data);
    if (!result.ok) {
      console.log(result.data);
      alert(result.data.message);
    } else {
      console.log(result.data);
      navigation.navigate("Login");
    }
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
                // password: "",
                // cpassword: "",
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
              {/* 
              <FieldTitle title="Gender" />
              <View style={[styles.textInput, { paddingLeft: hp(2) }]}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue, itemIndex) => {
                    setGender(itemValue);
                  }}
                >
                  <Picker.Item label="Select Type..." value={null} />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
              {gender === null && (
                <ErrorMessage
                  error="Please select gender"
                  visible={genderError}
                />
              )}
              <FieldTitle title="Date of Birth" />
              <TouchableOpacity onPress={showMode}>
                <View style={styles.textInput}>
                  {show ? (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      onChange={onChange}
                      maximumDate={new Date()}
                      minimumDate={new Date(2054)}
                    />
                  ) : !touched ? (
                    <Text style={{ color: "#ccc" }}>YYYY-MM-DD</Text>
                  ) : (
                    <Text style={{ color: "black" }}>{newDate}</Text>
                  )}
                </View>
                {age < 18 && (
                  <ErrorMessage
                    error="Date Invalid - Age should be more than 18."
                    visible={dobError}
                  />
                )}
              </TouchableOpacity> */}
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

/* <FieldTitle title="Password" />
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
              /> */
