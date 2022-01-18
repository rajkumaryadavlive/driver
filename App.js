import React, { useState } from "react";

import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./src/store/store";
import AppNavigator from "./src/routes/AppNavigator";

import Screen from "./src/components/Screen";
import DrawerStack from "./src/routes/DrawerStack";
import { EditProfileScreen } from "./src/screens";
import { Text, Alert, Button, View, Dimensions } from "react-native";
import CustomImageList from "./src/components/CustomImageList";
import AuthContext from "./src/auth/context";
import MediaSelectionScreen from "./src/components/MediaSelectionScreen";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import { wp } from "./src/constants/dimensions";
import MultipleBarGraph from "./src/components/MultipleBarGraph";

export default function App() {
  const [token, setToken] = useState("");

  const [loaded] = useFonts({
    calibri: require("./src/assets/fonts/calibri.ttf"),
    segoeui: require("./src/assets/fonts/segoeui.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthContext.Provider value={{ token, setToken }}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </AuthContext.Provider>

      // <NavigationContainer>
      //   <DrawerStack />
      // </NavigationContainer>
      // <EditProfileScreen />
      // <Screen>
      //   <MultipleBarGraph />
      // </Screen>
    );
  }
}
