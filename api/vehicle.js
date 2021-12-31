import apiClient from "./client";

const getVehicleTypeList = (userToken) =>
  apiClient.get(
    "driver/vehicleList?columnName=name&orderBy=asc&search=&skip=0&limit=2",
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

export default {
  getVehicleTypeList,
};
