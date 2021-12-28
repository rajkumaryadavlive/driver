import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    color: colors.primaryColor,
    fontSize: hp(4),
    paddingVertical: hp(1),
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp(1),
  },
  amountText: {
    fontSize: hp(3),
  },
  button: {
    width: wp("90%"),
    borderRadius: hp(2.5),
    padding: hp(2.5),
    marginTop: hp(2),
  },
  container: {
    alignItems: "center",
    paddingHorizontal: wp(4),
  },
  currentBalanceText: {
    fontSize: hp(3.5),
    paddingTop: hp(3),
    paddingBottom: hp(1),
  },
  currentBalanceContainer: {
    elevation: 4,
    backgroundColor: colors.whiteColor,
    alignItems: "center",
    width: wp("95%"),
  },
  date: {
    color: colors.lightBlue,
  },
  listContainer: {
    borderBottomWidth: 1,
    width: wp("90%"),
  },
  topUpHistory: {
    fontSize: hp(3.5),
    alignSelf: "flex-start",
    fontWeight: "700",
    fontFamily: "segoeui",
    marginBottom: 1,
  },
});
