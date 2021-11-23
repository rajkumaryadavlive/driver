import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import * as fonts from "../../constants/fonts";
import { moderateScale, verticalScale, scale } from "react-native-size-matters";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    // alignItems: "center",
  },
  imageStyle: {
    width: "60%",
    height: "60%",
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
  logoText: {
    fontFamily: fonts.CALIBRI,
    color: "#40a62c",
    fontSize: 24,
    marginTop: -20,
    marginBottom: 20,
  },
  logoContainer: {
    width: "100%",
    marginTop: 40,
    height: moderateScale(220),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#37bb44"
  },
  verifyButton: {
    marginTop: 25,
  },
});

export default styles;
