import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    alignSelf: "center",
    color: colors.primaryColor,
    fontSize: wp(7),
    marginVertical: hp(1),
  },
  card: {
    backgroundColor: "#fff",
    width: wp("95%"),
    elevation: 5,
    padding: wp(2),
    marginVertical: hp(1),
  },
  container: {
    alignItems: "center",
  },
  date: {
    color: colors.lightBlue,
    fontSize: wp(4),
  },
  destinationAddress: {
    color: colors.FONT_GREY,
    fontFamily: "calibri",
    marginLeft: wp(3.5),
    width: wp("67%"),
    textAlignVertical: "center",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: colors.divider,
  },
  emptyText: {
    fontSize: wp(6),
    marginTop: hp(1),
    fontFamily: "segoeui",
  },
  heading: {
    fontSize: wp(4.5),
    fontFamily: "calibri",
  },
  ids: {
    color: colors.lightBlue,
    fontSize: wp(3.7),
    fontFamily: "calibri",
  },
  image: {
    width: wp(35),
    height: wp(35),
  },
  name: {
    textTransform: "uppercase",
    fontSize: wp(4.5),
    color: colors.FONT_GREY_STONE,
  },
  nameAndDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickUpAddress: {
    color: colors.FONT_GREY,
    fontFamily: "calibri",
    marginLeft: wp(11),
    width: wp("67%"),
    textAlignVertical: "center",
  },
  pickUpAndDestinationContainer: {
    flexDirection: "row",
    marginTop: hp(1),
  },
  secondContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
});
