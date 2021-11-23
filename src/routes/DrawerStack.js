import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Home,SideMenu
  } from "../screens";
const Drawer=createDrawerNavigator();


const DrawerStack=()=>{
    return(
        <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>

            <Drawer.Screen options={{title:''}} name="Home" component={Home} />
        
        </Drawer.Navigator>    
    );
}
export default DrawerStack;