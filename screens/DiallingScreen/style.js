import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    width: wp(65),
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginBottom: hp(4),
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  contentContainer: {
    borderTopWidth: 1,
    borderColor: colors.divider,
    width: wp(100),
    marginTop: hp(10),
    alignItems: "center",
    flex: 1,
  },
  endCallIcon: {
    backgroundColor: "#D80D07",
    padding: wp(4),
    borderRadius: wp(10),
  },
  heading: {
    color: colors.FONT_GREY,
    fontSize: wp(7),
    marginTop: hp(3),
  },

  iconContainer: {
    backgroundColor: colors.whiteColor,
    borderRadius: wp(20),
    padding: wp(1),
    elevation: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  imageContainer: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(17),
    padding: wp(0.5),
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  passengerText: {
    marginTop: hp(3),
    color: colors.FONT_GREY,
  },
  passengerName: {
    marginTop: hp(2),
    textTransform: "uppercase",
    color: colors.primaryColor,
    fontSize: wp(8),
  },
  speakerAndMicIcon: {
    backgroundColor: colors.FONT_GREY,
    padding: wp(4),
    borderRadius: wp(100),
  },
  timer: {
    fontSize: wp(8),
    marginVertical: hp(2),
  },
});
