import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  buttonsContainer: {
    width: wp(65),
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
    marginBottom: hp(15),
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
  heading: {
    color: colors.FONT_GREY,
    fontSize: wp(7),
    marginTop: hp(3),
  },
  pickUpCallIcon: {
    backgroundColor: colors.primaryColor,
    padding: wp(1.3),
    borderRadius: wp(10),
  },
  endCallIcon: {
    backgroundColor: "#D80D07",
    padding: wp(1.3),
    borderRadius: wp(10),
  },
  iconContainer: {
    backgroundColor: colors.whiteColor,
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
    marginTop: hp(7),
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
