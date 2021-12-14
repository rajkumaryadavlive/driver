import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    borderTopWidth: 1,
    borderColor: colors.divider,
    width: wp(100),
    marginTop: hp(10),
    alignItems: "center",
  },
  heading: {
    color: colors.FONT_GREY,
    fontSize: wp(7),
    marginTop: hp(3),
  },
  icon: {
    backgroundColor: "#D80D07",
    padding: wp(4),
    borderRadius: wp(10),
  },
  iconContainer: {
    justifyContent: "flex-end",
    backgroundColor: colors.whiteColor,
    marginTop: hp(12),
    borderRadius: wp(10),
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
    marginTop: hp(4),
    color: colors.FONT_GREY,
  },
  passengerName: {
    marginTop: hp(4),
    textTransform: "uppercase",
    color: colors.primaryColor,
    fontSize: wp(8),
  },
  ringingText: {
    marginTop: hp(5),
    color: colors.FONT_GREY,
    fontSize: wp(6.5),
  },
});
