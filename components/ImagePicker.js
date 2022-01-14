import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComp({
  children,
  componentStyle,
  getImageUrl,
}) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log("This is result from image picker", result);
    getImageUrl(result.uri);
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
