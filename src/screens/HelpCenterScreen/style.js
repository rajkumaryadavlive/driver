import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    width: wp("90%"),
    backgroundColor: colors.whiteColor,
    elevation: 5,
    marginTop: hp(4),
    borderRadius: wp(2),
    paddingVertical: wp(2),
  },
  FYItext: {
    fontFamily: "segoeui",
    marginTop: hp(5),
    fontSize: wp(4),
  },
  iconAndNumbers: {
    flexDirection: "row",
    padding: wp(0.5),
    marginLeft: wp(3),
  },
  image: {
    width: wp(50),
    height: wp(50),
    marginTop: hp(3),
  },
  text: {
    marginLeft: wp(5),
    color: colors.darkGrey,
    fontSize: wp(4),
  },
});
