import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  badgeContainer: {
    width: wp(5),
    height: hp(3),
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    width: wp("95%"),
    elevation: 5,
    backgroundColor: colors.whiteColor,
    borderRadius: wp(2),
    marginTop: hp(1),
  },
  date: {
    color: colors.lightBlue,
    fontSize: hp(1.4),
    marginTop: 3,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("70%"),
  },
  emptyContainerImage: {
    width: wp(35),
    height: wp(35),
  },
  firstContainer: {
    flexDirection: "row",
    marginTop: hp(1),
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("70%"),
  },
  imageContainer: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(25),
    borderWidth: 1,
    borderColor: colors.primaryColor,
    padding: 2,
    marginHorizontal: wp(4),
    marginBottom: hp(1),
  },
  imageAndDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1),
  },
  labels: {
    fontSize: wp(3),
    color: colors.primaryColor,
    textAlign: "center",
  },
  levelContainer: {
    flexDirection: "row",
    marginTop: hp(1),
  },
  medalImage: {
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: hp(3),
    marginTop: hp(2),
    fontFamily: "segoeui",
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: wp("100%"),
  },
  value: {
    textAlignVertical: "center",
    color: colors.darkGrey,
    fontSize: wp(3),
  },
});
