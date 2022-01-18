import { Platform } from "react-native";
import apiClient from "./client";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjBkZDlhYjdjZjg0NDUzMjBlZDRjMiIsInVzZXJSb2xlIjoidXNlciJ9LCJpYXQiOjE2Mzg5ODEwNTh9.Y6m9mLompEj9sR1odwpQNiBqwuaHNKqnVTL4qtVfbC4";

const deviceType = Platform.OS;

const login = (data) =>
  apiClient.post("driverauth/login", {
    ...data,
    deviceToken: token,
    deviceType,
  });

const signUp = (data) =>
  apiClient.post("userauth/signUpDriver", {
    ...data,
    deviceToken: token,
    deviceType,
  });

const verifyOTP = (phoneNumber, otpNumber) =>
  apiClient.post("driverauth/verifyOTP", {
    phone: phoneNumber,
    otp: otpNumber,
  });

export default {
  login,
  verifyOTP,
  signUp,
};
