import React from 'react';
import { MovieDetail } from "./src/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/navigation/tabs";
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {GameVideoDetail} from "./src/screens";

const Stack = createStackNavigator();
const RootApp = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold" : require("./assets/fonts/Roboto-Bold.ttf"),
    
    "Roboto-Regular" : require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black" : require("./assets/fonts/Roboto-Black.ttf"),

  });
    if (!fontsLoaded) {
      return <AppLoading />;
  }else{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

        }}
        initialRouteName={'Main'}
      >
        <Stack.Screen
          name="Main"
          component={Tabs}
        />

        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
        />
        <Stack.Screen
          name = "GameVideoDetail"
          component={GameVideoDetail}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )}
}




export default RootApp;