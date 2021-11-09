import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";
import camera from "../../assets/icons/camera.svg";

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [openCountry, setOpenCountry] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  const toggleCountry = (openCountry) => {
    setOpenCountry(openCountry);
  };

  return (
    <View style={styles.container}>
      <View style={styles.regForm}>
        <Text style={styles.header}>Driver Registration</Text>
        <View style={styles.imageView}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              left: -6,
              bottom: 24,
              width: 25,
              alignSelf: "center",
              backgroundColor: "white",
              padding: 3,
              borderRadius: "50%",
              border: "2px solid blue",
            }}
          >
            <Text style={{ textAlign: "center" }}>III</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          underlineColorAndroid={"transparent"}
          keyboardType="number-pad"
        />
        <Picker style={styles.textInput}>
          <Picker.Item label="Select Vehicle" />
          <Picker.Item label="Vehicle 1" value="1" />
          <Picker.Item label="Vehicle 2" value="2" />
        </Picker>
        <TextInput
          style={styles.textInput}
          placeholder="Vehicle Plate Number"
          underlineColorAndroid={"transparent"}
        />
        <View>
          <Button title="Save" />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
