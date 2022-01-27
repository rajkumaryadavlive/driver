import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../constants/colors';
import {hp, wp} from '../../constants/dimensions';

const styles = StyleSheet.create({
  button: {
    width: wp('40%'),
    padding: wp(1.5),
    backgroundColor: colors.primaryColor,
  },
  bottomContainer: {
    alignItems: 'center',
  },

  container: {
    padding: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(35),
  },

  forgotPasswordText: {
    textAlign: 'right',
    fontSize: hp(2),
    color: '#bbc7e9',
  },
  heading: {
    fontSize: hp(2.7),
  },
  headingContainer: {
    marginLeft: wp(12),
    marginTop: hp(5),
  },

  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: wp(30),
    height: wp(30),
    marginTop: hp(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noteText: {
    textAlign: 'center',
    width: wp('80%'),
  },

  signUpButton: {
    width: wp('40%'),
    padding: wp(1.5),
    marginTop: hp(1),
    backgroundColor: colors.primaryColor,
  },

  textInput: {
    width: wp(60),
    color: 'black',
    borderRadius: wp(50),
    padding: hp(1),
    marginLeft: hp(4),
    // backgroundColor: "grey",
    fontSize: hp(2.5),
    justifyContent: 'center',
  },
  textInputContainer: {
    marginVertical: hp(1),
    width: wp(80),
    borderColor: '#97a9de',
    borderWidth: 1,
  },
});

export default styles;
