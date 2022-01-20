import apiClient from "./client";

const updateDriverLocation = (location, userToken) =>
  apiClient.post(
    "driver/updateDriverLocationbyId",
    {
      lat: location.latitude,
      long: location.longitude,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

const updateDriverOrderStatus = (data, userToken) =>
  apiClient.post(
    "driver/updateOrderStatus",
    {
      id: data.driverId,
      status: data.status,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

export default {
  updateDriverLocation,
  updateDriverOrderStatus,
};
