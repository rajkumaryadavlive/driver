import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { EvilIcons as Icon1, AntDesign as Icon2 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import styles from "./style";
import * as colors from "../../constants/colors";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/forms";
import Screen from "../../components/Screen";
import { Picker } from "@react-native-picker/picker";

const validationSchema = Yup.object().shape({
  userName: Yup.string().min(3).required().label("Name"),
});

const EditProfileScreen = (props) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [vehicleTypeError, setVehicleTypeError] = useState();

  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
    uplineCode: "",
    vehicleYear: "",
    vehicleSeats: "",
    vehicleModel: "",
    vehiclePlateNumber: "",
  };

  const FieldTitle = ({ title, required, starColor = "grey" }) => {
    return (
      <Text style={styles.fieldsTitle}>
        {title}
        {required && <Text style={{ color: starColor }}> *</Text>}
      </Text>
    );
  };

  const IdComponent = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("Image pressed");
        }}
      >
        <View style={styles.idComp}>
          <Icon2 name="idcard" size={55} color="grey" />
          <View style={styles.idIconContainer}>
            <Icon1 name="camera" size={30} color={colors.primaryColor} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSubmit = (userInfo) => {
    if (selectedVehicle === null) {
      setVehicleTypeError("Select type of vehicle");
    } else {
      setVehicleTypeError("");
    }
  };

  return (
    <Screen>
      <KeyboardAwareScrollView>
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.contentContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.profileImage}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  console.log("This is from camera icon in edit profile page");
                }}
              >
                <Icon1 name="camera" size={30} color={colors.primaryColor} />
              </TouchableOpacity>
            </View>
            <View style={styles.titleAndFieldsContainer}>
              <FieldTitle title="Name" required />
              <AppFormField
                name="userName"
                placeholder="Enter Name"
                autoCorrect={false}
                autoCapitalize="words"
                style={styles.textInput}
              />
              <FieldTitle title="Phone Number" required />
              <AppFormField
                name="phoneNumber"
                placeholder="Enter phone number"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                trim
                style={styles.textInput}
              />
              <FieldTitle title="E-mail ( Optional )" />
              <AppFormField
                name="email"
                placeholder="Enter email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.textInput}
              />
              <FieldTitle title="Upline Code" />
              <AppFormField
                name="uplineCode"
                placeholder="Enter code"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={[styles.contentContainer, { marginTop: 10 }]}>
            <Text style={styles.secondContainerTitle}>
              Please add other document below
            </Text>
            <View style={styles.titleAndFieldsContainer}>
              <FieldTitle title="Vehicle type" required starColor="red" />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedVehicle}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedVehicle(itemValue);
                    setVehicleTypeError("");
                  }}
                >
                  <Picker.Item label="Select Type..." value={null} />
                  <Picker.Item label="Vehicle 1" value="Vehicle 1" />
                  <Picker.Item label="Vehicle 2" value="Vehicle 2" />
                </Picker>
              </View>
              <ErrorMessage
                error={vehicleTypeError}
                visible={vehicleTypeError}
              />
              <FieldTitle title="Vehicle Year" />
              <AppFormField
                name="vehicleYear"
                placeholder="Enter vehicle year"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                trim
                style={styles.textInput}
              />
              <FieldTitle title="Vehicle Seats" />
              <AppFormField
                name="vehicleSeats"
                placeholder="Enter phone number"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                trim
                style={styles.textInput}
              />
              <FieldTitle title="Vehicle Color" />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedColor}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedColor(itemValue)
                  }
                >
                  <Picker.Item label="Select color..." value={null} />
                  <Picker.Item label="White" value="white" />
                  <Picker.Item label="Black" value="black" />
                </Picker>
              </View>
              <FieldTitle title="Vehicle Model" />
              <AppFormField
                name="vehicleModel"
                placeholder="Enter vehicle model"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Vehicle Plate Number" />
              <AppFormField
                name="vehiclePlateNumber"
                placeholder="Enter code"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Your ID card (Front & Back)" />
              <View style={styles.photoContainer}>
                <IdComponent />
                <IdComponent />
              </View>
              <FieldTitle title="Your Vehicle ID card (Front & Back)" />
              <View style={styles.photoContainer}>
                <IdComponent />
                <IdComponent />
              </View>
            </View>
            <SubmitButton
              title="UPDATE"
              onSubmit={handleSubmit}
              style={styles.submitButton}
            />
          </View>
        </AppForm>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default EditProfileScreen;
