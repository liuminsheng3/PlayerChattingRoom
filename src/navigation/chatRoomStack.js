import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FriendsScreen } from "../screens"
import { ChatRoomScreen } from "../screens";
import { UsersScreen } from "../screens";

import { View,Text,Image,Button, Pressable, useWindowDimensions } from "react-native";
import { FONTS } from "../constants";
import { Feather } from '@expo/vector-icons';


const Stack = createStackNavigator();

const chatRoomStack = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="Firends"
                component={FriendsScreen}
                options={{
                    headerTitle:ChatListTitle
                }}
            />
            <Stack.Screen
                name="Users"
                component={UsersScreen}
                options={{
                    headerShown:true,
                    title:"Users",
                    headerBackTitleVisible:true
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerShown:true,
                    headerBackVisible:'headerLeft',
                    headerBackTitleVisible:false,

                    headerTitle: ChatRoomHeader,
                }}
            />
        </Stack.Navigator>
    )
}

const ChatListTitle = (props)=>{
    const {width} = useWindowDimensions();
    const navigation = useNavigation();
    return(
        <View 
        style={{
            width:"100%",
            alignItems:'center',
            justifyContent:'space-between', 
            flexDirection:'row'
        }}>
            <View
                style={{width:80}}
            >
                <Image 
                style={{
                    height:30,
                    width:30,
                    borderRadius:15,
                }}
                source={{uri:"https://static-cdn.jtvnw.net/jtv_user_pictures/ced31775-5eb0-458a-b3c2-bd94b3587ec1-profile_image-50x50.png"}}/>
            </View>

            <Text
                style={FONTS.body3}
            >Chat Room Header</Text>
            <View
                style={{
                    flexDirection:'row', 
                    width:80,
                    justifyContent:"space-evenly"
                }}
            >
            <Pressable
                onPress={()=>console.log("13")}
            >
                <Feather name="camera" size={24} color="black" />
            </Pressable>
            <Pressable
                onPress={()=>{
                    console.log('sth');
                    navigation.navigate('Users');
                }}
            >
                <Feather name="edit-2" size={24} color="black" />
            </Pressable>
            </View>
        </View>
    )
}
const ChatRoomHeader = (props)=>{
    const {width} = useWindowDimensions();
    return(
        <View 
        style={{
            width:width-46,
            alignItems:'center',
            justifyContent:'space-between', 
            flexDirection:'row',
            position:'absolute',
            left:-width/2+40,
            paddingHorizontal:10
        }}>
            <View
                style={{
                flexDirection:"row",
                }}
            >
                <Image 
                    style={{
                        height:30,
                        width:30,
                        borderRadius:15,
                        marginRight:10
    
                    }}
                    source={{uri:"https://static-cdn.jtvnw.net/jtv_user_pictures/ced31775-5eb0-458a-b3c2-bd94b3587ec1-profile_image-50x50.png"}}
                />
                <Text
                    style={[FONTS.body3,{paddingTop:5}]}
                >{props.children}</Text>
            </View>


            <View
                style={{
                    flexDirection:'row', 
                    width:80,
                    justifyContent:"space-evenly"
                }}
            >
            <Pressable
                onPress={()=>console.log("camera")}
            >
                <Feather name="camera" size={24} color="black" />
            </Pressable>
            <Pressable
                onPress={()=>{

                }}
            >
                <Feather name="edit-2" size={24} color="black" />
            </Pressable>

            
            </View>
        </View>
    )
}


export default chatRoomStack;