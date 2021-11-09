import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Login, OtpVerify, SignUp } from "../screens";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" headerMode="none">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyOTP"
        component={OtpVerify}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
