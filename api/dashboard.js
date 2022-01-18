import apiClient from "./client";

const getDashBoardData = (userToken) =>
  apiClient.get(
    "driver/dashboardData",
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

export default {
  getDashBoardData,
};
