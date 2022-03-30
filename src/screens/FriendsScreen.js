import React from "react";
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES } from "../constants";
import MessageTemplate from "../components/chatRoom/MessageTemplate";
import data from '../../assets/dummyData/user'
const FriendsScreen = ({navigation})=> {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex:1,
        // paddingTop: insets.top,
        backgroundColor:COLORS.c,

        }}
    
    >
      <FlatList 
          data={data}
          keyExtractor={item=>item.user.id}
          renderItem={({item})=>{
            return (
              <TouchableOpacity
                onPress={()=>{navigation.navigate('ChatRoom',{"id":item.user.id})}}
              >
                <MessageTemplate
                  name={item.user.name}
                  text={item.user.content}
                  imageUri = {item.user.imageUri}
                />
              </TouchableOpacity>
            )
          }}
      >

        
      </FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding:10,

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
export default FriendsScreen;