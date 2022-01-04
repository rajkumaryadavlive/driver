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
import { Text, Alert } from "react-native";
import CustomImageList from "./src/components/CustomImageList";

export default function App() {
  const [loaded] = useFonts({
    calibri: require("./src/assets/fonts/calibri.ttf"),
    segoeui: require("./src/assets/fonts/segoeui.ttf"),
  });

  const data = [
    {
      id: "1",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    },
    {
      id: "2",
      image:
        "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_2x1.jpg",
    },
    {
      id: "3",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    },
    {
      id: "4",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    },
    {
      id: "5",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    },
    {
      id: "6",
      image:
        "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
    },
  ];

  const [imgData, setImgData] = useState(data);

  const removeImage = (id) => {
    Alert.alert("Delete", "Are you sure you want to delete this image", [
      {
        text: "Yes",
        onPress: () => {
          const fa = imgData.filter((image) => image.id !== id);
          setImgData([...fa]);
        },
      },
      { text: "No" },
    ]);
  };

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
      //   <Text>This is image picker example</Text>
      //   <CustomImageList data={imgData} removeImage={removeImage} />
      // </Screen>
    );
  }
}
