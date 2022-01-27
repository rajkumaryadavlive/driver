import {StyleSheet, Platform} from 'react-native';
import * as colors from '../../constants/colors';
import {hp, wp} from '../../constants/dimensions';

const styles = StyleSheet.create({
  button: {
    marginTop: hp(3),
    width: wp(50),
    backgroundColor: colors.themeGreen,
  },
  callingCodeContainer: {
    width: wp(80),
    backgroundColor: '#e9f6ff',
    marginVertical: hp(1),
    height: hp(6.5),
    borderRadius: hp(10),
    justifyContent: 'center',
  },
  callingCodeContent: {
    width: wp(60),
    marginLeft: wp(9),
  },

  countryName: {color: 'black', marginLeft: wp(9)},
  countryName2: {color: 'grey', marginLeft: wp(9)},

  fieldName: {
    marginTop: hp(1),
    marginBottom: hp(0.5),
    fontFamily: 'calibri',
    fontWeight: '700',
  },
  header: {
    fontSize: hp(3),
    color: colors.themeGreen,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
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
    alignSelf: 'center',
    // borderColor: colors.FONT_GREY_STONE,
  },
  modal: {
    position: 'absolute',
    top: '10%',
    height: '100%',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    width: wp(60),
    color: 'black',
    borderRadius: wp(50),
    padding: hp(1),
    marginLeft: hp(4),
    justifyContent: 'center',
  },
  textInputContainer: {
    backgroundColor: '#e9f6ff',
    marginVertical: hp(1),
    width: wp(80),
  },
});

export default styles;
