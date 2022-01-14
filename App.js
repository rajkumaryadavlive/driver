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
import { Text, Alert, Button } from "react-native";
import CustomImageList from "./src/components/CustomImageList";
import AuthContext from "./src/auth/context";
import MediaSelectionScreen from "./src/components/MediaSelectionScreen";

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
      //   <Text>This is app.js</Text>
      // </Screen>
    );
  }
}
