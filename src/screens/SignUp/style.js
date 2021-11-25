import { StyleSheet, Platform } from "react-native";
import * as colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#364b5f",
    paddingLeft: 50,
    paddingRight: 50,
  },
  header: {
    fontSize: 24,
    color: "black",
    paddingBottom: 10,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 50,
    elevation: 2,
  },
  imageView: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: "center",
    borderColor: colors.primaryColor,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.primaryColor,
    borderRadius: 30,
    height: 40,
    justifyContent: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textInput: {
    height: 40,
    width: "100%",
    color: "black",
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
});

export default styles;
