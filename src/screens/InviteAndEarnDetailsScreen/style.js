import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amount: {
    color: colors.primaryColor,
    fontSize: hp(2.8),
  },
  badgeContainer: {
    width: wp(7),
    height: hp(5),
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  container: {
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: wp(4),
    justifyContent: "space-between",
    height: hp(8),
  },
  inviteId: {
    fontSize: hp(2.5),
  },
  invitedId: {
    color: colors.primaryColor,
    fontSize: hp(2.8),
    marginTop: hp(1),
    marginLeft: wp(5),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(100),
  },
  imageContainer: {
    width: hp(15),
    height: hp(15),
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderRadius: wp(100),
    padding: 2,
    alignSelf: "center",
  },
  imageAndDetails: {
    width: wp("95%"),
    elevation: 1,
    alignItems: "center",
    borderTopRightRadius: wp(2),
    borderTopLeftRadius: wp(2),
    paddingVertical: hp(2),
    marginTop: hp(1),
  },
  levelText: {
    color: colors.whiteColor,
    fontSize: wp(5),
  },
  list: {
    flexDirection: "row",
    width: wp("95%"),
    backgroundColor: colors.whiteColor,
    elevation: 1,
    marginTop: hp(1),
    padding: hp(2),
  },
  textContainer: { position: "absolute", top: -65, alignItems: "center" },
  triangle: {
    borderLeftWidth: 45,
    borderRightWidth: 45,
    borderTopWidth: 70,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
