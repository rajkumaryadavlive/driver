import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
import {hp} from '../../constants/dimensions';

const DiallingScreen = props => {
  const {tagLine = 'Passenger GoGo Taxi', name = 'Huon Thornith'} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dialling</Text>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              //   uri: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
              uri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.passengerText}>{tagLine}.</Text>
        <Text style={styles.passengerName}>{name}</Text>
        <Text style={styles.timer}>00.00</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="volume-high-sharp"
                color="white"
                style={styles.speakerAndMicIcon}
                size={35}
                onPress={() => console.log('This is from speaker icon')}
              />
            </View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="mic-off-sharp"
                color="white"
                style={styles.speakerAndMicIcon}
                size={35}
                onPress={() => console.log('This is from end up call')}
              />
            </View>
          </View>
          <View style={[styles.iconContainer, {marginBottom: hp(7)}]}>
            <Icon
              name="phone"
              color="white"
              style={styles.endCallIcon}
              size={35}
              onPress={() => console.log('This is from end up call')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DiallingScreen;
