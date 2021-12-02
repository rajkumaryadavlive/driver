import { StyleSheet } from "react-native";
import { hp, wp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    width: wp("85%"),
    borderRadius: wp(5),
    padding: hp(2),
    marginTop: hp(2.5),
  },
  container: {
    alignItems: "center",
    marginTop: hp(2),
  },
  divider: {
    width: wp("85%"),
    marginVertical: hp(1),
    backgroundColor: colors.darkGrey,
  },
  flagAndName: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp(3),
  },
  flagContainer: {
    width: wp(11),
    height: hp(4),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  nameAndRadio: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("85%"),
    alignItems: "center",
  },
  title: {
    marginLeft: wp(3),
  },
});
