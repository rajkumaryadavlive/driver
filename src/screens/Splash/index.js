import React from "react";
import { View, Image, AsyncStorage, NativeModules, Alert, BackHandler } from "react-native";
import styles from "./style";
import { connect } from "react-redux";

const Splash =()=> {
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "splash",
            isStatic: true,
            resizeMode: "contain"
          }}
        />
      </View>
    );

}

export default Splash;

