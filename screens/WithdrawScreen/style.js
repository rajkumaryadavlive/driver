import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amountDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: hp(1.5),
    marginVertical: hp(1),
  },
  amountText: {
    fontSize: wp(5.5),
  },
  container: {
    alignItems: "center",
  },
  date: {
    color: colors.lightBlue,
    fontSize: wp(4.5),
  },
  image: {
    width: wp(35),
    height: wp(35),
  },
  khr: {
    color: colors.primaryColor,
    marginLeft: hp(1.5),
    fontSize: wp(7),
    marginTop: hp(1),
  },
  text: {
    fontSize: wp(6),
    marginTop: hp(1),
    fontFamily: "segoeui",
  },
  withDrawLayout: {
    elevation: 5,
    width: wp("95%"),
    height: hp("15%"),
    backgroundColor: "#fff",
    borderRadius: wp(1),
    marginVertical: hp(1),
  },
});
