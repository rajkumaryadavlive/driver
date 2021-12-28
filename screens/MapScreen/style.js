import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  badgeContainer: {
    width: wp(4),
    height: hp(3),
    position: "absolute",
    bottom: -5,
    right: 0,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: wp(90),
    paddingVertical: hp(1),
  },

  buttonContainer: {
    borderWidth: 1,
    // width: wp(13),
    // height: wp(6),
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: wp(1),
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 10,
    color: colors.darkGrey,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  customBottomLayout: {
    position: "absolute",
    bottom: hp(5),
    width: wp(90),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  customBottomLayout2: {
    position: "absolute",
    bottom: 0,
    width: wp(100),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  customerImageContainer: {
    width: wp(18),
    height: wp(18),
    borderWidth: 2,
    borderColor: colors.orangeColor,
    borderRadius: wp(10),
    padding: 1,
    marginTop: hp(1),
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: colors.darkGrey,
  },
  dot: {
    backgroundColor: colors.primaryColor,
    width: wp(5),
    height: wp(5),
    borderRadius: wp(5),
  },
  durationAndDistance: {
    alignItems: "center",
  },
  durationAndDistanceText: {
    color: colors.darkGrey,
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
  imageAndCustomerInfo: {
    marginTop: hp(3),
    flexDirection: "row",
    marginLeft: wp(2),
    width: wp(98),
    height: hp(16),
    position: "absolute",
    top: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  newJob: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  newJobText: {
    color: colors.darkGrey,
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  orderStarted: {
    width: wp(100),
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginRight: hp(5),
  },
  orderStartedText: {
    fontSize: hp(3),
    color: colors.darkGrey,
  },
  rejectButtonContainer: {
    backgroundColor: "red",
    borderWidth: 0,
    paddingHorizontal: wp(6),
    paddingVertical: wp(1.5),
    borderRadius: wp(5),
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(20),
    justifyContent: "space-between",
  },
  threeDots: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: wp(25),
    alignSelf: "center",
    marginTop: hp(1),
  },
  timeToReachAndDistance: {
    fontSize: hp(5),
  },
  timerContainer: {
    borderWidth: 3,
    borderColor: colors.primaryColor,
    width: wp(17),
    height: wp(17),
    borderRadius: wp(10),
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: hp(4),
    fontWeight: "700",
    color: colors.primaryColor,
  },
  topContainer: {
    width: wp(100),
    backgroundColor: colors.whiteColor,
    opacity: 0.7,
    height: hp(7),
  },
  topContent: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(95),
  },
});
