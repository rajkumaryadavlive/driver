import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";

const styles = StyleSheet.create({
  button: {
    width: wp("40%"),
  },
  bottomContainer: {
    alignItems: "center",
  },
  // callingCodeContainer: {
  //   width: wp(20),
  //   marginLeft: wp(12),
  // },

  // callingCodeContent: {
  //   borderBottomWidth: 1,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-evenly",
  //   marginTop: 2,
  // },
  container: {
    padding: 10,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(35),
  },
  // countryFlag: {
  //   fontSize: hp(3),
  // },
  // countryCode: {
  //   fontSize: hp(2.5),
  // },
  forgotPasswordText: {
    textAlign: "right",
    fontSize: hp(2),
    color: colors.primaryColor,
  },
  heading: {
    fontSize: hp(2.7),
  },
  headingContainer: {
    marginLeft: wp(12),
    marginTop: hp(5),
  },

  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: wp(30),
    height: wp(30),
    marginTop: hp(10),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(83),
  },
  noteText: {
    textAlign: "center",
    width: wp("80%"),
  },
  modal: {
    position: "absolute",
    top: "40%",
    height: 400,
  },
  signUpButton: {
    width: wp("40%"),
    padding: wp(3),
    marginTop: hp(1),
    backgroundColor: colors.themeGreen,
  },
  // textInput: {
  //   borderWidth: 1,
  //   // width: wp("52%"),
  // },
  textInput: {
    width: wp(60),
    color: "black",
    borderRadius: wp(50),
    padding: hp(1),
    marginLeft: hp(4),
    // backgroundColor: "grey",
    fontSize: hp(2.5),
    justifyContent: "center",
  },
  textInputContainer: {
    marginVertical: hp(1),
    width: wp(80),
    borderColor: colors.primaryColor,
  },
});

export default styles;
