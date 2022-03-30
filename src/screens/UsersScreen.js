import React,{useState, useEffect} from "react";
import {View, StyleSheet,Text, FlatList, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES } from "../constants";
import userDummyData from "../../assets/dummyData/data";
import { UserItem} from "../components";

const UsersScreen = ({navigation})=> {
  const insets = useSafeAreaInsets();
  const [users, setUsers] = useState([]);

  return (
    <View
      style={{
        flex:1,
        // paddingTop: insets.top,
        backgroundColor:COLORS.c,

        }}
    
    >
      {/* <TouchableOpacity
        onPress={async()=>{
          fatchUser();
        }}
      >
        <Text>Check Users</Text>
      </TouchableOpacity> */}
      <FlatList 
          data={users}
          keyExtractor={item=>item.id}
          renderItem={({item})=>{
            return (
              <TouchableOpacity
              >
                <UserItem
                  user={item}
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
export default UsersScreen
;