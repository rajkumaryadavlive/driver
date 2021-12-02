import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Divider,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import * as colors from "../../constants/colors";
import { wp, hp } from "../../constants/dimensions";

export default function SideMenu(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.image}
              />
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Home"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign
                  name="creditcard"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Credit"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("CreditScreen");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="file-table-outline"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Biiling plan"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("BillingPlans");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5
                  name="hand-holding-usd"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Invite & Earn"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("InviteAndEarn");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons
                  name="wallet-outline"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="My Wallet"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("Wallet");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo
                  name="back-in-time"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="My Bookings"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("MyBookings");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome
                  name="trophy"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Rewards"
              labelStyle={styles.labels}
              onPress={() => {}}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome
                  name="bell-o"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Notification"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("Notification");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <SimpleLineIcons
                  name="user-female"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Help Center"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("HelpCenter");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5
                  name="ambulance"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Emergency"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("Emergency");
              }}
            />
            <Divider style={styles.divider} />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="language" color={colors.whiteColor} size={size} />
              )}
              label="Language"
              labelStyle={styles.labels}
              onPress={() => {
                props.navigation.navigate("Language");
              }}
            />
            <Divider style={styles.divider} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={colors.whiteColor} size={size} />
          )}
          label="Sign Out"
          labelStyle={styles.labels}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1D88",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#2D32CD",
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  imageContainer: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: colors.whiteColor,
    margin: wp(4),
  },
  labels: {
    color: colors.whiteColor,
  },
});
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 20,
//     marginVertical: 8,
//     fontWeight: "800",
//     color: "#FFF",
//   },
//   caption: {
//     fontSize: 20,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: "bold",
//     marginRight: 3,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: "#f4f4f4",
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   linearGradient: {
//     width: undefined,
//     //padding: 15,
//   },
//   profile: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     borderWidth: 3,
//     borderColor: "#FFF",
//   },
