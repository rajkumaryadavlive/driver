import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Screen from '../../components/Screen';
import {hp, wp} from '../../constants/dimensions';
import {primaryColor} from '../../constants/colors';
import styles from './style';

const SummaryScreen = props => {
  const [seconds, setSeconds] = useState(15);
  const {
    navigation,
    dateAndTime = 'Thu 16 Jan 2020 13.21pm',
    amount = '3,200.00',
    duration = '2m 10s',
    distance = '2',
    passengerName = 'Touch Piseth',
    phoneNumber = '+855-69-661 947',
    driverName = 'Khiev Sopheak',
    vehicle = 'Rickshaw',
    plate = 'PP-1AP-2344',
    driverPhone = '+855 12 462 997',
    pickUp = '7:54 am',
    dropOff = '8.40 am',
    from = '#420, St 271, Sangkat Tumnubteuk, Khan alkdjflajsdfljasldfjasdjfljasdlfjsa',
    to = '#420, St 271, Sangkat Tumnubteuk, Khan alkdjflajsdfljasldfjasdjfljasdlfjsa',
    status = 'Successfully trip',
    cmpNumber1 = '096 8 168 111',
    cmpNumber2 = '076 8 168 111',
    cmpNumber3 = '097 8 168 111',
    address = '#420, St 271, Sangkat Tumnubteuk, Khan alkdjflajsdfljasldfjasdjfljasdlfjsa',
  } = props;

  useEffect(() => {
    let timer;
    if (seconds > 0) timer = setTimeout(() => setSeconds(seconds - 1), 1000);

    return () => {
      clearTimeout(timer);
      seconds === 1 && navigation.navigate('RatePassenger');
    };
  }, [seconds]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.totalAndDate}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.date}>Date: {dateAndTime}</Text>
      </View>
      <Text style={styles.amount}>{`KHR  ${amount}`}</Text>
      <View style={styles.durationAndDistance}>
        <View>
          <Text style={styles.text}>DURATION</Text>
          <Text style={styles.value}>{duration}</Text>
        </View>
        <View>
          <Text style={styles.text}>DISTANCE</Text>
          <Text style={styles.value}>{distance}km</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text
          style={
            styles.details
          }>{`Passenger : ${passengerName}, Phone: ${phoneNumber}`}</Text>
        <Text style={styles.details}>{`Driver          : ${driverName}`}</Text>
        <Text style={styles.details}>{`Vehicle       : ${vehicle}`}</Text>
        <Text style={styles.details}>{`Plate           : ${plate}`}</Text>
        <Text style={styles.details}>{`Phone         : ${driverPhone}`}</Text>
        <Text style={styles.details}>{`PickUp        : ${pickUp}`}</Text>
        <Text style={styles.details}>{`DropOff       : ${dropOff}`}</Text>
        <Text
          style={[styles.details, {width: wp(80)}]}
          numberOfLines={1}>{`From           : ${from}`}</Text>
        <Text
          style={[styles.details, {width: wp(80)}]}
          numberOfLines={1}>{`To                : ${to}`}</Text>
        <Text style={styles.details}>{`Status         : ${status}`}</Text>
        <Text style={[styles.details, {marginTop: hp(4)}]}>
          Provide by: GOGO & CO Booking Services Co. LTD.
        </Text>
        <Text
          style={
            styles.details
          }>{`Phone       : ${cmpNumber1} | ${cmpNumber2} | ${cmpNumber3} `}</Text>
        <Text
          style={[styles.details, {width: wp(80)}]}
          numberOfLines={1}>{`Address    : ${address}`}</Text>
      </View>
      <Icon name="check-circle-outline" size={hp(15)} color={primaryColor} />
      <Text style={styles.note}>Payment has been made successfully.</Text>
      <Text style={styles.note}>
        Payment will be automatically closed within{' '}
        <Text style={styles.seconds}>{seconds} sec</Text>
      </Text>
    </ScrollView>
  );
};

export default SummaryScreen;
