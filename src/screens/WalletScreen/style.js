import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amountText: {
    color: colors.FONT_GREY_STONE,
    fontSize: wp(5),
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("83%"),
    marginTop: hp(1),
  },
  balanceAmount: {
    color: colors.primaryColor,
    fontSize: wp(7),
  },
  button: {
    borderRadius: wp(6),
    width: wp("90%"),
    marginTop: hp(3),
    padding: wp(5),
  },
  contentContainer: {
    width: wp("90%"),
    backgroundColor: colors.whiteColor,
    elevation: 5,
    marginVertical: hp(2),
    paddingVertical: hp(1),
  },
  container: {
    alignItems: "center",
  },
  heading: {
    fontSize: wp(5),
    fontFamily: "segoeui",
  },
  image: {
    width: wp(70),
    height: wp(50),
    marginTop: hp(5),
  },
  innerContainer: {
    marginLeft: wp(5),
  },
  referralAmount: {
    color: colors.primaryColor,
    fontSize: wp(5),
  },
});
