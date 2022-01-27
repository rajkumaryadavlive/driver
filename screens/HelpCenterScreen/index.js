import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import {primaryColor} from '../../constants/colors';
import Screen from '../../components/Screen';

const HelpCenterScreen = props => {
  const ContentComponent = ({body, iconName = 'phone-classic'}) => {
    return (
      <View style={styles.iconAndNumbers}>
        <Icon name={iconName} size={22} color={primaryColor} />
        <Text style={styles.text}>{body}</Text>
      </View>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/helpcenter.png')}
          style={styles.image}
        />
        <Text style={styles.FYItext}>For more information, Please contact</Text>
        <View style={styles.contentContainer}>
          <ContentComponent body="0968 168 111" />
          <ContentComponent body="0768 168 111" />
          <ContentComponent body="0888 168 111" />
          <ContentComponent body="help@gogotaxiapps.com" iconName="email" />
        </View>
      </View>
    </Screen>
  );
};

export default HelpCenterScreen;
