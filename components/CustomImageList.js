import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {wp} from '../constants/dimensions';

const CustomImageList = ({data = [], removeImage, ...otherProps}) => {
  const flatlist = useRef();

  const renderImageList = ({item, index}) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    return (
      <TouchableOpacity onPress={() => removeImage(item.path)}>
        <View key={item.path} style={styles.imageContainer}>
          <Image source={{uri: item.path}} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.path}
      horizontal
      ref={flatlist}
      onContentSizeChange={() => flatlist.current.scrollToEnd()}
      renderItem={renderImageList}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: wp(1),
  },
  imageContainer: {
    width: wp(30),
    height: wp(30),
    margin: 2,
  },
});

export default CustomImageList;
