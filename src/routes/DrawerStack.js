import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Home,
  SideMenu,
  CreditScreen,
  AddCreditScreen,
  BillingPlanScreen,
  InviteAndEarnScreen,
  WalletScreen,
  MyBookingsScreen,
  NotificationScreen,
  HelpCenterScreen,
  EmergencyScreen,
  ChangeLanguageScreen,
} from "../screens";
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        // options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          title: "AddCredit",
        }}
        name="AddCreditScreen"
        component={AddCreditScreen}
      />
      <Drawer.Screen
        options={{ title: "Credit" }}
        name="CreditScreen"
        component={CreditScreen}
      />
      <Drawer.Screen
        name="BillingPlans"
        component={BillingPlanScreen}
        options={{ title: "Billing plan" }}
      />
      <Drawer.Screen
        name="InviteAndEarn"
        component={InviteAndEarnScreen}
        options={{ title: "Invite & Earn" }}
      />
      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "My Wallet" }}
      />
      <Drawer.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{ title: "My Bookings" }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: "Notification" }}
      />
      <Drawer.Screen
        name="HelpCenter"
        component={HelpCenterScreen}
        options={{ title: "Help Center" }}
      />
      <Drawer.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{ title: "Emergency" }}
      />
      <Drawer.Screen
        name="Language"
        component={ChangeLanguageScreen}
        options={{ title: "Language" }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;
