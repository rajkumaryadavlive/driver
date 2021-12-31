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
import ImagePickerComp from "./src/components/ImagePicker";
import { Image, Text } from "react-native";

export default function App() {
  // const [url, setUrl] = useState();

  // console.log("====================================");
  // console.log(url);
  // console.log("====================================");

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
      // <EditProfileScreen />
      // <Screen>
      //   <ImagePickerComp getImageUrl={(url) => setUrl(url)}>
      //     <Text>This is native</Text>
      //   </ImagePickerComp>
      //   <Image source={{ uri: url }} style={{ width: 100, height: 100 }} />
      // </Screen>
    );
  }
}
