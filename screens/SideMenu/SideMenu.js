import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
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
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

import * as colors from "../../constants/colors";
import { wp, hp } from "../../constants/dimensions";

export default function SideMenu(props) {
  const {
    name = "Anchali Evans",
    rating = 3.8,
    phoneNumber = "+855 34 254 451",
    points = "799",
    navigation,
  } = props;

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.profileContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Registration", { number: "12346789" })
              }
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/images/user.png")}
                  style={styles.image}
                />
                <View style={styles.badgeContainer}>
                  <Image
                    source={require("../../assets/images/silvermedal.png")}
                    style={styles.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.phoneNumber}>{phoneNumber}</Text>
              <Text style={styles.points}>Points : {points}</Text>
              <Rating
                type="star"
                ratingCount={5}
                ratingColor={colors.yellowStarColor}
                imageSize={15}
                readonly
                startingValue={rating}
                minValue={1}
                tintColor={colors.darkBlue}
                style={styles.rating}
              />
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
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
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="power"
                  color={colors.whiteColor}
                  size={size}
                />
              )}
              label="Logout"
              labelStyle={styles.labels}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
            this is the fixed bottom container  
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    width: wp(7),
    height: hp(5),
    position: "absolute",
    bottom: -10,
    right: -5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  detailsContainer: {
    marginLeft: wp(5),
  },
  divider: {
    borderWidth: 1,
    borderColor: colors.blueDivider,
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
  },
  labels: {
    color: colors.whiteColor,
    marginLeft: -15,
    fontFamily: "segoeui",
  },
  name: {
    fontSize: wp(5.5),
    color: colors.whiteColor,
  },
  phoneNumber: {
    color: colors.whiteColor,
    marginTop: hp(0.5),
  },
  points: {
    color: colors.whiteColor,
    marginTop: hp(0.5),
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: hp(3),
    marginLeft: hp(3),
  },
  rating: {
    alignSelf: "flex-start",
    marginTop: hp(0.5),
    backgroundColor: "white",
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
