import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity, Button} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS,FONTS,SIZES,icons } from "../constants";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const ProfileScreen = ()=> {
  const insets = useSafeAreaInsets();

  const renderHeader = ()=>{
    return(
      <View
        style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',

        }}
      >
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
          }}
        >
          <Image
            style={{
              height:70,
              width:70,
              borderRadius:35,
              
            }}
            source={require('../../assets/images/profile.jpeg')}
          />

          <View
            style={{
              flexDirection:'column',
              paddingHorizontal:10,
            }}
          >
            <Text style={[styles.headerTextStyle,FONTS.h2]}>Josh</Text>
            <Text style={styles.headerTextStyle}>Id: 12354dad</Text>
            <Text style={styles.headerTextStyle}>Level: 3</Text>
          </View> 
        </View>
        <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        backgroundColor:COLORS.transparentBlack,
                        flexDirection:'row',
                        alignContent:'center',
                        paddingRight:20
                    }}>
          <Text style={[
            styles.headerTextStyle,
            {paddingBottom:0,
            }]}
          >Profile</Text>
          <Image
            source={icons.right_arrow}
            style={{
                width:20,
                height:20,
                tintColor:COLORS.white
            }}
          />
        </TouchableOpacity>
      </View>

    )
  }
  const renderState = ()=>{
    return(
      <View
        style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:20
        }}
      >
        {/*follow*/}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <Text style={styles.stateNumberStyle}>23</Text>
          <Text style={styles.stateTextStyle}>followed</Text>
        </View>
        {/* likes */}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <Text style={styles.stateNumberStyle}>84</Text>
          <Text style={styles.stateTextStyle}>likes</Text>
        </View>
        {/* visiter */}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <Text style={styles.stateNumberStyle}>88</Text>
          <Text style={styles.stateTextStyle}>visits</Text>
        </View>
        {/* history */}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <Text style={styles.stateNumberStyle}>98</Text>
          <Text style={styles.stateTextStyle}>history</Text>
        </View>
      </View>
    )
  }
  const renderWalletAndOrder = ()=>{
    return(
      <View
        style={{
          paddingVertical:20,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-evenly',

        }}
      >
        {/* order */}
         <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <MaterialIcons name="shopping-bag" size={52} color="darkred" />
          <Text style={styles.WalletAndOrderStyle}>order</Text>
        </View>
        {/* coupons */}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <MaterialCommunityIcons name="ticket" size={52} color="darkred" />
          <Text style={styles.WalletAndOrderStyle}>coupons</Text>
        </View>
        {/* wallet */}
        <View
          style={{
            flexDirection:'column',
            alignContent:'center',
            alignItems:'center'
          }}
        >
          <Ionicons name="wallet" size={52} color="darkred" />
          <Text style={styles.WalletAndOrderStyle}>wallet</Text>
        </View>
      </View>
    )
  }
  const renderMyLevelAndRoom = ()=>{
    return(
      <View
        style={{
          paddingVertical:20,
          paddingHorizontal:30,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'fix-start',
        }}
      >
        {/* level */}
        <View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <FontAwesome5 name="medal" size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>level</Text>
        </View>
        {/* order */}
        <View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <FontAwesome5 name="dollar-sign"  size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>order</Text>
        </View>
        {/* room */}<View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <Ionicons name="tv-outline" size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>room</Text>
        </View>
      </View>
    )
  }
  const renderSupport = ()=>{
    return(
      <View
        style={{
          paddingVertical:20,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'fix-start',
        }}
      >
        {/* help */}
        <View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <MaterialIcons name="question-answer" size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>question</Text>
        </View>
        {/* customer */}
        <View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <AntDesign name="customerservice"  size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>customer</Text>
        </View>
        {/* setting */}<View
        style={{
          flexDirection:'column',
          alignContent:'center',
          alignItems:'center',
          marginLeft:30
        }}
        >
          <MaterialIcons name="miscellaneous-services" size={30} color="darkred" />
          <Text style={styles.levelAndRoomStyle}>setting</Text>
        </View>
      </View>
    )
  }
  return (
    <View
      style={{
        flex:1,
        paddingTop: insets.top,
        // flexDirection:'column',
        // alignItems:'center',
        backgroundColor:COLORS.black
      }}
    >
      {/* header profile*/}
      {renderHeader()}
      {/* states */}
      {renderState()}
      {/* order,wallet */}
      {renderWalletAndOrder()}
      <Text style={{
        color:'white',
        paddingLeft:30, 
        ...FONTS.h3, 
        backgroundColor:COLORS.transparentWhite,
        width:100,
        paddingVertical:5,
        }}>More</Text>
      {/* my room */}
      {renderMyLevelAndRoom()}
      <Text style={{
        color:'white',
        paddingLeft:30, 
        ...FONTS.h3, 
        backgroundColor:COLORS.transparentWhite,
        width:100,
        paddingVertical:5,
        }}>Suport</Text>

      {/* support */}
      {renderSupport()}

    </View>
  );
}
const styles = StyleSheet.create({
  headerTextStyle:{
    ...FONTS.h3,
    color:COLORS.white,
    paddingBottom:10
  },
  stateTextStyle:{
    ...FONTS.h3,
    color:COLORS.white,
    paddingBottom:10
  },
  stateNumberStyle:{
    ...FONTS.h2,
    color:COLORS.white,
    paddingBottom:10
  },
  WalletAndOrderStyle:{
    ...FONTS.h3,
    color:COLORS.lightGray,
    paddingBottom:10
  },
  levelAndRoomStyle:{
    ...FONTS.h3,
    color:COLORS.lightGray,
    paddingVertical:7
  }
});
export default ProfileScreen;