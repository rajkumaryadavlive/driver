import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { store } from "./src/store/store";
import AppNavigator from "./src/routes/AppNavigator";

import { NotificationScreen } from "./src/screens";

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
      <NotificationScreen />
    );
  }
}
