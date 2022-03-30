import React from "react";
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS,FONTS } from "../../constants";
import { ChatRoom, ChatRoomUser ,User as UserTable} from "../../models";
import {Auth} from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import {DataStore} from "@aws-amplify/datastore"


const UserItem = ({user}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const num = Math.round(Math.random()*10);

  const onPress = async ()=>{
    //create a chatroom
    const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0}));
    //connect authenticated user with the chatroom
    const authUser = await Auth.currentAuthenticatedUser();
    const dbAuthUser=await DataStore.query(UserTable, authUser.attributes.sub);
    try{
      await DataStore.save(new ChatRoomUser({
        user: dbAuthUser,
        chatRoom: newChatRoom,
      }));
    }catch(e){
      console.log(e);
    }



    //connect click user with the chatroom
    await DataStore.save(new ChatRoomUser({
      user,
      chatroom: newChatRoom
    }));

    navigation.navigate('ChatRoom', {id: newChatRoom.id});
  }

  return (
    
    <Pressable 
      onPress={onPress}
      style = {styles.container}
    >
    <Image
        style={styles.image}
          source={{uri: user.imageUrl}}
    />
    
      <View 
      style={{
        flexDirection:'column',
        flex:1, 
        justifyContent:"center",
        marginHorizontal:10,
        }}
      >
        <View 
        style={{
          justifyContent:'space-between' ,
          flexDirection:'row'
          }}
        >
          <Text 
          style={[
            FONTS.h3,
            {color:COLORS.black }
            ]}
          >
            {user.name}
          </Text>
          
        </View>
        
    </View>
  </Pressable>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding:10,
    backgroundColor:COLORS.white,

  },
  
  image:{
    height: 46,
    width: 46,
    marginRight:5,
    borderRadius:23
  },
  name:{

  },
  content:{

  },
  time:{
    
  }


});

export default UserItem


