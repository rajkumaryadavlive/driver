import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

// import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { Entypo as Icon } from "@expo/vector-icons";
import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
// import DateTimePicker from "@react-native-community/datetimepicker";

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
  password: Yup.string().required().min(4).max(20).label("Password"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords does not match"
  ),
});

const SignUp = (props) => {
  const { navigation, route } = props;
  // const [gender, setGender] = useState(null);
  // const [genderError, setGenderError] = useState(false);
  // const [dobError, setDOBError] = useState(false);
  // const [date, setDate] = useState(new Date());
  // const [touched, setTouched] = useState(false);
  // const [countryCode, setCountryCode] = useState("+91");
  // const [countryFlag, setCountryFlag] = useState("🇮🇳");
  const [countryCode, setCountryCode] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryError, setCountryError] = useState(false);

  const [show, setShow] = useState(false);

  // let dd = String(date.getDate()).padStart(2, "0");
  // let mm = String(date.getMonth() + 1).padStart(2, "0");
  // let yyyy = date.getFullYear();

  // let newDate = yyyy + "-" + mm + "-" + dd;
  // console.log(newDate);

  // let today = new Date().getFullYear();
  // let age = today - yyyy;
  // console.log(age);

  const FieldTitle = ({ title, required }) => {
    return (
      <Text style={styles.fieldName}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
    );
  };

  // const showMode = () => {
  //   setShow(true);
  //   setTouched(true);
  // };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(false);
  //   setDate(currentDate);
  // };

  const handleSubmit = async (userInfo) => {
    // if (gender === null) {
    //   return setGenderError(true);
    // }
    // if (age < 18) {
    //   return setDOBError(true);
    // }
    if (countryName === "") {
      setCountryError(true);
    }
    console.log(userInfo);
    let data = {
      name: userInfo.userName,
      email: userInfo.email,
      phone: userInfo.phoneNumber,
      password: userInfo.password,
      country: countryName,
      confirmPassword: userInfo.cpassword,
      // gender: gender,
      // dob: newDate,
    };
    console.log("This is data from handleSubmit", data);
    const result = await authApi.signUp(data);
    if (!result.ok) {
      console.log(result.data);
      alert(result.data.message);
    } else {
      console.log(result.data);
      alert(result.data.message);
      navigation.navigate("Login");
    }
  };

  return (
    // <View style={styles.container}>
    <Screen>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          console.log("pressed");
          setShow(false);
        }}
      >
        <View style={{ alignItems: "center" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={null}
            renderItem={null}
            ListHeaderComponent={
              <>
                <View>
                  <View style={styles.imageView}>
                    <Image
                      source={require("../../assets/images/splash.png")}
                      style={styles.profileImage}
                    />
                  </View>
                  <Text style={styles.header}>Create an account</Text>
                </View>
              </>
            }
            ListFooterComponent={
              <>
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
                  <AppFormField
                    name="userName"
                    autoCapitalize="words"
                    autoCorrect={false}
                    placeholder="Enter Name"
                    style={styles.textInput}
                    containerStyle={styles.textInputContainer}
                  />

                  <AppFormField
                    name="phoneNumber"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter phone number"
                    keyboardType="numeric"
                    trim
                    maxLength={10}
                    style={styles.textInput}
                    containerStyle={styles.textInputContainer}
                  />
                  <TouchableOpacity
                    onPress={() => setShow(true)}
                    style={styles.callingCodeContainer}
                  >
                    <View style={styles.callingCodeContent}>
                      {countryName !== "" ? (
                        <Text style={styles.countryFlag}>
                          {`${countryFlag} ${countryName} `}
                        </Text>
                      ) : (
                        <Text style={{ color: "#9d9d9e" }}>Your Country</Text>
                      )}
                      <Icon
                        name="chevron-thin-down"
                        size={hp(3)}
                        color={colors.blackColor}
                      />
                    </View>
                  </TouchableOpacity>
                  {countryName !== "" && (
                    <ErrorMessage
                      error="Please select country"
                      visible={countryError}
                    />
                  )}
                  <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter e-mail ID"
                    trim
                    style={styles.textInput}
                    containerStyle={styles.textInputContainer}
                  />
                  <AppFormField
                    name="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter Password"
                    trim
                    minLength={6}
                    style={styles.textInput}
                    containerStyle={styles.textInputContainer}
                  />
                  <AppFormField
                    name="cpassword"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter Password"
                    trim
                    maxLength={10}
                    style={styles.textInput}
                    containerStyle={styles.textInputContainer}
                  />
                  <SubmitButton
                    title="SIGN UP"
                    onSubmit={handleSubmit}
                    style={styles.button}
                  />
                </AppForm>
              </>
            }
          />
          <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              console.log(item);
              setCountryName(item.name.en);
              setCountryFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
    // </View>
  );
};

export default SignUp;

/* 
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
              </TouchableOpacity> */
