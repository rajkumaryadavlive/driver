import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/routes/AppNavigator';
export default function App() {
  return (
          <Provider store={store}>
               <AppNavigator />
          </Provider> 
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
