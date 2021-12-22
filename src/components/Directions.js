import React from "react";
import { View, Button } from "react-native";
import getDirections from "react-native-google-maps-directions";

import BottomButtons from "./BottomButtons";

const GmapsDirections = ({ source, destination, coords }) => {
  console.log("This is from gmaps");
  console.log(source, destination);
  console.log(coords);

  const handleGetDirections = () => {
    const data = {
      source: source,
      destination: destination,
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        // {
        //   key: "dir_action",
        //   value: "navigate", // this instantly initializes navigation using the given travel mode
        // },
      ],
      waypoints: coords,
    };

    getDirections(data);
  };

  return (
    <View>
      <BottomButtons
        iconName="directions"
        fontAwesome
        onPress={handleGetDirections}
      />
    </View>
  );
};

export default GmapsDirections;
