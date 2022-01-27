import React from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';

import * as colors from '../../constants/colors';
import styles from './style';

import Icon from 'react-native-vector-icons/Entypo';
import AppButton from '../../components/AppButton';
import {hp, wp} from '../../constants/dimensions';

export const InitialStep = ({backButton}) => {
  return (
    <View style={styles.topContent}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: colors.primaryColor,
          height: hp(10),
          flex: 1,
        }}>
        <Icon
          name="chevron-thin-left"
          size={30}
          color={colors.whiteColor}
          style={{marginLeft: wp(5)}}
          onPress={backButton}
        />
        <Text
          style={{
            color: colors.whiteColor,
            marginLeft: wp(5),
            fontSize: hp(3.5),
          }}>
          Set Your Location
        </Text>
      </View>
    </View>
  );
};

export const InitialButton = ({updateDriverLocation}) => {
  return (
    <View style={styles.customBottomLayout}>
      <AppButton title="Confirm" onPress={updateDriverLocation} />
    </View>
  );
};
