import AsyncStorage from '@react-native-async-storage/async-storage';

const getFcmToken = async () => {
  const deviceToken = await AsyncStorage.getItem('fcmToken');

  if (!deviceToken) {
    console.log('Error in getDeviceToken.js file');
  }
  return deviceToken;
};

export default getFcmToken;
