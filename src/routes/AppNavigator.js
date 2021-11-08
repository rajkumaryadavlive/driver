import React from "react";
import RootStack from "./RootStack";
import DrawerStack from "./DrawerStack";
import { useSelector } from "react-redux";
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';

const AppNavigator=()=>{
    const auth=useSelector((state)=>state.auth);
     
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'rgb(255, 45, 85)',
          background:'white'
        },
      };



    return(
     <NavigationContainer theme={MyTheme}>
        { 
            auth?<DrawerStack />:
            <RootStack />
           }
    </NavigationContainer>
          
    );
}
export default AppNavigator;