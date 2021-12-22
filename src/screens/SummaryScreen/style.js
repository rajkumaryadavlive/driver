import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    fontSize: hp(6),
    color: colors.blackColor,
  },

  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    elevation: 4,
    borderRadius: wp(2),
    marginTop: hp(0.5),
    marginHorizontal: wp(0.7),
  },
  date: {
    fontSize: hp(1.5),
    color: colors.lightBlue,
    fontFamily: "segoeui",
  },
  details: {
    fontSize: hp(1.7),
    color: colors.FONT_GREY,
    marginTop: wp(2),
  },
  detailsContainer: {
    alignSelf: "flex-start",
    marginLeft: hp(5),
    marginTop: hp(1),
  },
  durationAndDistance: {
    flexDirection: "row",
    width: wp(75),
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  note: {
    color: colors.FONT_GREY_STONE,
    fontSize: hp(2.5),
  },
  seconds: {
    fontWeight: "700",
    color: colors.blackColor,
  },
  text: {
    fontSize: hp(2),
    fontWeight: "700",
    color: colors.darkGrey,
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
