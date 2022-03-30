import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS,FONTS } from "../../constants";
const MessageTemplate = ({name, text, imageUri}) => {
  const insets = useSafeAreaInsets();
  const num = Math.round(Math.random()*10);

  return (
    
    <View style = {styles.container}>
    <Image
        style={styles.image}
          source={{uri: imageUri}}
    />
    {num!==0
    ?<View
        style={{
          backgroundColor:COLORS.blue,
          width:20,
          height:20,
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          left:45,
          top:11,
          borderColor:COLORS.lightGray,
          borderWidth:1
        }}
      >
        <Text
          style={{
            color:'white'
          }}
        >{num}</Text>

      </View>
    :null}
      <View 
      style={{
        flexDirection:'column',
        flex:1, 
        paddingHorizontal:10, 
        justifyContent:"center",
        marginHorizontal:10,
        borderBottomColor:"rgba(0,0,0,0.1)",
        borderBottomWidth:1
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
            {name}
          </Text>
          <Text 
          style={[
            FONTS.body5,
            {color:COLORS.transparentBlack}
            ]}
          >
            11:11 AM
          </Text>
        </View>
        <Text 
        numberOfLines={1} 
        style={[
          FONTS.body5,
          {color:COLORS.gray,paddingBottom:4}
          ]}
        >
          {text}
        </Text>
    </View>
  </View>
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

export default MessageTemplate


