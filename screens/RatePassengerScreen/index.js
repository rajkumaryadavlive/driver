import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';

import {hp, wp} from '../../constants/dimensions';
import * as colors from '../../constants/colors';
import styles from './style';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

const RatePassenger = props => {
  const [rating, setRating] = useState(4);
  const [text, setText] = useState('');

  const {navigation} = props;

  const getRating = rating => {
    console.log('this is from rating');
    console.log(rating);
    setRating(rating);
  };

  const ratePassenger = () => {
    console.log('Comment : ' + text);
    Alert.alert('Your', `Comment: ${text} \n Rating : ${rating}`);
    //navigate to other screen.
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.ratePassengerText}>Rate Passenger</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.question}>How much do you like this driver?</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={hp(5)}
          startingValue={4}
          minValue={1}
          onFinishRating={getRating}
          style={{paddingVertical: hp(2)}}
        />
        <View style={styles.commentAndInput}>
          <Text style={styles.commentText}>Comment</Text>
          <AppTextInput
            placeholder="Enter comment"
            multiline
            onChangeText={val => setText(val)}
            value={text}
            placeholderTextColor={colors.divider}
            containerStyle={styles.textInputContainer}
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <AppButton
              title="Skip"
              onPress={() => alert('skip button')}
              style={styles.button}
              textStyle={styles.buttonText}
            />
            <AppButton
              title="Rate"
              style={[styles.button, {backgroundColor: colors.primaryColor}]}
              textStyle={styles.buttonText}
              onPress={ratePassenger}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RatePassenger;
