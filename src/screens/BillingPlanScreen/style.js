import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    width: wp("95%"),
    elevation: 5,
    backgroundColor: colors.whiteColor,
    padding: wp(2),
    borderRadius: wp(1),
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: wp(2),
  },
  heading: {
    fontSize: hp(3),
  },
  offer: {
    marginLeft: wp(2),
    fontSize: hp(2),
    color: colors.orangeColor,
  },
  status: {
    fontSize: hp(3),
    color: colors.lightBlue,
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1),
    marginLeft: wp(2),
  },
});
