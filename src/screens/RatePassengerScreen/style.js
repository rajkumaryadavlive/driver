import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    width: wp(20),
    padding: hp(0.5),
    backgroundColor: colors.orangeColor,
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: hp(2.5),
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    elevation: 4,
    borderRadius: wp(2),
    marginTop: hp(0.5),
  },
  commentText: { fontSize: hp(2.5) },
  commentAndInput: {
    alignSelf: "flex-start",
    marginLeft: hp(4),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: wp(25),
    height: wp(25),
  },
  ratePassengerText: {
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: hp(4),
  },
  textInput: {
    fontSize: hp(2.5),
    alignSelf: "flex-start",
    paddingLeft: hp(2),
    paddingTop: hp(2),
    marginBottom: hp(4),
    color: colors.blackColor,
    width: wp(85),
  },
  textInputContainer: {
    borderWidth: 1,
    width: wp(87),
    borderRadius: wp(3),
    marginVertical: hp(2),
    borderColor: colors.divider,
  },
  question: {
    marginTop: hp(1),
    fontSize: hp(2),
  },
});
