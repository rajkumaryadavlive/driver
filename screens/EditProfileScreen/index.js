import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  BackHandler,
  Alert,
} from "react-native";
import { EvilIcons as Icon1, AntDesign as Icon2 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

import styles from "./style";
import * as colors from "../../constants/colors";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/forms";
import AppButton from "../../components/AppButton";
import { wp } from "../../constants/dimensions";

const validationSchema = Yup.object().shape({
  userName: Yup.string().min(3).required().label("Name"),
});

const EditProfileScreen = (props) => {
  const { navigation } = props;

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicleTypeError, setVehicleTypeError] = useState();

  const [vehicleInfo, setVehicleInfo] = useState(false);
  const [image, setImage] = useState(null);

  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
    // uplineCode: "",
    vehicleYear: "",
    // vehicleSeats: "",
    vehicleColor: "",
    vehicleModel: "",
    vehiclePlateNumber: "",
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const FieldTitle = ({ title, required, starColor = "grey" }) => {
    return (
      <Text style={styles.fieldsTitle}>
        {title}
        {required && <Text style={{ color: starColor }}> *</Text>}
      </Text>
    );
  };

  const IdComponent = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
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
      return setVehicleTypeError("Select type of vehicle");
    } else {
      console.log(userInfo);
    }
  };

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    // <Screen>
    <KeyboardAwareScrollView>
      <AppForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {!vehicleInfo ? (
          <View style={styles.contentContainer}>
            <View style={styles.imageView}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../../assets/images/user.png")
                }
                style={styles.profileImage}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={pickImage}
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
              <FieldTitle title="Driving License No." />
              <AppFormField
                name="drivingLicense"
                placeholder="Enter driving license number"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                trim
                style={styles.textInput}
              />
              {/* <FieldTitle title="Upline Code" />
            <AppFormField
              name="uplineCode"
              placeholder="Enter code"
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.textInput}
            /> */}
            </View>
          </View>
        ) : (
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
              {selectedVehicle === null && (
                <ErrorMessage
                  error={vehicleTypeError}
                  visible={vehicleTypeError}
                />
              )}
              <FieldTitle title="Vehicle Name" />
              <AppFormField
                name="vehicleName"
                placeholder="Enter Vehicle Name"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Vehicle Year" />
              <AppFormField
                name="vehicleYear"
                placeholder="Enter Vehicle Year"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                trim
                style={styles.textInput}
              />
              {/* <FieldTitle title="Vehicle Seats" />
            <AppFormField
              name="vehicleSeats"
              placeholder="Enter phone number"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              trim
              style={styles.textInput}
            /> */}
              <FieldTitle title="Vehicle Color" />
              <AppFormField
                name="vehicleColor"
                placeholder="Enter Vehicle Color"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              {/* <View style={styles.pickerContainer}>
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
            </View> */}
              <FieldTitle title="Vehicle Model Name" />
              <AppFormField
                name="vehicleModel"
                placeholder="Enter Vehicle Model Name"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Vehicle Plate Number" />
              <AppFormField
                name="vehiclePlateNumber"
                placeholder="Enter Vehicle Plate Number"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Fuel Type" />
              <AppFormField
                name="fuelType"
                placeholder="Enter Fuel Type"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />

              <FieldTitle title="Vehicle Manufacturer" />
              <AppFormField
                name="vehicleManufacturer"
                placeholder="Enter Vehicle Manufacturer"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Manufacture Year" />
              <AppFormField
                name="mfgYear"
                placeholder="Enter Manufacturer Year"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Insurance Number" />
              <AppFormField
                name="insuranceNo"
                placeholder="Enter Insurance Number"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Insurance Start Date" />
              <AppFormField
                name="insuranceStartDate"
                placeholder="Enter Insurance Start Date"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <FieldTitle title="Insurance End Date" />
              <AppFormField
                name="insuranceEndDate"
                placeholder="Enter Insurance End Date"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
              />
              <View style={styles.photoContainer}>
                <View>
                  <FieldTitle title="PUC " />
                  <IdComponent />
                </View>
                <View>
                  <FieldTitle title="Insurance" />
                  <IdComponent />
                </View>
              </View>
              <FieldTitle title="Vehicle Image (Front & Back)" />
              <View style={styles.photoContainer}>
                <IdComponent />
                <IdComponent />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <AppButton
                title="Back"
                style={{ width: wp(30), backgroundColor: colors.themeGreen }}
                onPress={() => {
                  setVehicleInfo(false);
                  navigation.setOptions({ title: "Edit Profile" });
                }}
              />
              <SubmitButton
                title="UPDATE"
                onSubmit={handleSubmit}
                style={styles.submitButton}
              />
            </View>
          </View>
        )}

        {!vehicleInfo && (
          <AppButton
            title={"Next"}
            style={{ width: wp(70), color: colors.primaryColor }}
            onPress={() => {
              setVehicleInfo(true);
              navigation.setOptions({ title: "Add Vehicle Information" });
            }}
          />
        )}
      </AppForm>
    </KeyboardAwareScrollView>
    // </Screen>
  );
};

export default EditProfileScreen;
