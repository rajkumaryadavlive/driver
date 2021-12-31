import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, BackHandler } from "react-native";
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
import { hp, wp } from "../../constants/dimensions";
import ImagePickerComp from "../../components/ImagePicker";

import profileApi from "../../api/profile";
import listApi from "../../api/vehicle";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required().label("Name"),
  phoneNumber: Yup.string()
    .required()
    .label("Phone No.")
    .min(10, "Phone number is not valid")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  email: Yup.string().email().required().label("Email-id"),
});

const EditProfileScreen = (props) => {
  const { navigation, route } = props;

  const [userData, setUserData] = useState({});
  const [listData, setListData] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState();
  const [vehicleTypeError, setVehicleTypeError] = useState(false);

  const [profileImg, setProfileImg] = useState(null);
  const [pucImg, setPucImg] = useState(null);
  const [insuranceImg, setInsuranceImg] = useState(null);

  const [vehicleFrontImg, setVehicleFrontImg] = useState(null);
  const [vehicleBackImg, setVehicleBackImg] = useState(null);

  const [gender, setGender] = useState();
  const [genderError, setGenderError] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState(false);

  const userToken = route.params.userToken;

  console.log("====================================");
  console.log("This is the user data ", userData);
  console.log("====================================");

  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    dob: "",
    fuelType: "",
    gender: "",
    insuranceNumber: "",
    insuranceEndDate: "",
    insuranceStartDate: "",
    licenseNumber: "",
    mfgYear: "",
    vehicleModel: "",
    password: "",
    profile: "",
    serviceId: "",
    vehicleManufacturer: "",
    vehicleName: "",
    // uplineCode: "",
    vehicleYear: "",
    // vehicleSeats: "",
    vehicleColor: "",
    vehiclePlateNumber: "",
  };

  const newData = {
    name: userData.name,
    phoneNumber: userData.phone,
    email: userData.email,
    dob: "",
    fuelType: userData.fuelType,
    insuranceNumber: userData.insuranceNumber,
    insuranceEndDate: userData.insuranceEndDate,
    insuranceStartDate: userData.insuranceStartDate,
    licenseNumber: userData.licenseNumber,
    mfgYear: userData.mfgYear,
    vehicleModel: userData.modelName,
    password: userData.password,
    serviceId: userData.serviceId,
    vehicleManufacturer: userData.vehicleManufacturer,
    vehicleName: userData.vehicleName,
    // uplineCode: "",
    vehicleYear: "",
    // vehicleSeats: "",
    vehicleColor: "",
    vehiclePlateNumber: userData.vehicleNumber,
  };

  const FieldTitle = ({ title, required, starColor = "grey" }) => {
    return (
      <Text style={styles.fieldsTitle}>
        {title}
        {required && <Text style={{ color: starColor }}> *</Text>}
      </Text>
    );
  };

  const IdComponent = ({ image }) => {
    return (
      <View style={styles.idComp}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Icon2 name="idcard" size={55} color="grey" />
        )}
        <View style={styles.idIconContainer}>
          <Icon1 name="camera" size={30} color={colors.primaryColor} />
        </View>
      </View>
    );
  };

  const getProfileDetails = async () => {
    const result = await profileApi.getDriverDetail(userToken);
    if (!result.ok) {
      console.log(result.problem);
      return;
    } else {
      setUserData({ ...result.data.data });
      const gender = result.data.data.gender;
      setGender(gender);
    }
  };

  const getVehicleList = async () => {
    const result = await listApi.getVehicleTypeList(userToken);
    if (!result.ok) {
      console.log(result.data.error);
    } else {
      // console.log(result.data);
      setListData([...result.data.data.list]);
    }
  };

  const handleSubmit = (userInfo) => {
    if (gender === null) {
      return setGenderError(true);
    }
    if (selectedVehicle === null) {
      return setVehicleTypeError(true);
    }
    // console.log(userInfo);
    console.log("====================================");
    console.log("this is handle submit", userInfo);
    console.log("====================================");
  };

  useEffect(() => {
    getProfileDetails();
    getVehicleList();
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    // <Screen>
    <KeyboardAwareScrollView>
      <AppForm
        initialValues={newData || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {!vehicleInfo ? (
          <View style={styles.contentContainer}>
            <View style={styles.imageView}>
              <Image
                // source={
                //   profileImg !== null
                //     ? { uri: profileImg }
                //     : userData.profile
                //     ? { uri: userData.profile }
                //     : require("../../assets/images/user.png")
                // }
                source={{ uri: profileImg }}
                style={styles.profileImage}
              />
              {/* <TouchableOpacity
                style={styles.iconContainer}
                onPress={pickImage}
              > */}
              <ImagePickerComp
                getImageUrl={(url) => setProfileImg(url)}
                componentStyle={styles.iconContainer}
              >
                <Icon1 name="camera" size={30} color={colors.primaryColor} />
              </ImagePickerComp>
              {/* </TouchableOpacity> */}
            </View>
            <View style={styles.titleAndFieldsContainer}>
              <FieldTitle title="Name" required />
              <AppFormField
                name="name"
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
                name="licenseNumber"
                placeholder="Enter driving license number"
                autoCorrect={false}
                autoCapitalize="none"
                trim
                style={styles.textInput}
              />
              <FieldTitle title="Gender" />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue, itemIndex) => {
                    setGender(itemValue);
                  }}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
              {gender === null && (
                <ErrorMessage
                  error="Please select gender"
                  visible={genderError}
                />
              )}
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
                  }}
                >
                  <Picker.Item label="Select Type..." value={null} />
                  {listData.map((item) => (
                    <Picker.Item
                      key={item._id}
                      label={item.type}
                      value={item.type}
                    />
                  ))}
                </Picker>
              </View>
              {setVehicleTypeError && (
                <ErrorMessage
                  error="Select vehicle"
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
                  <ImagePickerComp getImageUrl={(url) => setPucImg(url)}>
                    <IdComponent image={pucImg} />
                  </ImagePickerComp>
                </View>
                <View>
                  <FieldTitle title="Insurance" />
                  <ImagePickerComp getImageUrl={(url) => setInsuranceImg(url)}>
                    <IdComponent image={insuranceImg} />
                  </ImagePickerComp>
                </View>
              </View>
              <FieldTitle title="Vehicle Image (Front & Back)" />
              <View style={styles.photoContainer}>
                <ImagePickerComp getImageUrl={(url) => setVehicleFrontImg(url)}>
                  <IdComponent image={vehicleFrontImg} />
                </ImagePickerComp>
                <ImagePickerComp getImageUrl={(url) => setVehicleBackImg(url)}>
                  <IdComponent image={vehicleBackImg} />
                </ImagePickerComp>
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
              navigation.setOptions({ title: "Vehicle Information" });
            }}
          />
        )}
      </AppForm>
    </KeyboardAwareScrollView>
    // </Screen>
  );
};

export default EditProfileScreen;
