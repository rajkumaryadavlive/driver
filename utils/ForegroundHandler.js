import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const ForegroundHandler = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Received in foreground', remoteMessage);
      const {notification, messageId} = remoteMessage;
      PushNotification.localNotification({
        channelId: 'chal be chal',
        id: messageId,
        body: 'Android body',
        title: 'Android notification',
        soundName: 'default',
        vibrate: true,
        playSound: true,
      });
    });
    return unsubscribe;
  }, []);
  return null;
};

export default ForegroundHandler;
