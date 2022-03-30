import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens"
import { FollowScreen } from "../screens"
import { ProfileScreen } from "../screens"
import chatRoomStack from "./chatRoomStack";
import { COLORS, icons } from "../constants"
import { TabIcon } from "../components"
import TopTabs from "./topTabs";
import { LiveStreamScreen } from "../screens";
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.black,
                    borderTopColor: "transparent",
                    height: 80,
                    paddingBottom:30
                },
            }}
        >           
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                        />
                    )
                }}
            />

            
            <Tab.Screen
                name="Live"
                component={LiveStreamScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.play_button}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Follow"
                component={FollowScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.follow}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="chatRooms"
                component={chatRoomStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.chat}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                        />
                    )
                }}
            />

          
        </Tab.Navigator>
    )
}

export default Tabs;