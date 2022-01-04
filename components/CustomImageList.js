import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { wp } from "../constants/dimensions";

const CustomImageList = ({ data = [], removeImage, ...otherProps }) => {
  const flatlist = useRef();

  const renderImageList = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => removeImage(item.id)}>
        <View key={item.albumId} style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        ref={flatlist}
        onContentSizeChange={() => flatlist.current.scrollToEnd()}
        renderItem={renderImageList}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(1),
  },
  imageContainer: {
    width: wp(30),
    height: wp(30),
    margin: 2,
  },
});

export default CustomImageList;
