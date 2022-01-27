import {Platform} from 'react-native';
import apiClient from './client';

const deviceType = Platform.OS;

const getDriverDetail = userToken =>
  apiClient.get(
    'driver/getDriverDetail',
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );

const editProfileDriver = (listing, userToken, deviceToken) => {
  const data = new FormData();
  data.append('name', listing.name);
  data.append('phone', listing.phone);
  data.append('email', listing.email);
  data.append('dob', listing.dob);
  data.append('insuranceStartDate', listing.newInsStrDate);
  data.append('insuranceEndDate', listing.newInsEndDate);
  data.append('licenseNumber', listing.licenseNumber);
  data.append('vehicleTypeId', listing.vehicleTypeId);
  data.append('vehicleNumber', listing.vehiclePlateNumber);
  data.append('vehicleName', listing.vehicleName);
  data.append('colour', listing.colour);
  data.append('fuelType', listing.fuelType);
  data.append('insuranceNumber', listing.insuranceNumber);
  data.append('mfgYear', listing.mfgYear);
  data.append('modelName', listing.vehicleModel);
  data.append('vehicleManufacturer', listing.vehicleManufacturer);
  data.append('gender', listing.gender);
  data.append('deviceToken', deviceToken);
  data.append('deviceType', deviceType);

  data.append('profileimage', {
    name: 'profileimage.jpg',
    type: 'image/jpeg',
    uri: listing.profileimage,
  });
  data.append('frontimage', {
    name: 'frontimage.jpg',
    type: 'image/jpeg',
    uri: listing.frontimage,
  });
  data.append('backimage', {
    name: 'backimage.jpg',
    type: 'image/jpeg',
    uri: listing.backimage,
  });

  listing.pucImages.forEach((image, index) =>
    data.append('pucImages', {
      name: image.filename ? image.filename : `pucImage${index}.jpg`,
      type: 'image/jpeg',

      uri: image.path,
    }),
  );
  listing.insuranceImages.forEach(image =>
    data.append('insuranceImages', {
      name: image.filename ? image.filename : 'insuranceimage.jpg',
      type: 'image/jpeg',

      uri: image.path,
    }),
  );
  listing.vehicleImages.forEach(image =>
    data.append('vehicleImages', {
      name: image.filename ? image.filename : 'vehicleImage.jpg',

      type: 'image/jpeg',
      uri: image.path,
    }),
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  return apiClient.post('driver/editDriverProfile', data, config);
};

const updateDriverStatus = (driverId, status, userToken) =>
  apiClient.post(
    'driver/activeDeactiveDriver',
    {
      userId: driverId,
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );

const getDriverStatus = userToken =>
  apiClient.get(
    'driver/getDriverStatus',
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );

export default {
  getDriverDetail,
  editProfileDriver,
  getDriverStatus,
  updateDriverStatus,
};
