import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default function ImagePickerComp({
  children,
  componentStyle,
  getImageUrl,
}) {
  const pickImage = async () => {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => getImageUrl(image.path))
      .catch(error => log('error while picking', error));
  };

  return (
    <>
      <TouchableOpacity onPress={pickImage} style={componentStyle}>
        {children}
      </TouchableOpacity>
      {/* {image && <Image source={{ uri: image }} style={imageStyle} />} */}
    </>
  );
}
