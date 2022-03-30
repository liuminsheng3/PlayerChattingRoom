import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants'
const myID = '1';
const ChatContent = ({message}) => {

  const isMe = message.id===myID;
  return (
    <View
      style={[
        
        {backgroundColor: isMe? COLORS.gray2 : COLORS.darkBlue,
         alignSelf: isMe? 'flex-end' : 'flex-start'
        },
        styles.container,
      ]}
    >
      <Text 
      style={[
        FONTS.body3,
        {color: isMe? COLORS.black : COLORS.lighterGray}
        
      ]}>
        {message.content}
      </Text>
    </View>
  )
}

export default ChatContent

const styles = StyleSheet.create({
  container:{

    padding:SIZES.base * 1.2,
    margin:SIZES.base,
    maxWidth:'70%',
    borderRadius:SIZES.base
  },
})
