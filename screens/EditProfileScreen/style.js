import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  contentContainer: {
    margin: wp(1),
    elevation: 1,
    borderRadius: wp(1),
  },
  fieldsTitle: {
    marginTop: 5,
    marginBottom: 3,
    // fontFamily: "segoeui",
    color: colors.darkGrey,
  },
  idComp: {
    height: hp(12),
    width: wp(30),
    borderWidth: wp(0.5),
    borderColor: colors.primaryColor,
    borderRadius: wp(2),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(1),
  },
  idIconContainer: {
    position: "absolute",
    bottom: -2,
    right: -5,
    backgroundColor: colors.whiteColor,
    borderRadius: hp(1),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageView: {
    padding: wp(1),
    borderWidth: 2,
    borderRadius: wp(20),
    alignSelf: "center",
    borderColor: colors.primaryColor,
    marginTop: hp(3),
  },

  iconContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "white",
    padding: wp(2),
    borderRadius: wp(20),
    elevation: 1,
  },
  photoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: wp(75),
  },
  pickerContainer: {
    borderWidth: wp(0.5),
    borderColor: colors.primaryColor,
    borderRadius: wp(10),
    height: hp(6.5),
    justifyContent: "center",
    width: wp(75),
    padding: hp(1.5),
  },
  profileImage: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(17),
  },
  secondContainerTitle: {
    marginLeft: wp(12),
    fontWeight: "700",
    marginTop: hp(2),
  },
  submitButton: {
    width: wp(40),
  },
  textInput: {
    height: hp(6.5),
    width: wp(75),
    color: colors.blackColor,
    borderColor: colors.primaryColor,
    borderWidth: wp(0.5),
    borderRadius: wp(7),
    paddingLeft: wp(5),
    marginBottom: wp(1),
  },
  titleAndFieldsContainer: {
    marginLeft: wp(12),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
});
