import React from "react";

import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./src/store/store";
import AppNavigator from "./src/routes/AppNavigator";
import { MapScreen } from "./src/screens";
import Screen from "./src/components/Screen";
import DrawerStack from "./src/routes/DrawerStack";
import AppTextInput from "./src/components/AppTextInput";

export default function App() {
  const [loaded] = useFonts({
    calibri: require("./src/assets/fonts/calibri.ttf"),
    segoeui: require("./src/assets/fonts/segoeui.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      // <NavigationContainer>
      //   <DrawerStack />
      // </NavigationContainer>
      // <Screen>
      //   {/* <MapScreen /> */}
      //   <AppTextInput
      //     placeholder="Enter name here"
      //     rightIcon="check"
      //     leftIcon="circle"
      //     style={{
      //       borderWidth: 2,
      //       borderRadius: 25,
      //       padding: 20,
      //     }}
      //   />
      // </Screen>
    );
  }
}
