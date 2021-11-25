import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/dimensions";
import * as colors from "../../constants/colors";

export default StyleSheet.create({
  amountDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  amountText: {
    fontSize: 19,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  date: {
    color: "#04E0E5",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  khr: {
    color: colors.primaryColor,
    marginLeft: 10,
    fontSize: 23,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: "segoeui",
  },
  withDrawLayout: {
    elevation: 5,
    width: wp("95%"),
    height: hp("15%"),
    backgroundColor: "#fff",
  },
});
