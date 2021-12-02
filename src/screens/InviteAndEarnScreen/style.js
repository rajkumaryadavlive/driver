import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    width: wp("85%"),
    borderRadius: wp(5),
    padding: hp(2),
    marginTop: hp(2.5),
  },
  card: {
    width: wp("85%"),
    elevation: 5,
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    padding: hp(2),
    marginTop: hp(1),
  },
  code: {
    color: colors.orangeColor,
    fontSize: wp(6),
    marginTop: hp(1),
  },
  container: {
    alignItems: "center",
  },
  inviteMsg: {
    fontSize: hp(2.5),
  },
  imageContainer: {
    width: wp("95%"),
    height: hp(30),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(2),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  qrContainer: {
    width: wp("30%"),
    height: wp("30%"),
    marginVertical: hp(1),
    borderWidth: 0.5,
  },
  qrText: {
    color: colors.primaryColor,
    fontSize: hp(3),
    marginBottom: hp(2),
  },
});
