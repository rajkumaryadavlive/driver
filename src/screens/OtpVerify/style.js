import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import * as fonts from "../../constants/fonts";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";
import { hp, wp } from "../../constants/dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  screenText: {
    textAlign: "center",
    fontSize: 16,
  },
  verificationCodeStyle: {
    fontSize: 20,
    color: colors.primaryColor,
    marginTop: 60,
    textAlign: "center",
    fontFamily: fonts.FONT_GOOGLE_SANS_MEDIUM,
  },
  resendTextStyle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30,
    color: "#666666",
    textAlign: "center",
    fontFamily: "SegoeUI",
  },
  enterCodeTextStyle: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    color: "#666666",
    fontFamily: "SegoeUI",
    width: 284,
    alignSelf: "center",
  },
  backArrowStyle: {
    width: 30,
    height: 30,
    resizeMode: "center",
  },
  logoStyle: {
    width: "65%",
    height: "65%",
    resizeMode: "contain",
  },

  logoContainer: {
    width: wp(40),
    marginTop: hp(10),
    height: wp(40),
    alignSelf: "center",
    // backgroundColor: "#37bb44",
  },
  verifyButton: {
    marginTop: 15,
  },
});

export default styles;
