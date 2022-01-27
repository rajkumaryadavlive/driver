import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BadgeAndImage from '../../components/BadgeAndImage';
import * as colors from '../../constants/colors';
import {hp, wp} from '../../constants/dimensions';
import styles from './style';
import AppButton from '../../components/AppButton';
import BottomButtons from '../../components/BottomButtons';

export const NewJobTopContainer = ({onPressReject, sideMenuOpen}) => {
  const Dot = () => {
    return <View style={styles.dot} />;
  };

  return (
    <View style={styles.topContent}>
      <TouchableOpacity onPress={sideMenuOpen}>
        <BadgeAndImage />
      </TouchableOpacity>
      <View style={styles.newJob}>
        <View style={{marginRight: hp(7)}}>
          <Text style={styles.newJobText}>New Job</Text>
          <View style={styles.threeDots}>
            <Dot />
            <Dot />
            <Dot />
          </View>
        </View>

        <TouchableOpacity onPress={onPressReject}>
          <View style={[styles.buttonContainer, styles.rejectButtonContainer]}>
            <Text
              style={[
                styles.buttonText,
                {color: colors.whiteColor, fontSize: 15},
              ]}>
              Reject
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const NewJobBottomContainer = ({
  onPressZoomIn,
  onPressZoomOut,
  onPressAccept,
  duration,
  distance,
}) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timer;
    if (seconds > 0) timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  let calculatedDistance = (Math.round(distance * 100) / 100).toFixed(2);

  let newDur = (Math.round(duration * 100) / 100).toFixed(2);

  let newDuration = newDur.toString();
  let arr = newDuration.split('.');
  let min = parseInt(arr[0]);
  let sec = parseInt(arr[1]);

  let minutes = min > 60 ? min - 60 : min;
  let second = sec > 60 ? sec - 60 && minutes + 1 : sec;
  return (
    <>
      <View style={[styles.customBottomLayout, {bottom: hp(25)}]}>
        <View>
          <BottomButtons onPress={onPressZoomIn} iconName="plus" fontAwesome />
          <BottomButtons
            onPress={onPressZoomOut}
            iconName="minus"
            fontAwesome
          />
        </View>
        <View>
          <BottomButtons iconName="traffic-light" fontAwesome />
        </View>
      </View>
      {seconds > 0 && (
        <View style={styles.customBottomLayout2}>
          <View style={[styles.topContainer, {height: hp(25)}]}>
            <View style={styles.bottomContent}>
              <View style={styles.timerContainer}>
                <Text style={styles.timerText}>
                  {seconds > 0 ? seconds : 0}
                </Text>
              </View>
              <View style={styles.durationAndDistance}>
                <Text style={styles.durationAndDistanceText}>DURATION</Text>
                <Text style={styles.timeToReachAndDistance}>
                  {minutes}m {second}s
                </Text>
              </View>
              <View style={styles.durationAndDistance}>
                <Text style={styles.durationAndDistanceText}>DISTANCE</Text>
                <Text style={styles.timeToReachAndDistance}>
                  {calculatedDistance} km
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.addressContainer}>
              <EvilIcons name="location" size={hp(4)} color="black" />
              <Text numberOfLines={1} style={{width: '93%'}}>
                Address this is the address from another component that will be
                available from another component
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: wp(100),
            }}>
            <AppButton
              title="ACCEPT"
              onPress={onPressAccept}
              style={{width: wp(90), alignSelf: 'center'}}
              textStyle={{fontWeight: '700'}}
            />
          </View>
        </View>
      )}
    </>
  );
};
