import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";

const styles = StyleSheet.create({
  button: {
    marginTop: hp(3),
  },
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#364b5f",
    paddingLeft: wp(12),
    paddingRight: wp(12),
  },
  fieldName: { marginTop: hp(1), marginBottom: hp(0.5), fontFamily: "segoeui" },
  header: {
    fontSize: 24,
    color: "black",
    alignSelf: "center",
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "white",
    padding: wp(1.5),
    borderRadius: wp(50),
    elevation: 2,
  },
  imageView: {
    padding: wp(1),
    borderWidth: 2,
    borderRadius: 100,
    marginTop: hp(2),
    alignSelf: "center",
    borderColor: colors.primaryColor,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.primaryColor,
    borderRadius: 30,
    height: hp(7),
    justifyContent: "center",
    marginBottom: hp(1),
  },
  profileImage: {
    width: wp(33),
    height: wp(33),
    borderRadius: wp(60),
  },
  textInput: {
    height: hp(7),
    width: "100%",
    color: "black",
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: wp(50),
    padding: hp(2),
  },
});

export default styles;
