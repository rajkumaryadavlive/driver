import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import AppNavigator from "./src/routes/AppNavigator";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import WithdrawScreen from "./src/screens/WithdrawScreen";
import ReferralScreen from "./src/screens/ReferralScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import TransactionsScreen from "./src/screens/TransactionsScreen";
import InviteMembersScreen from "./src/screens/InviteMembersScreen";

export default function App() {
  const [loaded] = useFonts({
    calibri: require("./src/assets/fonts/calibri.ttf"),
    segoeui: require("./src/assets/fonts/segoeui.ttf"),
  });

  // if (!loaded) {
  //   return <AppLoading />;
  // } else {
  //   return (
  //     <Provider store={store}>
  //       <AppNavigator />
  //     </Provider>
  //   );
  // }
  return <WithdrawScreen />;
}
