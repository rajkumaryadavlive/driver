import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    fontSize: hp(3),
    fontWeight: "700",
    color: colors.primaryColor,
    marginVertical: hp(1),
    fontFamily: "segoeui",
  },
  amountAndDateContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: hp(1),
  },
  bottomContainer: {
    flexDirection: "row",
    paddingBottom: hp(1),
  },
  cancelled: {
    color: "red",
    fontWeight: "700",
    fontSize: hp(3),
    fontFamily: "segoeui",
  },
  container: {
    alignItems: "center",
    marginTop: hp(1),
  },
  contentContainer: {
    width: wp("95%"),
    elevation: 5,
    backgroundColor: colors.whiteColor,
    paddingHorizontal: wp(2),
    paddingBottom: hp(1),
  },
  dateAndTime: {
    fontSize: hp(1.5),
  },
  divider: {
    borderTopWidth: 1,
    borderColor: colors.FONT_GREY,
    marginBottom: hp(1),
  },
  fromAndTo: {
    fontSize: hp(1.8),
    color: colors.darkGreenColor,
  },
  fromName: {
    marginLeft: wp(2),
    fontSize: hp(1.8),
  },
  nameAndNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(1),
  },
  nameAndNumberText: {
    fontSize: hp(2),
  },
  successText: {
    fontSize: hp(1.5),
    color: colors.primaryColor,
    marginRight: wp(0.5),
  },
  successfulTrip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  toName: {
    marginLeft: wp(6),
    fontSize: hp(1.8),
  },
});
