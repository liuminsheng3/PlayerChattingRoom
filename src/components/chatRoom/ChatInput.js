import React, { useState } from 'react'
import { Pressable, StyleSheet,KeyboardAvoidingView, Text,Platform, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const ChatInput = () => {
  const [message, setMessage] = useState("");
  const onPress = ()=>{
    if (message === ""){
      console.log('more function')
    }else {
      console.log('submit message')
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? "padding": "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.root}>
        <View
          style={styles.inputContainer}
        >
          <TouchableOpacity
            onPress={()=>{
              console.log('open emojy')
            }}
          >
            <SimpleLineIcons 
            name="emotsmile" 
            style={styles.iconStyle}/>
          </TouchableOpacity>
          <TextInput 
            placeholder='Enter Message'
            style={styles.input}
            value={message}
            onChangeText={term=>setMessage(term)}
      
          />
          <Pressable
            onPress={()=>{
              console.log('open camera')
            }}
          >
            <Feather name="camera" size={24} color= "#707070" style={{marginRight:10}}/>
          </Pressable>
          <Pressable
            onPress={()=>{
              console.log('voice message')
            }}
          >
            <SimpleLineIcons name="microphone" size={24} color="#707070" style={{marginRight:10}}/>
          </Pressable>
        </View>
        <View
          style={styles.buttonContainer}
        >
          <Pressable
            onPress={onPress}
          >
          {message===""
          ?<Entypo name="circle-with-plus" size={35} color={COLORS.darkBlue} />
          :<SimpleLineIcons 
            name="paper-plane"  
            size= {28} 
            color= {COLORS.darkBlue} 
          />
          }
          
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ChatInput

const styles = StyleSheet.create({
  root:{
    flexDirection:'row',
    padding:10,
  },
  inputContainer:{
    backgroundColor:COLORS.lighterGray,
    flex:1,
    marginRight:5,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderWidth:1,
    borderColor: COLORS.lightGray
  },
  input:{
    flex:1, 
    fontSize:14, 
    paddingRight:17,
    paddingLeft:5,
  },
  buttonContainer:{
    width: 40,
    height:40,
    // backgroundColor:COLORS.darkBlue,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'

  },

  iconStyle:{
    marginHorizontal:7,
    fontSize:24
  }

})
