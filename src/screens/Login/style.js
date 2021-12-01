import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";

const styles = StyleSheet.create({
  button: {
    width: wp("80%"),
  },
  callingCodeContainer: {
    width: wp(20),
    marginLeft: wp(12),
  },
  bottomContainer: {
    marginTop: hp(18),
    alignItems: "center",
  },
  callingCodeContent: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 2,
  },
  codeAndNumber: {
    flexDirection: "row",
    marginVertical: hp(4),
  },
  countryFlag: {
    fontSize: hp(3),
  },
  countryCode: {
    fontSize: hp(2.5),
  },
  heading: {
    fontSize: hp(2.7),
  },
  headingContainer: {
    marginLeft: wp(12),
    marginTop: hp(5),
  },
  image: {
    width: wp(30),
    height: wp(30),
    marginTop: hp(10),
    alignSelf: "center",
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
    backgroundColor: colors.darkGreenColor,
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: hp(3),
    width: wp("52%"),
  },
  textInputContainer: {
    marginLeft: wp(4),
  },
});

export default styles;

// container: {
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "blue",
// },
// textNotAMember: {
//   textAlign: "center",
//   color: "#4B4B4B",
//   fontSize: 14.5,
//   marginRight: moderateScale(5),
//   // fontFamily: "OpenSans_400Regular",
// },
// createAccountText: {
//   textAlign: "center",
//   color: colors.primaryColor,
//   fontSize: 14.5,
//   // fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR,
// },
// termsConditionText: {
//   textAlign: "center",
//   // marginTop: moderateScale(120),
//   fontSize: 15,
//   color: "#4B4B4B",
//   // fontFamily: fonts.SEGOE_UI,
// },
// viewContainer: {
//   width: "100%",
//   height: scale(25),
// },
// nextContainer: {
//   justifyContent: "flex-end",
//   marginBottom: moderateScale(20),
//   width: "100%",
//   alignItems: "center",
//   justifyContent: "center",
// },
// nextContainer: {
//   justifyContent: "flex-end",
//   marginBottom: moderateScale(20),
//   width: "100%",
//   alignItems: "center",
//   justifyContent: "center",
// },
// textContainer: {
//   flexDirection: "row",
//   width: "100%",
//   marginTop: 17,
//   justifyContent: "center",
// },
// logoStyle: {
//   width: "65%",
//   height: "65%",
//   resizeMode: "contain",
// },
// logoText: {
//   // fontFamily: fonts.CALIBRI,
//   color: "#40a62c",
//   fontSize: 24,
//   marginTop: -20,
// },
// phoneTextStyle: {
//   // fontFamily: fonts.FONT_GOOGLE_SANS_REGULAR,
//   fontSize: 16,
//   lineHeight: 40,
//   color: colors.blackColor,
//   marginTop: 5,
// },
// signInTextStyle: {
//   // fontFamily: fonts.FONT_GOOGLE_SANS_MEDIUM,
//   fontSize: 20,
//   color: colors.primaryColor,
//   textAlign: "center",
// },
// enterMonoTextStyle: {
//   // fontFamily: fonts.FONT_GOOGLE_SANS_MEDIUM,
//   fontSize: 14.5,
//   marginTop: moderateScale(6),
//   marginBottom: moderateScale(20),
//   color: colors.blackColor,
//   textAlign: "center",
// },
// enterMonoTextStyle_1: {
//   // fontFamily: fonts.SEGOE_UI,
//   fontSize: 18,
//   marginVertical: moderateScale(6),
//   color: colors.blackColor,
//   textAlign: "center",
//   alignSelf: "flex-start",
//   // position: "absolute",
//   // top: "45%",
//   marginLeft: 30,
// },
// renderPhoneNumberLayoutContainer: {
//   // marginLeft:'auto',
//   marginLeft: 10,
//   // marginRight:'auto'
//   marginRight: 10,
// },
// nextButton: {
//   height: 40,
//   width: 316,
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: 30,
//   backgroundColor: "#40a62c",
// },
// nextButtonContainer: {
//   width: "100%",
//   marginTop: 100,
// },
// nextButtonText: {
//   color: "#FFFFFF",
//   fontSize: 15,

//   // fontFamily: fonts.SEGOE_UI,
// },
// termsConditionTextContainer: {
//   marginTop: moderateScale(20),
// },
// logoContainer: {
//   width: "100%",
//   marginTop: 125,
//   height: moderateScale(2),
//   justifyContent: "center",
//   alignItems: "center",
//   // backgroundColor: "#37bb44"
// },
// nextIconStyle: { width: 74, height: 74, resizeMode: "contain" },
// mainContainer: { width: "100%", height: "100%", backgroundColor: "#fff" },
// phoneNumberContainer: {
//   flex: 1,
//   width: "100%",
//   marginTop: moderateScale(20),
//   paddingLeft: moderateScale(5),
//   paddingRight: moderateScale(5),
//   alignItems: "center",
// },
// countryCodeContainer: {
//   flexDirection: "row",
//   minWidth: 50,
//   marginRight: moderateScale(5),
//   alignItems: "center",
// },
// dropDownImageStyle: {
//   width: 15,
//   height: 15,
//   marginRight: 5,
//   top: 5,
//   resizeMode: "contain",
// },
// countryCodeTextInput: {
//   width: "25%",
//   height: moderateScale(50),
//   // position: "absolute",
//   borderColor: colors.blackColor,
//   borderBottomWidth: 1,
//   marginLeft: 40,
// },
// phoneNumberInputStyle: {
//   height: moderateScale(50),
//   borderColor: colors.phoneInputColor,
//   borderBottomWidth: 1,
//   fontSize: 30,
//   width: "70%",
//   // fontFamily: fonts.FONT_GOOGLE_SANS_BOLD,
//   color: "#202020",
//   paddingBottom: Platform.OS === "ios" ? 0 : 4,
// },
// phoneCodeContainer: {
//   width: "85%",
//   alignItems: "center",
//   flexDirection: "row",
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "center",
//   position: "absolute",
//   top: "50%",
// },
