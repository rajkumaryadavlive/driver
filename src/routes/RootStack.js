import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Splash,
  Login
} from "../screens";

const Stack = createNativeStackNavigator();

const RootStack = ()=>{
    return(
            <Stack.Navigator initialRouteName="Login" headerMode='none'>
                <Stack.Screen options={{  headerShown: false }} name="Splash"  component={Splash} />
                <Stack.Screen  options={{  headerShown: false }} name="Login" component={Login} />
            </Stack.Navigator> 
          );
}

export default RootStack;
