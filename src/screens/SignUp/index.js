import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { EvilIcons as Icon } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import styles from "./style";
import * as colors from "../../constants/colors";
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
    .required("This field is Required")
    .min(10, "Phone number is not valid")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  vehiclePlateNumber: Yup.string()
    .required()
    .min(4)
    .max(15)
    .label("Plate Number"),
});

const SignUp = ({ navigation }) => {
  const [error, setError] = useState();

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const FieldTitle = ({ title }) => {
    return (
      <Text style={{ marginTop: 5, marginBottom: 3, fontFamily: "segoeui" }}>
        {title}
        <Text style={{ color: "red" }}> *</Text>
      </Text>
    );
  };

  const handleSubmit = (userInfo) => {
    if (selectedVehicle === null) {
      setError("Select Vehicle Type");
    } else {
      setError("");
      console.log(userInfo, "Vehicle selected is " + selectedVehicle);
    }
  };

  return (
    <View style={styles.container}>
      <Screen>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.header}>Driver Registration</Text>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.profileImage}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  console.log("This is from camera icon in signup page");
                }}
              >
                <Icon name="camera" size={30} color={colors.primaryColor} />
              </TouchableOpacity>
            </View>
            <AppForm
              validationSchema={validationSchema}
              initialValues={{
                userName: "",
                phoneNumber: "",
                vehiclePlateNumber: "",
              }}
              onSubmit={handleSubmit}
            >
              <FieldTitle title="Name" required />
              <AppFormField
                name="userName"
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Enter Name"
                style={styles.textInput}
              />

              <FieldTitle title="Phone Number" required />
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
              <FieldTitle title="Vehicle Type" required />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedVehicle}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedVehicle(itemValue);
                    setError("");
                  }}
                >
                  <Picker.Item label="Select Type..." value={null} />
                  <Picker.Item label="Vehicle 1" value="Vehicle 1" />
                  <Picker.Item label="Vehicle 2" value="Vehicle 2" />
                </Picker>
              </View>
              <ErrorMessage error={error} visible={error} />
              <FieldTitle title="Vehicle Plate Number" required />
              <AppFormField
                name="vehiclePlateNumber"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter plate number"
                trim
                maxLength={10}
                style={styles.textInput}
              />

              <SubmitButton
                title="SAVE"
                onSubmit={handleSubmit}
                style={{ marginBottom: 10 }}
              />
            </AppForm>
          </View>
        </KeyboardAwareScrollView>
      </Screen>
    </View>
  );
};

export default SignUp;

// const [name, setName] = useState("");
// const [phoneNumber, setPhoneNumber] = useState();
// const [openCountry, setOpenCountry] = useState();
// const [selectedCountry, setSelectedCountry] = useState();
// const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

// const toggleCountry = (openCountry) => {
//   setOpenCountry(openCountry);
// };

/* <TextInput
                style={styles.textInput}
                placeholder="Enter Plate Number"
                underlineColorAndroid={"transparent"}
                value={vehiclePlateNumber}
                onChangeText={(val) => setVehiclePlateNumber(val)}
              /> */
/* <TextInput
                style={styles.textInput}
                placeholder="Enter Name"
                underlineColorAndroid={"transparent"}
                value={name}
                onChangeText={(val) => setName(val)}
              /> */
/* <TextInput
                style={styles.textInput}
                placeholder="Phone Number"
                underlineColorAndroid={"transparent"}
                keyboardType="number-pad"
                value={phoneNumber}
                onChangeText={(val) => setPhoneNumber(val)}
              /> */
/* <View style={{ marginTop: 15 }}>
            <AppButton
              title="SAVE"
              color="primaryColor"
              onPress={() => {
                console.log("This is from save button of sign up page ");
                console.log(
                  name,
                  phoneNumber,
                  selectedVehicle,
                  vehiclePlateNumber
                );
              }}
            />
          </View> */
