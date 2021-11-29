import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  body: {
    fontSize: wp(4),
    color: colors.FONT_GREY,
    marginLeft: wp(2),
  },
  card: {
    elevation: 5,
    backgroundColor: colors.whiteColor,
    width: wp("95%"),
  },
  container: {
    alignItems: "center",
  },
  date: {
    color: colors.primaryColor,
    fontSize: wp(3.5),
  },
  heading: {
    fontSize: wp(4.5),
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp(2),
  },
  icon: {
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 25,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: hp(1),
  },
  image: {
    width: wp(40),
    height: wp(40),
  },
  text: {
    fontSize: wp(4),
    marginTop: hp(2),
    fontFamily: "segoeui",
  },
});
