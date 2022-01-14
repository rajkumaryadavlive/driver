import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    marginTop: hp(3),
    fontWeight: "700",
  },
  imageContainer: {
    width: wp(70),
    height: hp(30),
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    marginTop: hp(5),
    textAlign: "center",
    width: wp(80),
  },
});
