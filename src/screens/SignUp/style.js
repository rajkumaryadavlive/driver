import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";
import * as fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#364b5f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  regForm: {
    alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    color: "black",
    paddingBottom: 10,
    alignSelf: "center",
    marginBottom: 40,
  },
  imageView: {
    padding: 3,
    border: "2px solid blue",
    borderRadius: "50%",
    marginBottom: 40,
    width: "auto",
    alignSelf: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: "50%",
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "black",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
});

export default styles;
