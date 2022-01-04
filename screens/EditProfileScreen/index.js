import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  BackHandler,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { EvilIcons as Icon1, AntDesign as Icon2 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

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
import CustomActivityIndicator from "../../components/CustomActivityIndicator";
import CustomImageList from "../../components/CustomImageList";

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

  const [loaded, setLoaded] = useState(true);
  const [userData, setUserData] = useState({});
  const [listData, setListData] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState();
  const [vehicleTypeError, setVehicleTypeError] = useState(false);

  const [profileImg, setProfileImg] = useState(null);
  const [pucImg, setPucImg] = useState(null);
  const [insuranceImg, setInsuranceImg] = useState(null);

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const [documentFrontImg, setDocumentFrontImg] = useState(null);
  const [documentBackImg, setDocumentBackImg] = useState(null);

  const [gender, setGender] = useState();
  const [genderError, setGenderError] = useState(false);

  const [fuelType, setFuelType] = useState();
  const [fuelTypeError, setFuelTypeError] = useState(false);

  const [vehicleInfo, setVehicleInfo] = useState(false);

  const [dobShow, setDobShow] = useState(false);
  const [dobDate, setDobDate] = useState(new Date());
  const [dobError, setDobError] = useState(false);
  const [dobTouched, setDobTouched] = useState(false);

  const [insStrShow, setInsStrShow] = useState(false);
  const [insStrDate, setInsStrDate] = useState(new Date());
  const [insStrError, setInsStrError] = useState(false);
  const [insStrTouched, setInsStrTouched] = useState(false);

  const [insEndShow, setInsEndShow] = useState(false);
  const [insEndDate, setInsEndDate] = useState(new Date());
  const [insEndError, setInsEndError] = useState(false);
  const [insEndTouched, setInsEndTouched] = useState(false);

  const [pucImages, setPucImages] = useState([]);
  const [insuraceImages, setInsuraceImages] = useState([]);
  const [vehicleImages, setVehicleImages] = useState([]);

  const userToken = route.params.userToken;

  const selectedImages = route.params.data;
  const imageType = route.params.imgType;
  if (selectedImages && imageType) {
    switch (route.params.type) {
      case "puc":
        setPucImages([...selectedImages]);
      case "insurance":
        setInsuraceImages([...selectedImages]);
      case "vehicle":
        setVehicleImages([...selectedImages]);
    }
  }

  console.log("====================================");
  console.log("This is selected images", selectedImages);
  console.log("====================================");

  // const selectedImages = route.params.data;

  console.log("====================================");
  console.log("This is the user data ", userData);
  console.log("====================================");

  const getDateFormat = (date) => {
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();

    let newDate = yyyy + "-" + mm + "-" + dd;
    // console.log(newDate);

    let today = new Date().getFullYear();
    let age = today - yyyy;
    // console.log(age);

    return { newDate, age };
  };

  const initialValues = {
    name: "",
    phoneNumber: "",
    email: "",
    dob: "",
    fuelType: "",
    gender: "",
    licenseNumber: "",
    mfgYear: "",
    vehicleModel: "",
    password: "",
    profile: "",
    serviceId: "",
    vehicleManufacturer: "",
    vehicleName: "",
    vehicleYear: "",
    vehicleColor: "",
    vehiclePlateNumber: "",
    backImage: "",
    colour: "",
    frontImage: "",
    fuelType: "",
    insuranceEndDate: "",
    insuranceStartDate: "",
    insuranceImages: [],
    insuranceNumber: "",
    pucImages: [],
    vehicleImages: [],
  };

  const newData = {
    backImage: userData.backImage,
    colour: userData.colour,
    dob: userData.dob,
    email: userData.email,
    frontImage: userData.frontImage,
    fuelType: userData.fuelType,
    insuranceEndDate: userData.insuranceEndDate,
    insuranceNumber: userData.insuranceNumber,
    insuranceStartDate: userData.insuranceStartDate,
    licenseNumber: userData.licenseNumber,
    mfgYear: userData.mfgYear,
    name: userData.name,
    password: userData.password,
    phoneNumber: userData.phone,
    vehicleModel: userData.modelName,
    serviceId: userData.serviceId,
    vehicleManufacturer: userData.vehicleManufacturer,
    vehicleName: userData.vehicleName,
    // uplineCode: "",
    vehicleYear: "",
    // vehicleSeats: "",
    vehiclePlateNumber: userData.vehicleNumber,
  };

  const dobMode = () => {
    setDobShow(true);
    setDobTouched(true);
  };

  const insStrMode = () => {
    setInsStrShow(true);
    setInsStrTouched(true);
  };

  const insEndMode = () => {
    setInsEndShow(true);
    setInsEndTouched(true);
  };
  const onDobChange = (event, selectedDate) => {
    const currentDate = selectedDate || dobDate;
    setDobShow(false);
    setDobDate(currentDate);
  };
  const onInsStrChange = (event, selectedDate) => {
    const currentDate = selectedDate || dobDate;
    setInsStrShow(false);
    setInsStrDate(currentDate);
  };
  const onInsEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || dobDate;
    setInsEndShow(false);
    setInsEndDate(currentDate);
  };

  const { newDate: dobNewDate, age: dobAge } = getDateFormat(dobDate);
  const { newDate: newInsStrDate } = getDateFormat(insStrDate);
  const { newDate: newInsEndDate } = getDateFormat(insEndDate);

  const FieldTitle = ({ title, required, starColor = "grey" }) => {
    return (
      <Text style={styles.fieldsTitle}>
        {title}
        {required && <Text style={{ color: starColor }}> *</Text>}
      </Text>
    );
  };

  const IdComponent = ({ image, field }) => {
    return (
      <View style={styles.idComp}>
        {image !== null ? (
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
      const {
        gender,
        dob,
        frontimage: frontImg,
        backimage: backImg,
      } = result.data.data;
      setGender(gender);
      setDobDate(new Date(dob));
      setDocumentFrontImg(frontImg);
      setDocumentBackImg(backImg);
      setLoaded(false);
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
    if (gender === null) return setGenderError(true);
    if (selectedVehicle === null) return setVehicleTypeError(true);
    if (dobAge < 18) return setDobError(true);
    if (fuelType === null) return setFuelTypeError(true);
    // console.log(userInfo);
    console.log("====================================");
    console.log("this is handle submit", userInfo);
    console.log("====================================");
    navigation.navigate("Drawer");
  };

  useEffect(() => {
    getProfileDetails();
    getVehicleList();
    const backAction = () => {
      return false;
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
    <>
      <AppForm
        initialValues={newData || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {!vehicleInfo ? (
          <View style={styles.contentContainer}>
            <CustomActivityIndicator visible={loaded} />
            <KeyboardAwareScrollView>
              <View style={styles.imageView}>
                <Image
                  source={
                    profileImg !== null
                      ? { uri: profileImg }
                      : userData.profile
                      ? { uri: userData.profile }
                      : null
                  }
                  style={styles.profileImage}
                />
                <ImagePickerComp
                  getImageUrl={(url) => setProfileImg(url)}
                  componentStyle={styles.iconContainer}
                >
                  <Icon1 name="camera" size={30} color={colors.primaryColor} />
                </ImagePickerComp>
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
                  editable={false}
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
                  editable={false}
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
                <FieldTitle title="Date of Birth" />
                <TouchableOpacity onPress={dobMode}>
                  <View style={styles.pickerContainer}>
                    {dobShow ? (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={dobDate}
                        mode="date"
                        onChange={onDobChange}
                        maximumDate={new Date()}
                        minimumDate={new Date(2054)}
                      />
                    ) : !dobTouched ? (
                      <Text style={{ paddingLeft: 10, color: "black" }}>
                        {userData.dob}
                      </Text>
                    ) : (
                      <Text style={{ paddingLeft: 10, color: "black" }}>
                        {dobNewDate}
                      </Text>
                    )}
                  </View>
                  {dobAge < 18 && (
                    <ErrorMessage
                      error="Date Invalid - Age should be more than 18."
                      visible={dobError}
                    />
                  )}
                </TouchableOpacity>
                {/* <FieldTitle title="Upline Code" />
            <AppFormField
              name="uplineCode"
              placeholder="Enter code"
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.textInput}
            /> */}
              </View>
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
            </KeyboardAwareScrollView>
          </View>
        ) : (
          <View style={[styles.contentContainer, { marginTop: 10 }]}>
            <FlatList
              data={null}
              ListHeaderComponent={
                <>
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
                    {selectedVehicle === null && (
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
                      name="colour"
                      placeholder="Enter Vehicle Color"
                      autoCorrect={false}
                      autoCapitalize="none"
                      style={styles.textInput}
                    />

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
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={fuelType}
                        onValueChange={(itemValue, itemIndex) => {
                          setFuelType(itemValue);
                        }}
                      >
                        <Picker.Item label="Select type" value={null} />
                        <Picker.Item label="Petrol" value="Petrol" />
                        <Picker.Item label="Diesel" value="Diesel" />
                        <Picker.Item label="CNG" value="CNG" />
                      </Picker>
                    </View>
                    {fuelType === null && (
                      <ErrorMessage
                        error="Please select fuel type"
                        visible={fuelTypeError}
                      />
                    )}
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
                    <TouchableOpacity onPress={insStrMode}>
                      <View style={styles.pickerContainer}>
                        {insStrShow ? (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={insStrDate}
                            mode="date"
                            onChange={onInsStrChange}
                            maximumDate={new Date()}
                            minimumDate={new Date(2054)}
                          />
                        ) : (
                          <Text style={{ paddingLeft: 10, color: "black" }}>
                            {!insStrTouched
                              ? userData.insuranceStartDate
                              : newInsStrDate}
                          </Text>
                        )}
                      </View>
                      {/* {dobAge < 18 && (
                    <ErrorMessage
                      error="Date Invalid - Age should be more than 18."
                      visible={dobError}
                    />
                  )} */}
                    </TouchableOpacity>
                    <FieldTitle title="Insurance End Date" />
                    <TouchableOpacity onPress={insEndMode}>
                      <View style={styles.pickerContainer}>
                        {insEndShow ? (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={insEndDate}
                            mode="date"
                            onChange={onInsEndChange}
                            maximumDate={new Date()}
                            minimumDate={new Date(2054)}
                          />
                        ) : (
                          <Text style={{ paddingLeft: 10, color: "black" }}>
                            {!insEndTouched
                              ? userData.insuranceEndDate
                              : newInsEndDate}
                          </Text>
                        )}
                      </View>
                      {/* {dobAge < 18 && (
                    <ErrorMessage
                      error="Date Invalid - Age should be more than 18."
                      visible={dobError}
                    />
                  )} */}
                    </TouchableOpacity>
                    <View style={styles.photoContainer}>
                      <View>
                        <FieldTitle title="PUC " />
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("MediaScreen", {
                              type: "puc",
                            })
                          }
                        >
                          <Text>OK</Text>
                        </TouchableOpacity>
                        {/* <ImagePickerComp getImageUrl={(url) => setPucImg(url)}>
                      <IdComponent image={pucImg} />
                    </ImagePickerComp> */}
                      </View>
                      <View>
                        <FieldTitle title="Insurance" />
                        <ImagePickerComp
                          getImageUrl={(url) => setInsuranceImg(url)}
                        >
                          <IdComponent image={insuranceImg} />
                        </ImagePickerComp>
                      </View>
                    </View>
                    <FieldTitle title="Document Images (Front & Back)" />
                    <View style={styles.photoContainer}>
                      <ImagePickerComp
                        getImageUrl={(url) => setDocumentFrontImg(url)}
                      >
                        <IdComponent image={documentFrontImg} />
                      </ImagePickerComp>
                      <ImagePickerComp
                        getImageUrl={(url) => setDocumentBackImg(url)}
                      >
                        <IdComponent image={documentBackImg} />
                      </ImagePickerComp>
                    </View>
                    <FieldTitle title="Vehicle Image (Front & Back)" />
                    <View style={styles.photoContainer}>
                      <ImagePickerComp
                        getImageUrl={(url) => setFrontImage(url)}
                      >
                        <IdComponent image={frontImage} />
                      </ImagePickerComp>
                      <ImagePickerComp getImageUrl={(url) => setBackImage(url)}>
                        <IdComponent image={backImage} />
                      </ImagePickerComp>
                    </View>
                  </View>
                </>
              }
              ListFooterComponent={
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <AppButton
                      title="Back"
                      style={{
                        width: wp(40),
                        backgroundColor: colors.themeGreen,
                      }}
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
                </>
              }
            />
          </View>
        )}
      </AppForm>
    </>
  );
};

export default EditProfileScreen;
