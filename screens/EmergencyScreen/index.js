import React from 'react';
import {Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import Screen from '../../components/Screen';
import {primaryColor} from '../../constants/colors';

const EmergencyScreen = props => {
  const ContentComponent = ({number, title}) => {
    return (
      <View style={styles.iconAndNumbers}>
        <Icon name="phone-classic" size={20} color={primaryColor} />
        <Text style={styles.numbers}>{number}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/emergency.png')}
          style={styles.image}
        />
        <Text style={styles.FYItext}>For more information, Please contact</Text>
        <View style={styles.contentContainer}>
          <ContentComponent number="117" title="Police" />
          <View style={styles.iconAndNumbers}>
            <Icon name="phone-classic" size={20} color={primaryColor} />
            <Text style={styles.numbers}>118 or 666</Text>
            <Text style={styles.fireFighterText}>Fire fighter</Text>
          </View>
          <ContentComponent number="119" title="Ambulance" />
        </View>
      </View>
    </Screen>
  );
};

export default EmergencyScreen;
