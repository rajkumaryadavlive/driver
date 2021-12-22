import React from "react";
import { Text, View } from "react-native";

import CustomMap from "../MapScreen";
import Screen from "../../components/Screen";

const Home = ({ navigation }) => {
  return (
    <Screen>
      <CustomMap openDrawer={() => navigation.openDrawer()} />
    </Screen>
  );
};
export default Home;
