import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { store } from "./src/store/store";
import AppNavigator from "./src/routes/AppNavigator";

import { NavigationContainer } from "@react-navigation/native";

import { ChangeLanguageScreen, InviteAndEarnScreen } from "./src/screens";
import Screen from "./src/components/Screen";
import DrawerStack from "./src/routes/DrawerStack";

export default function App() {
  const [loaded] = useFonts({
    calibri: require("./src/assets/fonts/calibri.ttf"),
    segoeui: require("./src/assets/fonts/segoeui.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      // <Provider store={store}>
      //   <AppNavigator />
      // </Provider>
      <Screen>
        <NavigationContainer>
          <DrawerStack />
        </NavigationContainer>
      </Screen>
    );
  }
}
