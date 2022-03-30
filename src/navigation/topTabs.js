import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BlurView } from 'expo-blur';
import { Home } from "../screens"
import { MovieDetail } from "../screens"
import { FollowScreen } from "../screens"
import { FriendsScreen } from "../screens"
import { LiveStreamScreen } from "../screens"
import { RadioScreen } from "../screens";
import { ProfileScreen } from "../screens"
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import { COLORS, icons } from "../constants"

import { TabIcon } from "../components"
import { TabExpoIcon } from "../components/TabIcon";


const TopTab = createMaterialTopTabNavigator();

const TopTabs = ()=>{
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="live" component={LiveStreamScreen} />
      <TopTab.Screen name="radio" component={RadioScreen} />
    </TopTab.Navigator>
  )
}

export default TopTabs;