import React, {useMemo, useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
// import {AssetsSelector} from 'expo-images-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

import * as colors from '../constants/colors';
import {wp} from '../constants/dimensions';

const MediaSelectionScreen = props => {
  const {getImageList} = props;

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then(selectedImages => getImageList(selectedImages))
      .catch(err => console.log(err));
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePicker}>
        <View
          style={{
            width: wp(30),
            height: wp(30),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: wp(1),
            borderColor: colors.primaryColor,
            borderStyle: 'dashed',
          }}>
          <AntDesign name="plus" size={wp(10)} color={colors.primaryColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MediaSelectionScreen;
// const [modalVisible, setModalVisible] = useState(false);

// const _textStyle = {
//   color: 'white',
// };

// const _buttonStyle = {
//   backgroundColor: colors.primaryColor,
//   borderRadius: 5,
// };

// const widgetErrors = useMemo(
//   () => ({
//     errorTextColor: 'black',
//     errorMessages: {
//       hasErrorWithPermissions: 'Please Allow media gallery permissions.',
//       hasErrorWithLoading: 'There was an error while loading images.',
//       hasErrorWithResizing: 'There was an error while loading images.',
//       hasNoAssets: 'No images found.',
//     },
//   }),
//   [],
// );

// const widgetSettings = useMemo(
//   () => ({
//     getImageMetaData: false, // true might perform slower results but gives meta data and absolute path for ios users
//     initialLoad: 100,
//     assetsType: ['photo'],
//     minSelection: 1,
//     maxSelection: 5,
//     portraitCols: 3,
//     landscapeCols: 3,
//   }),
//   [],
// );

// const widgetResize = useMemo(
//   () => ({
//     width: 50,
//     compress: 0.7,
//     base64: false,
//     saveTo: 'jpeg',
//   }),
//   [],
// );

// const widgetNavigator = useMemo(
//   () => ({
//     Texts: {
//       finish: 'Finish',
//       back: 'Back',
//       selected: 'selected',
//     },
//     midTextColor: 'black',
//     minSelection: 1,
//     buttonTextStyle: _textStyle,
//     buttonStyle: _buttonStyle,
//     onBack: () => {
//       setModalVisible(false);
//     },
//     onSuccess: selectedImages => {
//       getImageList(selectedImages);
//       setModalVisible(false);
//     },
//   }),
//   [],
// );

// const widgetStyles = useMemo(
//   () => ({
//     margin: 2,
//     bgColor: 'white',
//     spinnerColor: 'blue',
//     widgetWidth: 99,
//     videoIcon: {
//       Component: Ionicons,
//       iconName: 'ios-videocam',
//       color: 'tomato',
//       size: 20,
//     },
//     selectedIcon: {
//       Component: Ionicons,
//       iconName: 'ios-checkmark-circle-outline',
//       color: 'white',
//       bg: '#0eb14970',
//       size: 26,
//     },
//   }),
//   [],
// );
/* <Modal
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        visible={modalVisible}>
        <AssetsSelector
          Settings={widgetSettings}
          Errors={widgetErrors}
          Styles={widgetStyles}
          Navigator={widgetNavigator}
        />
      </Modal> */
