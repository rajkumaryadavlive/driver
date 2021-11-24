import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { EvilIcons as Icon } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./style";
import * as colors from "../../constants/colors";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [openCountry, setOpenCountry] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

  const toggleCountry = (openCountry) => {
    setOpenCountry(openCountry);
  };

  const FieldTitle = ({ title, required }) => {
    return (
      <Text style={{ marginBottom: 3, fontFamily: "segoeui" }}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
    );
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
            <FieldTitle title="Name" required />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              underlineColorAndroid={"transparent"}
              value={name}
              onChangeText={(val) => setName(val)}
            />
            <FieldTitle title="Phone Number" required />
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              underlineColorAndroid={"transparent"}
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={(val) => setPhoneNumber(val)}
            />
            <FieldTitle title="Vehicle Type" required />
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedVehicle}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedVehicle(itemValue)
                }
              >
                <Picker.Item label="Select Type..." value={null} />
                <Picker.Item label="Vehicle 1" value="Vehicle 1" />
                <Picker.Item label="Vehicle 2" value="Vehicle 2" />
              </Picker>
            </View>
            <FieldTitle title="Vehicle Plate Number" required />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Plate Number"
              underlineColorAndroid={"transparent"}
              value={vehiclePlateNumber}
              onChangeText={(val) => setVehiclePlateNumber(val)}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <AppButton
              title="SAVE"
              color="primaryColor"
              onPress={() => {
                console.log("This is from save button of sign up page ");
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </Screen>
    </View>
  );
};

export default SignUp;
