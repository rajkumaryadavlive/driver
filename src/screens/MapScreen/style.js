import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  badgeContainer: {
    width: wp(4),
    height: hp(3),
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  buttons: {
    padding: wp(2.5),
    borderRadius: wp(20),
    backgroundColor: "#ffffff",
    margin: hp(1),
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  customLayout: {
    position: "absolute",
    bottom: hp(5),
    left: wp(5),
    width: wp(90),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(10),
  },
  imageContainer: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: colors.orangeColor,
    padding: wp(0.3),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(20),
    justifyContent: "space-between",
  },
  topContainer: {
    width: wp(100),
    backgroundColor: colors.whiteColor,
    opacity: 0.5,
    height: hp(7),
  },
  topContent: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(94),
    height: hp(7),
  },
  tripButtonContainer: {
    borderWidth: 1,
    width: wp(13),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
  },
  tripButtonText: {
    fontSize: 10,
    color: colors.darkGrey,
  },
});
