import React,{useEffect,useState} from "react";
import {View, Text, StyleSheet,Image, FlatList, Pressable} from 'react-native';
import { COLORS, FONTS } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import data from "../../assets/dummyData/user"
const FollowScreen = ()=> {

  const insets = useSafeAreaInsets();
  const [user, setUser] = useState(data);

  return (
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.black,
      }}
    >
      <View
        style={{
          flex:1,
          marginTop:insets.top+10,
        }}
      > 
        <Text
          style={{...FONTS.h1, color:COLORS.white, alignSelf:'center'}}
        >Followed</Text>

        <FlatList
          data= {user.filter(u=>u.user.follow)}
          keyExtractor={item=>item.user.id}
          renderItem={({item})=>{
            return (
              <View
                style={{
                  flex:1,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  margin:10,
                  opacity:0.9,
                  borderRadius:20
                }}
              >
                <View
                  style={{
                    flex:1,
                    flexDirection:'row',
                    alignItems:'center',
                    maxWidth:"80%"
                  }}
                >
                  <Image
                    style={{
                      height:50,
                      width:50,
                      borderRadius:25,
                    }}
                    source={{uri:item.user.imageUri}}
                  />
                  <Text
                    style={{
                      ...FONTS.h3,
                      color:COLORS.white,
                      paddingHorizontal:10
                    }}
                  >{item.user.name}</Text>
                </View>
                <View
                  style={{
                    marginRight:15,
                    borderRadius:20,
                    width:100,
                    backgroundColor:'red',
                    alignItems:'center'

                  }}
                >
                  <Pressable
                    onPress={()=>{
                      item.user.follow=false;
                      setUser([...user,item])
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body3,
                        color:'white',
                        paddingVertical:3
                      
                      }}
                    >{item.user.follow?'Followed':'unFollow'}</Text>
                  </Pressable>
                </View>
              </View> 
            )
          }}
        />

      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
export default FollowScreen;