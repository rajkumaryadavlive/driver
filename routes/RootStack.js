import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../screens";
import * as Screens from "../screens";

import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Drawer" component={DrawerStack} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Screens.Login} />
      <Stack.Screen name="VerifyOTP" component={Screens.OtpVerify} />
      <Stack.Screen
        name="Registration"
        component={Screens.Registration}
        // options={{ headerShown: true }}
      />
      <Stack.Screen name="SignUp" component={Screens.SignUp} />
      <Stack.Screen
        name="EditProfile"
        component={Screens.EditProfileScreen}
        options={{
          headerShown: true,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
