import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from '../constants/colors';
import {hp, wp} from '../constants/dimensions';

const AppTextInput = ({
  leftIcon,
  rightIcon,
  width = '100%',
  containerStyle,
  leftIconStyle,
  rightIconStyle,
  leftIconSize = 25,
  rightIconSize = 25,
  onLeftIconPress,
  onRightIconPress,
  leftIconColor = colors.FONT_GREY,
  rightIconColor = colors.FONT_GREY,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, {width}, containerStyle]}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={leftIconSize}
          color={leftIconColor}
          onPres={onLeftIconPress}
          style={[styles.leftIcon, leftIconStyle]}
        />
      )}
      <TextInput
        style={styles.text}
        placeholderTextColor={colors.FONT_GREY}
        {...otherProps}
      />
      {rightIcon && (
        <MaterialCommunityIcons
          name={rightIcon}
          size={rightIconSize}
          color={rightIconColor}
          onPress={onRightIconPress}
          style={[styles.rightIcon, rightIconStyle]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    borderRadius: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginLeft: wp(5),
  },
  rightIcon: {
    marginRight: wp(5),
  },
  text: {
    color: colors.blackColor,
  },
});

export default AppTextInput;
