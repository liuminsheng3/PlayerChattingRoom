import React from "react";
import {View, Text, StyleSheet,Button, ScrollView} from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
  NavigationContainer,
  
} from '@react-navigation/native';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import ForthScreen from './ForthScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";

const FirstScreen = ({navigation})=>{
const tab = createMaterialTopTabNavigator();

  return <View style={{flex:1}}>
  <SafeAreaView >
    <ScrollView
      horizontal
      style={{borderWidth:1, borderColor:'red'}}
    >
      <Button title="tab 1" /> 
      <Button title="tab 2"/>
    </ScrollView>
    <ScrollView
      horizontal
      style={{borderWidth:1, borderColor:'red'}}
    >
      <Button  title="subtab 1" /> 
      <Button title="subtab 2"/>
      <Button title="subtab 3"/>

    </ScrollView>
    </SafeAreaView>
  {/* <View
    style={{borderWidth:1, margin:10,flex:1}}
  >
  
      <tab.Navigator screenOptions={{headerShow:false}}>
        <tab.Screen name="Second" component={SecondScreen}/>
        <tab.Screen name="Third" component={ThirdScreen}/>

      </tab.Navigator>
    
  </View> */}
  </View>
}

export default FirstScreen;