import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";
import { hp, wp } from "../../constants/dimensions";

const styles = StyleSheet.create({
  button: {
    marginTop: hp(3),
    width: wp(50),
    backgroundColor: colors.themeGreen,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#364b5f",
    alignItems: "center",
  },
  fieldName: {
    marginTop: hp(1),
    marginBottom: hp(0.5),
    fontFamily: "calibri",
    fontWeight: "700",
  },
  header: {
    fontSize: hp(3),
    color: colors.themeGreen,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: hp(2),
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
    width: wp(80),
    height: wp(33),
    // borderWidth: 1,
    marginTop: hp(2),
    alignSelf: "center",
    // borderColor: colors.FONT_GREY_STONE,
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },
  textInput: {
    height: hp(6.5),
    width: wp(80),
    color: "black",
    borderColor: colors.FONT_GREY,
    borderWidth: 2,
    borderRadius: wp(50),
    paddingLeft: hp(4),
    justifyContent: "center",
  },
});

export default styles;
