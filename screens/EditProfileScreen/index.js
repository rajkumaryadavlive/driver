import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  BackHandler,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';
import * as colors from '../../constants/colors';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/forms';
import AppButton from '../../components/AppButton';
import {hp, wp} from '../../constants/dimensions';
import ImagePickerComp from '../../components/ImagePicker';

import useAuth from '../../hooks/useAuth';
import profileApi from '../../api/profile';
import listApi from '../../api/vehicle';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import CustomImageList from '../../components/CustomImageList';
import MediaSelectionScreen from '../../components/MediaSelectionScreen';
import getFcmToken from '../../hooks/getDeviceToken';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required().label('Name'),
  phone: Yup.string()
    .required()
    .label('Phone No.')
    .min(10, 'Phone number is not valid')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    ),
  email: Yup.string().email().required().label('Email-id'),
});

const EditProfileScreen = props => {
  const {navigation, route} = props;

  const [loaded, setLoaded] = useState(true);
  const [userData, setUserData] = useState({});
  const [listData, setListData] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState();
  const [vehicleTypeError, setVehicleTypeError] = useState(false);

  const [profileImg, setProfileImg] = useState();

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
  const [insuranceImages, setInsuranceImages] = useState([]);
  const [vehicleImages, setVehicleImages] = useState([]);

  const [vehicleId, setVehicleId] = useState();

  // const userToken = route.params.userToken;

  console.log('====================================');
  console.log(userData);
  console.log('====================================');

  const {token: userToken} = useAuth();

  const getDateFormat = date => {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    let newDate = yyyy + '-' + mm + '-' + dd;

    let today = new Date().getFullYear();
    let age = today - yyyy;

    return {newDate, age};
  };

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    licenseNumber: '',
    mfgYear: '',
    vehicleModel: '',
    vehicleManufacturer: '',
    vehicleName: '',
    vehiclePlateNumber: '',
    colour: '',
    insuranceNumber: '',
  };

  const newData = {
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    licenseNumber: userData.licenseNumber,
    mfgYear: userData.mfgYear,
    vehicleModel: userData.modelName,
    vehicleManufacturer: userData.vehicleManufacturer,
    vehicleName: userData.vehicleName,
    vehiclePlateNumber: userData.vehicleNumber,
    colour: userData.colour,
    insuranceNumber: userData.insuranceNumber,
    // uplineCode: "",
    // vehicleSeats: "",
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
    const currentDate = selectedDate || insStrDate;
    setInsStrShow(false);
    setInsStrDate(currentDate);
  };
  const onInsEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || insEndDate;
    setInsEndShow(false);
    setInsEndDate(currentDate);
  };

  const {newDate: dobNewDate, age: dobAge} = getDateFormat(dobDate);
  const {newDate: newInsStrDate} = getDateFormat(insStrDate);
  const {newDate: newInsEndDate} = getDateFormat(insEndDate);

  const removePucImage = path => {
    Alert.alert('Delete', 'Are you sure you want to delete this image', [
      {
        text: 'Yes',
        onPress: () => {
          const filteredArr = pucImages.filter(
            image => image.path.indexOf(path) === -1,
          );
          setPucImages([...filteredArr]);
        },
      },
      {text: 'No'},
    ]);
  };
  const removeInsImage = path => {
    Alert.alert('Delete', 'Are you sure you want to delete this image', [
      {
        text: 'Yes',
        onPress: () => {
          const filteredArr = insuranceImages.filter(
            image => image.path.indexOf(path) === -1,
          );
          setInsuranceImages([...filteredArr]);
        },
      },
      {text: 'No'},
    ]);
  };
  const removeVehicleImage = path => {
    Alert.alert('Delete', 'Are you sure you want to delete this image', [
      {
        text: 'Yes',
        onPress: () => {
          const filteredArr = vehicleImages.filter(
            image => image.path.indexOf(path) === -1,
          );
          setVehicleImages([...filteredArr]);
        },
      },
      {text: 'No'},
    ]);
  };

  const FieldTitle = ({title, required, starColor = 'grey'}) => {
    return (
      <Text style={styles.fieldsTitle}>
        {title}
        {required && <Text style={{color: starColor}}> *</Text>}
      </Text>
    );
  };

  const IdComponent = ({image, field}) => {
    return (
      <View style={styles.idComp}>
        {image !== '' ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <Icon2 name="idcard" size={55} color="grey" />
        )}
        <View style={styles.idIconContainer}>
          <Icon1 name="camera" size={30} color={colors.primaryColor} />
        </View>
      </View>
    );
  };

  const ImageArrayComp = ({fieldTitle, children}) => {
    return (
      <View style={styles.photoContainer}>
        <View>
          <FieldTitle title={fieldTitle} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              width: wp(85),
            }}
            contentContainerStyle={{
              paddingHorizontal: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {children}
          </ScrollView>
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
      setUserData({...result.data.data});
      const {
        gender,
        dob,
        frontimage: frontImg,
        backimage: backImg,
        pucImages: pucImgs,
        insuranceImages: insImgs,
        vehicleImages: vehImgs,
        fuelType: fuelT,
        insuranceStartDate: insStrD,
        insuranceEndDate: insEndD,
        vehicleTypeId,
        profile,
      } = result.data.data;

      profile === ''
        ? setProfileImg(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg',
          )
        : setProfileImg(profile);
      setGender(gender);
      dob === '' ? setDobDate(new Date()) : setDobDate(new Date(dob));

      setDocumentFrontImg(frontImg);

      setDocumentBackImg(backImg);

      setPucImages([...pucImgs]);
      setInsuranceImages([...insImgs]);
      setVehicleImages([...vehImgs]);
      setFuelType(fuelT);
      setVehicleId(vehicleTypeId);
      insStrD === ''
        ? setInsStrDate(new Date())
        : setInsStrDate(new Date(insStrD));
      insEndD === ''
        ? setInsStrDate(new Date())
        : setInsEndDate(new Date(insEndD));
    }
    setLoaded(false);
  };

  const getVehicleList = async () => {
    try {
      const result = await listApi.getVehicleTypeList(userToken);
      if (!result.ok) {
        console.log('This is vehicle data error', result.data.message);
      } else {
        const list = result.data.data.list;
        console.log('====================================');

        setListData([...list]);
      }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };

  const getVehicleType = () => {
    listData
      .filter(val => vehicleId === val._id)
      .map(vehicleType => {
        setSelectedVehicle(vehicleType.type);
      });
  };

  const handleSubmit = async userInfo => {
    if (gender === null) return setGenderError(true);
    if (selectedVehicle === null) return setVehicleTypeError(true);
    if (dobAge < 18) return setDobError(true);
    if (fuelType === null) return setFuelTypeError(true);

    const data = {
      ...userInfo,
      gender,
      dob: dobNewDate,
      newInsStrDate,
      newInsEndDate,
      pucImages,
      insuranceImages,
      vehicleImages,
      frontimage: documentFrontImg,
      backimage: documentBackImg,
      fuelType,
      vehicleTypeId: vehicleId,
      profileimage: profileImg,
    };
    console.log('====================================');
    console.log('this is handle submit', data);
    console.log('====================================');

    const deviceToken = await getFcmToken();

    const result = await profileApi.editProfileDriver(
      data,
      userToken,
      deviceToken,
    );
    // console.log("This is the result", result);
    if (!result.ok) {
      console.log('====================================');
      console.log('Could not update..', result.config.data._parts);
      alert('Error while updating...');
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log(result.data);
      alert('Updated Successfully...');
      console.log('====================================');
      navigation.navigate(userData.isVerified ? 'Drawer' : 'Verification');
    }
  };

  useEffect(() => {
    getProfileDetails();
    getVehicleList();
    const backAction = () => {
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    getVehicleType();
  }, [listData]);

  return (
    <>
      <AppForm
        initialValues={newData || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}>
        {!vehicleInfo ? (
          <View style={styles.contentContainer}>
            <CustomActivityIndicator visible={loaded} />
            <KeyboardAwareScrollView>
              <View style={styles.imageView}>
                <Image source={{uri: profileImg}} style={styles.profileImage} />
                <ImagePickerComp
                  getImageUrl={url => {
                    setProfileImg(url);
                  }}
                  componentStyle={styles.iconContainer}>
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
                  name="phone"
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
                    }}>
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
                      <Text style={{paddingLeft: 10, color: 'black'}}>
                        {userData.dob}
                      </Text>
                    ) : (
                      <Text style={{paddingLeft: 10, color: 'black'}}>
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
                  title={'Next'}
                  style={{width: wp(70), color: colors.primaryColor}}
                  onPress={() => {
                    setVehicleInfo(true);
                    navigation.setOptions({title: 'Vehicle Information'});
                  }}
                />
              )}
            </KeyboardAwareScrollView>
          </View>
        ) : (
          <View style={[styles.contentContainer, {marginTop: 10}]}>
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
                          listData
                            .filter(val => itemValue === val.type)
                            .map(data => setVehicleId(data._id));
                        }}>
                        <Picker.Item label="Select Type..." value={null} />
                        {listData.map(item => (
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
                    {/* <FieldTitle title="Vehicle Year" />
                    <AppFormField
                      name="vehicleYear"
                      placeholder="Enter Vehicle Year"
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="numeric"
                      trim
                      style={styles.textInput}
                    /> */}
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
                        }}>
                        <Picker.Item label="Select type" value={null} />
                        <Picker.Item label="Petrol" value="petrol" />
                        <Picker.Item label="Diesel" value="diesel" />
                        <Picker.Item label="CNG" value="cng" />
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
                      name="insuranceNumber"
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
                            testID="dateTimePicker2"
                            value={insStrDate}
                            mode="date"
                            onChange={onInsStrChange}
                            // maximumDate={new Date()}
                            minimumDate={new Date(2054)}
                          />
                        ) : (
                          <Text style={{paddingLeft: 10, color: 'black'}}>
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
                            testID="dateTimePicker3"
                            value={insEndDate}
                            mode="date"
                            onChange={onInsEndChange}
                            // maximumDate={new Date()}
                            minimumDate={new Date()}
                          />
                        ) : (
                          <Text style={{paddingLeft: 10, color: 'black'}}>
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
                    <ImageArrayComp fieldTitle="PUC">
                      <CustomImageList
                        data={pucImages}
                        removeImage={removePucImage}
                      />
                      <MediaSelectionScreen
                        getImageList={imgArr =>
                          setPucImages([...pucImages, ...imgArr])
                        }
                      />
                    </ImageArrayComp>
                    <ImageArrayComp fieldTitle="Insurance">
                      <CustomImageList
                        data={insuranceImages}
                        removeImage={removeInsImage}
                      />
                      <MediaSelectionScreen
                        getImageList={imgArr =>
                          setInsuranceImages([...insuranceImages, ...imgArr])
                        }
                      />
                    </ImageArrayComp>

                    <FieldTitle title="Document Images (Front & Back)" />
                    <View style={styles.photoContainer}>
                      <ImagePickerComp
                        getImageUrl={url => {
                          setDocumentFrontImg(url);
                        }}>
                        <IdComponent image={documentFrontImg} />
                      </ImagePickerComp>
                      <ImagePickerComp
                        getImageUrl={url => setDocumentBackImg(url)}>
                        <IdComponent image={documentBackImg} />
                      </ImagePickerComp>
                    </View>
                    <ImageArrayComp fieldTitle="Vehicle Images">
                      <CustomImageList
                        data={vehicleImages}
                        removeImage={removeVehicleImage}
                      />
                      <MediaSelectionScreen
                        getImageList={imgArr =>
                          setVehicleImages([...vehicleImages, ...imgArr])
                        }
                      />
                    </ImageArrayComp>
                  </View>
                </>
              }
              ListFooterComponent={
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <AppButton
                      title="Back"
                      style={{
                        width: wp(40),
                        backgroundColor: colors.themeGreen,
                      }}
                      onPress={() => {
                        setVehicleInfo(false);
                        navigation.setOptions({title: 'Edit Profile'});
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
