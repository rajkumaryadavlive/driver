import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Screens from "../screens";
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Screens.SideMenu {...props} />}
    >
      <Drawer.Screen
        options={{ headerTransparent: true }}
        name="Home"
        component={Screens.Home}
      />
      <Drawer.Screen
        options={{
          title: "AddCredit",
        }}
        name="AddCreditScreen"
        component={Screens.AddCreditScreen}
      />
      <Drawer.Screen
        options={{ title: "Credit" }}
        name="CreditScreen"
        component={Screens.CreditScreen}
      />
      <Drawer.Screen
        name="BillingPlans"
        component={Screens.BillingPlanScreen}
        options={{ title: "Billing plan" }}
      />
      <Drawer.Screen
        name="InviteAndEarn"
        component={Screens.InviteAndEarnScreen}
        options={{ title: "Invite & Earn" }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Screens.WalletScreen}
        options={{ title: "My Wallet" }}
      />
      <Drawer.Screen
        name="MyBookings"
        component={Screens.MyBookingsScreen}
        options={{ title: "My Bookings" }}
      />
      <Drawer.Screen
        name="Notification"
        component={Screens.NotificationScreen}
        options={{ title: "Notification" }}
      />
      <Drawer.Screen
        name="HelpCenter"
        component={Screens.HelpCenterScreen}
        options={{ title: "Help Center" }}
      />
      <Drawer.Screen
        name="Emergency"
        component={Screens.EmergencyScreen}
        options={{ title: "Emergency" }}
      />
      <Drawer.Screen
        name="Language"
        component={Screens.ChangeLanguageScreen}
        options={{ title: "Language" }}
      />
      <Drawer.Screen name="Receipt" component={Screens.ReceiptScreen} />
      <Drawer.Screen name="Summary" component={Screens.SummaryScreen} />
      <Drawer.Screen
        name="RatePassenger"
        component={Screens.RatePassengerScreen}
      />
      <Drawer.Screen
        name="Map"
        component={Screens.MapScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;
