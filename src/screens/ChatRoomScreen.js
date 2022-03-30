import React from 'react'
import { FlatList,Button, StyleSheet, Text, View, Pressable } from 'react-native'
import { ChatContent,ChatInput } from '../components'
import { COLORS } from '../constants'
import { Ionicons } from '@expo/vector-icons';

const data = [
  {"id":'1', "content":'sjdoifjoaisjfods'},
  {"id":'2', "content":'stsdfsad'},
  {"id":'2', "content":'bbfbfbbbfb'},
  {"id":'1', "content":'qqwwwqw'},
  {"id":'2', "content":'rerrrerr'},
  {"id":'1', "content":'fdssef fef fe fewqf feq'},

]
const ChatRoomScreen = ({route, navigation}) => {
 
  return (
    <View
      style = {styles.page}
    >

      <FlatList

        data={data}
        inverted
        keyExtractor={item=>item.content}
        renderItem={({item})=>{
          return <ChatContent message={item}/>
        }}
      />
      <ChatInput/>

    </View>
  )
}

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page:{
    backgroundColor:COLORS.white,
    height:"90%",

  }

})
