import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  body: {
    paddingHorizontal: wp(2),
  },
  bodyText: {
    fontSize: wp(4),
    color: colors.FONT_GREY,
  },
  card: {
    elevation: 5,
    backgroundColor: colors.whiteColor,
    width: wp("95%"),
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    alignItems: "center",
    marginVertical: hp(1),
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
    margin: wp(2),
  },
  icon: {
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: wp(25),
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: hp(1),
  },
  image: {
    width: wp(40),
    height: wp(40),
  },
  imageContainer: {
    marginTop: hp(1),
    width: wp("90%"),
    height: hp("30%"),
    alignSelf: "center",
  },
  text: {
    fontSize: wp(4),
    marginTop: hp(2),
    fontFamily: "segoeui",
  },
});
