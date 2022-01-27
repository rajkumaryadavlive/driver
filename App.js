import React, {useState, useEffect} from 'react';

import {Button, Image, Text, View} from 'react-native';

import AppNavigator from './src/routes/AppNavigator';
import AuthContext from './src/auth/context';
import ForegroundHandler from './src/utils/ForegroundHandler';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationServices';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Screen from './src/components/Screen';
import ImagePicker from 'react-native-image-crop-picker';

import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  LogBox.ignoreLogs([
    "EventEmitter.removeListener('deviceEventName', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener",
  ]);
  const [token, setToken] = useState('');

  const [imageUrl, setImageUrl] = useState(null);

  const foregroundHandler = () => {
    return <ForegroundHandler />;
  };

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then(image => {
      console.log(image);
      setImageUrl(image.path);
    });
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthContext.Provider value={{token, setToken}}>
        {foregroundHandler()}
        <AppNavigator />
      </AuthContext.Provider>
    </GestureHandlerRootView>
    // <Screen>
    //   <Button title="Image picker" onPress={imagePicker} />
    //   <Image source={{uri: imageUrl}} style={{width: 200, height: 200}} />
    // </Screen>
  );
}
