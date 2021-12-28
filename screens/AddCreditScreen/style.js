import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  accountNameNumber: {
    fontSize: hp(2),
    fontWeight: "700",
    width: wp("56%"),
  },
  card: {
    elevation: 5,
    borderRadius: wp(1),
    backgroundColor: colors.whiteColor,
    width: wp("95%"),
    marginTop: hp(1),
  },
  contentContainer: {
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
  },
  companyImage: {
    width: wp("25%"),
    height: hp("10%"),
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: wp("35%"),
    height: hp("20%"),
    padding: wp(1),
  },
  secondContainer: {
    justifyContent: "space-around",
    marginLeft: wp(2),
  },
  text: {
    fontSize: hp(1.8),
    marginBottom: hp(4),
    fontFamily: "segoeui",
    width: wp("90%"),
  },
});
