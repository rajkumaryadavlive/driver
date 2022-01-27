import React from 'react';
import RootStack from './RootStack';
import DrawerStack from './DrawerStack';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const AppNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
export default AppNavigator;
