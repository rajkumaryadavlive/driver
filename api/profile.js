import { Platform } from "react-native";
import apiClient from "./client";

const deviceType = Platform.OS;
const deviceToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjBkZDlhYjdjZjg0NDUzMjBlZDRjMiIsInVzZXJSb2xlIjoidXNlciJ9LCJpYXQiOjE2Mzg5ODEwNTh9.Y6m9mLompEj9sR1odwpQNiBqwuaHNKqnVTL4qtVfbC4";

const getDriverDetail = (userToken) =>
  apiClient.get(
    "driver/getDriverDetail",
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

const editProfileDriver = (data) =>
  apiClient.post("driver/DriverProfile", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    dob: data.dob,
    deviceType,
    gender: data.gender,
    deviceToken,
    licenseNumber: data.licenseNumber,
    vehicleTypeId,
    vehicleName,
    vehicleNumber,
    colour,
    fuelType,
    insuranceEndDate,
    insuranceNumber,
    insuranceStartDate,
    mfgYear,
    modelName,
    vehicleManufacturer,
    profileimage,
    vehicleImages,
    pucImages,
    insuranceImages,
  });

export default {
  getDriverDetail,
  editProfileDriver,
};
