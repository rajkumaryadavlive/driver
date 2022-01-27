import React, {useState, useEffect, useRef} from 'react';
import {View, Image, PermissionsAndroid} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import io from 'socket.io-client';

import profileApi from '../../api/profile';
import driverApi from '../../api/driver';
import useAuth from '../../hooks/useAuth';

import Screen from '../../components/Screen';
import styles from './style';
import GOOGLE_API_KEY from '../../constants/apikey';
import {hp, wp} from '../../constants/dimensions';
import {IdealDriver, Buttons} from './IdealDriver';
import {InitialStep, InitialButton} from './InitialStep';
import {NewJobTopContainer, NewJobBottomContainer} from './NewJob';
import {
  OrderStartedTopContainer,
  OrderStartedBottomContainer,
} from './OrderStarted';
import {OnARideTopContainer, OnARideBottomContainer} from './OnARide';

const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = 0.0061;
const latlng = {
  latitude: 18.5868,
  longitude: 73.813,
};
const userLoc = {
  latitude: 18.5842,
  longitude: 73.8226,
};

const CustomMap = ({route, navigation, openDrawer}) => {
  const mapView = useRef();

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [switchValue, setSwitchValue] = useState();

  const [userStatus, setUserStatus] = useState('initial');
  const [onARideStatus, setonARideStatus] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [routeArr, setRouteArr] = useState([]);
  const [orderData, setOrderData] = useState({});
  const [driverId, setDriverId] = useState(null);
  const [pickupLocation, setPickupLocation] = useState({
    latitude: 18.5842,
    longitude: 73.8226,
  });
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 18.5842,
    longitude: 73.8226,
  });

  const socket = useRef();
  const SOCKET_URL = 'http://3.110.149.0:3000';

  const {token} = useAuth();

  useEffect(() => {
    getUser();
    getStatus(token);
  }, []);

  useEffect(() => {
    socket.current = io(SOCKET_URL, {
      transports: ['websocket'],
      jsonp: false,
      query: `id=${driverId}`,
    });
    socket.current.on('connect', () => {
      console.log('Connected');
      socket.current.emit('join', {
        id: driverId,
      });
      socket.current.on('order-pickup-request', async function (data) {
        let destinationAddr = JSON.parse(data.destinationAddress);
        let pickupAddr = JSON.parse(data.pickupAddress);

        let newOrderData = {
          ...data,
          destinationAddress: destinationAddr,
          pickupAddress: pickupAddr,
        };
        console.log('====================================');
        console.log(newOrderData, 'this is from useEffect');
        console.log('====================================');
        setOrderData({...orderData, newOrderData});
        setUserStatus('ready');
        setPickupLocation({
          latitude: newOrderData.lat,
          longitude: newOrderData.long,
        });
        setDestinationLocation({
          latitude: newOrderData.destinationLat,
          longitude: newOrderData.destinationLong,
        });
      });
      socket.current.on('order-status', async function (data) {
        console.log(data, 'This is data from order-status');
        if (data.data.status === 'PickedUp') {
          setUserStatus('onARide');
        }
      });
    });
  }, []);

  const setDriverLocation = async () => {
    let t;
    try {
      const result = await driverApi.updateDriverLocation(region, token);
      if (!result.ok) {
        console.log('Location not updated', result.data);
        return;
      }
      console.log('Updated driver location');
      setUserStatus('');
      t = setInterval(() => {
        getCurrentPos();
      }, 5000);
    } catch (error) {
      clearInterval(t);
      console.log(error, 'Error from update driver location');
    }
  };

  const getStatus = async token => {
    const result = await profileApi.getDriverStatus(token);
    console.log('this is result from status ', result.data.data._id);
    const dId = result.data.data._id;
    setDriverId(dId);
    const status = result.data.data.status;
    const newTrip = result.data.data.onRide;
    console.log('====================================');
    console.log(newTrip);
    console.log('====================================');
    setSwitchValue(status === 'active' ? true : false);
    // setUserStatus(status === 'active' ? '' : 'initial');
    if (!newTrip) setUserStatus('initial');
  };

  const getCurrentPos = async () => {
    try {
      if (PermissionsAndroid.RESULTS.GRANTED === 'granted') {
        Geolocation.getCurrentPosition(
          location => {
            let latitude = location.coords.latitude;
            let longitude = location.coords.longitude;

            socket.current.emit('update-driver-location', {
              lat: latitude,
              long: longitude,
              id: driverId,
            });
          },
          error => {
            console.log(
              error.code,
              error.message,
              'this is from catch code and msg',
            );
          },
          {
            enableHighAccuracy: true,
          },
        );
      } else {
        console.log('Permission not granted');
      }
    } catch (error) {
      console.log('====================================');
      console.log('Error while sending location', error);
      console.log('====================================');
    }
  };

  const getUser = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Please allow app to access location',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position, 'This is position from getUser');

            setRegion({
              ...region,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(
              error.code,
              error.message,
              'this is from catch code and msg',
            );
          },
          {
            enableHighAccuracy: true,
          },
        );
      } else {
        console.log('Permission not granted');
      }
    } catch (error) {
      console.log('Error while getting location');
    }

    // mapView.current.animateToRegion(region, 1000);
  };

  const zoomIn = () => {
    let newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    // mapView.current.animateToRegion(newRegion, 1000);
  };
  const zoomOut = () => {
    let newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    // mapView.current.animateToRegion(newRegion, 1000);
  };

  let userLocation = {
    latitude: region.latitude,
    longitude: region.longitude,
  };

  const fitToMarkers = (coords, timerId, spaceNum) => {
    mapView.current.fitToCoordinates(coords, {
      edgePadding: {
        top: spaceNum,
        bottom: spaceNum,
        left: spaceNum,
        right: spaceNum,
      },
      animated: true,
    });
    clearTimeout(timerId);
  };

  const goToOrderStarted = () => {
    console.log('====================================');
    console.log(orderData.newOrderData.orderId, 'this is from gotoOrderSt');
    console.log('====================================');
    // socket.current.on("order-pickup-request", async function (data) {
    //   console.log("====================================");
    //   console.log(data, "This is the data from gotoOrderStarted");
    //   console.log("====================================");
    // });
    socket.current.emit('accept-pickup-request', {
      driverId,
      orderId: orderData.newOrderData.orderId,
    });
    setUserStatus('orderStarted');
  };

  const mapContent = () => {
    switch (userStatus) {
      case '':
        return ideal();
      case 'initial':
        return initial();
      case 'ready':
        return userReady();
      case 'orderStarted':
        return orderStarted();
      case 'arrived':
        return arrival();
      case 'onARide':
        return onARide();
    }
  };

  //Function to search for a customer.
  const searchCustomer = async val => {
    setSwitchValue(val);
    if (val) {
      const result = await profileApi.updateDriverStatus(
        driverId,
        'active',
        token,
      );
      console.log('====================================');
      console.log('This is switch value', result.data);
      console.log('====================================');
    } else {
      const result = await profileApi.updateDriverStatus(
        driverId,
        'inactive',
        token,
      );
      console.log('====================================');
      console.log(result.data);
      console.log('====================================');
      setUserStatus('');
    }
  };

  const swipeToArrive = () => {
    setUserStatus('arrived');
  };

  const swipeToArriveToDestination = () => {
    setonARideStatus('swiped');
    socket.current.emit('Update-order-status', {
      driverId,
      orderId: orderData.newOrderData.orderId,
      type: 'driver',
      status: 'OnTheWayToDelivery',
    });
  };

  const onSwipeToFinishTrip = () => {
    socket.current.emit('Update-order-status', {
      driverId,
      orderId: orderData.newOrderData.orderId,
      type: 'driver',
      status: 'Delivered',
    });
    navigation.navigate('Receipt');
  };

  const initial = () => {
    return <InitialStep backButton={() => navigation.goBack()} />;
  };

  const ideal = () => {
    return (
      <IdealDriver
        sideMenuOpen={openDrawer}
        onSwitchValueChange={val => searchCustomer(val)}
        switchValue={switchValue}
      />
    );
  };

  const userReady = () => {
    let Markers = [userLocation, pickupLocation];
    let timer = setTimeout(() => fitToMarkers(Markers, timer, 10), 2000);

    return (
      <>
        <NewJobTopContainer
          onPressReject={() => setUserStatus('')}
          sideMenuOpen={openDrawer}
        />
        <NewJobBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          onPressAccept={goToOrderStarted}
          duration={duration}
          distance={distance}
        />
      </>
    );
  };
  const orderStarted = () => {
    let Markers = [userLocation, pickupLocation];
    let timer = setTimeout(() => fitToMarkers(Markers, timer, 80), 2000);
    return (
      <>
        <OrderStartedTopContainer
          duration={duration}
          sideMenuOpen={openDrawer}
          driverStatus="Order Started"
        />
        <OrderStartedBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeToArrive={swipeToArrive}
          driverLocation={userLocation}
          custLocation={pickupLocation}
          waypoints={routeArr}
        />
      </>
    );
  };

  const arrival = () => {
    return (
      <>
        <OrderStartedTopContainer
          duration={duration}
          sideMenuOpen={openDrawer}
          driverStatus="Arrival"
        />
        <OrderStartedBottomContainer
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeforArrival={() => setUserStatus('onARide')}
          driverLocation={userLocation}
          custLocation={destinationLocation}
          // custLocation={latlng}
          waypoints={routeArr}
          driverStatus="arrival"
        />
      </>
    );
  };

  const onARide = () => {
    return (
      <>
        <OnARideTopContainer
          status={onARideStatus}
          sideMenuOpen={openDrawer}
          onSwitchValueChange={val => searchCustomer(val)}
          switchValue={switchValue}
        />
        <OnARideBottomContainer
          status={onARideStatus}
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          getUserLocation={getUser}
          onSwipeToArrive={swipeToArriveToDestination}
          onFinishTrip={onSwipeToFinishTrip}
          driverLocation={userLocation}
          custLocation={pickupLocation}
          waypoints={routeArr}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        ref={mapView}
        showsUserLocation={true}
        showsMyLocationButton={false}
        followsUserLocation={true}
        loadingEnabled>
        <MapViewDirections
          lineDashPattern={[0]}
          origin={userLocation}
          destination={
            (userStatus !== '') & (userStatus !== 'initial')
              ? pickupLocation
              : null
          }
          apikey={GOOGLE_API_KEY}
          strokeWidth={userStatus === 'orderStarted' ? 4 : 0}
          strokeColor="blue"
          optimizeWaypoints={true}
          onReady={result => {
            // console.log(result);
            setDuration(result.duration);
            setDistance(result.distance);
            setRouteArr([...result.coordinates]);
          }}
        />

        {userStatus !== '' && userStatus !== 'initial' ? (
          <Marker coordinate={pickupLocation}>
            <View
              style={{
                height: hp(6),
                width: hp(6),
                borderRadius: hp(3),
              }}>
              <Image
                source={require('../../assets/images/user.png')}
                style={styles.image}
              />
            </View>
          </Marker>
        ) : null}
      </MapView>
      <View
        style={
          userStatus === ''
            ? styles.topContainer
            : [styles.topContainer, {height: hp(10)}]
        }
      />
      {userStatus === '' && (
        <Buttons
          onPressZoomIn={zoomIn}
          onPressZoomOut={zoomOut}
          onPressUserLocation={getUser}
          // updateDriverLocation={setDriverLocation}
        />
      )}
      {userStatus === 'initial' && (
        <InitialButton updateDriverLocation={setDriverLocation} />
      )}
      {mapContent()}
    </View>
  );
};

export default CustomMap;
