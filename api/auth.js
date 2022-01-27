import {Platform} from 'react-native';
import apiClient from './client';

const deviceType = Platform.OS;

const login = (data, deviceToken) =>
  apiClient.post('driverauth/login', {
    ...data,
    deviceToken,
    deviceType,
  });

const signUp = (data, deviceToken) =>
  apiClient.post('userauth/signUpDriver', {
    ...data,
    deviceToken,
    deviceType,
  });

const verifyOTP = (phoneNumber, otpNumber) =>
  apiClient.post('driverauth/verifyOTP', {
    phone: phoneNumber,
    otp: otpNumber,
  });

export default {
  login,
  verifyOTP,
  signUp,
};
