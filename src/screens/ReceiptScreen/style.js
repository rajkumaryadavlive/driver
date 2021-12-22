import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    fontSize: hp(6),
    marginTop: hp(10),
    color: colors.blackColor,
  },
  button: {
    width: wp(45),
    backgroundColor: colors.darkBlue,
    marginTop: hp(5),
  },
  buttonText: {
    fontWeight: "700",
  },
  center: {
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    elevation: 4,
    borderRadius: wp(2),
  },
  date: {
    fontSize: hp(1.5),
    color: colors.lightBlue,
    fontFamily: "segoeui",
  },
  durationAndDistance: {
    flexDirection: "row",
    width: wp(75),
    justifyContent: "space-between",
    marginTop: hp(5),
  },
  note: {
    color: colors.FONT_GREY,
    marginTop: hp(2),
  },
  seconds: {
    marginVertical: hp(2),
    fontSize: hp(9),
    color: colors.FONT_GREY_STONE,
  },
  text: {
    fontSize: hp(2),
  },
  totalText: {
    fontWeight: "700",
    fontSize: hp(2),
  },
  totalAndDate: {
    width: wp(90),
    marginLeft: wp(7),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2),
  },
  value: {
    fontSize: hp(5),
  },
});
