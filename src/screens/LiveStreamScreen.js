import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  Pressable
} from 'react-native';
import {dummyData, COLORS, SIZES,FONTS, icons, images } from '../constants';
import { Profiles, ProgressBar } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DummyData,GameTypes } from '../../webScripter/dataInfo';
import {LinearGradient} from 'expo-linear-gradient';

const LiveStreamScreen = ({navigation})=> {


  const insets = useSafeAreaInsets();
  const [firstButton,setFirstButton] = useState(true);
  const [currentType, setCurrentType] = useState('Shooter');
  const newLiveSteamScrollX = React.useRef(new Animated.Value(0)).current;
  const renderHeader=()=>{
    return (
      <View style={styles.header}>
        {/* Profile */}
        <TouchableOpacity
          style = {[{backgroundColor: firstButton?'red':COLORS.gray1},styles.profile]}
          onPress={()=>{
            setFirstButton(true);
          }}
        >
          <Text
            style={[firstButton? FONTS.h3: FONTS.h5,styles.headerText]}
          >Radio</Text>
  
        </TouchableOpacity>
  
        {/* Screen Mirror */}
        <TouchableOpacity
          style={[{backgroundColor: !firstButton?'red':COLORS.gray1},styles.profile]}
          onPress={()=>{
            setFirstButton(false);
          }}
        >
          <Text
            style={[!firstButton? FONTS.h3: FONTS.h5,styles.headerText]}
          >LiveStream</Text>
  
        </TouchableOpacity>
      </View>
    )
  }

  const renderTypeBar=()=>{
    return(
      <View
        style={{
          marginTop:10
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={GameTypes}
          keyExtractor={item=>item}
          renderItem={({item})=>{
            return(
              <Pressable
                onPress={()=>{
                    setCurrentType(item);
                }}
              >
                <View
                    style={[
                      styles.categoryContainer,
                      {
                          marginLeft:0,
                          marginRight:10,
                          backgroundColor: currentType===item?COLORS.primary: COLORS.gray1,

                      } 
                    ]}
                >
                  <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                    }}
                  >
                    {item}
                  </Text>
                </View> 
              </Pressable>
            )
          }}

        />

      </View>
    )
  }

  const renderVideoTemplate = (video)=>{
    return(
      <View>
      <ImageBackground
          style={{
            height:130,
            width:"100%",
            justifyContent:'flex-end',
            borderRadius:30,
          }}
          source={video.cover_path}
      >
        <LinearGradient
          start = {{x:0, y:0}}
          end = {{x:0, y:1}}
          colors={['transparent','#000']}
          style={{
              width:"100%",
              height:"40%",
          }}
        >
          <View
            style={{
              flex:1,
              justifyContent: 'space-between',
              alignItems:'flex-end',
              flexDirection:'row',
              paddingHorizontal:8,
            }}
          >
          {/* reviews */}
            <Text
              style={{
                color:COLORS.lightGray,
                fontSize:12
              }}
            >{video.video_views}
            </Text> 

          {/* length */}
            <Text
              style={{
                color:COLORS.lightGray,
                fontSize:12
              }}
            >{video.video_length}
            </Text>
              
            
          </View>
          <View
          style={{
            flexDirection:'row',
            alignContent:'center',
            alignItems:'center',
            paddingTop:3,
            paddingHorizontal:3
          }}
        >
        {/* uploader image */}
        <Image
          style={{
            width:20,
            height:20,
            borderRadius:10,
          }}

          source={video.uploader_path}
        />
        {/* uploader name */}
        <Text
          style={{
            color:'gray',
            marginLeft:5
          }}
        >{video.uploader_name}</Text>
        </View>

        </LinearGradient>
      </ImageBackground>
      
      <View
      style={{
        flex:1,
      }}>


        {/* game title */}
        <Text
          numberOfLines={1}
          style={{
            alignSelf:'center',
            color:'white',
            marginTop:0,
            paddingHorizontal:5,
            ...FONTS.h4
          }}
        >{video.uploader_video_title}</Text>
      </View>
      
      </View>
    )
  }
  const renderVideos=()=>{
    return(
      <View
        style={{
          flex:1,
          alignContent:'center',
          paddingTop:10

        }}
      >
        <FlatList
          contentContainerStyle={{
            paddingBottom:100,
          }}
          style={{flex:1}}


          data={DummyData.filter(item=>item.tags.find(i=>i===currentType))}
          numColumns={2}
          keyExtractor={item=>item.index}
          renderItem={({item})=>{

            //return image component with uploader name and title
            return( 
            <Pressable
              style={{
                padding:10,
                flex:1
              }}
              onPress={()=>{
                navigation.navigate(
                  "GameVideoDetail",{ oneVideo: item.clips[0] });
              }}
            >
              {renderVideoTemplate(item.clips[0])}
            </Pressable>
            )
          }}
        />
      </View>
    )
  }
  const renderDots = ()=>{
  const dotPosition = Animated.divide(newLiveSteamScrollX, SIZES.width);
  
    return(
      <View
      style={{
        marginTop: SIZES.padding,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'

      }}
      >
        {dummyData.newSeason.map((item, index)=>{
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1,index, index +1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [(index - 1),index, (index +1)],
            outputRange: [6, 20, 6],
            extrapolate: 'clamp'
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [(index - 1),index, (index +1)],
            outputRange: [COLORS.lightGray,COLORS.primary, COLORS.lightGray],
            extrapolate: 'clamp'
          });

          return(
            <Animated.View
            key={`dot-${index}`}
            opacity={opacity}
            style={{
              borderRadius: SIZES.radius,
              marginHorizontal: 3,
              width: dotWidth,
              height:6,
              backgroundColor:dotColor
            }}
            />
          )

        })}

      </View>
    )
  }

  const renderNewLiveSteam = ()=> {
    return (
      <Animated.FlatList
        horizontal
        //stop on multiples scroll view's size 
        // can be override by snapToAlignment
        pagingEnabled

        //TODO need to find out what this do?
        snapToAlignment="center"
        snapToInterval={SIZES.width}

        //do not show any scroll bar
        showHorizontalScrollIndicator={false}

        //It sets how accurate the system track the scroll position
        scrollEventThrottle={16}

        //set decelerate speed 
        decelerationRate='fast'

        //set all the elements' style inside <ScrollView></ScrollView>
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}

        //
        data = {dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        onScroll={
          Animated.event([
            {nativeEvent: {
              contentOffset:{
                x: newLiveSteamScrollX
              }}}
          ], {useNativeDriver: false})}
          renderItem={({item, index})=>{
            return(
              <TouchableWithoutFeedback
                onPress={()=>navigation.navigate(
                  "MovieDetail",{ selectedMovie: item }
                )}
              >
                <View
                  style={{
                    width: SIZES.width,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ImageBackground
                    source={item.thumbnail}
                    resizeMode='cover'
                      style={{
                        width: SIZES.width * 0.85,
                        height: SIZES.width * 0.85,
                        justifyContent: 'flex-end'
                      }
                    }
                    imageStyle={{
                      borderRadius: 40
                    }}
                  >
                    <View
                      style={{
                        flexDirection:'row',
                        height:60,
                        width:'100%',
                        marginBottom:SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                      }}
                    >

                      {/* paly now */}
                      <View
                        style={{
                          flex:1,
                          flexDirection:'row',
                          alignItems:'center'
                        }}
                      >
                        <View
                        styles={{
                          alignItems:'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: COLORS.transparentWhite

                        }}
                        >
                          <Image
                            source={icons.play}
                            resizeMode = "contain"
                            style={{
                              width: 15,
                              height: 15,
                              tintColor:COLORS.white
                            }}
                          />
                        </View>
                        <Text style={{marginLeft: SIZES.base, color:'white', ...FONTS.h3}}>Play now</Text>

                      </View>

                      
                      {/* still watching */}
                      {item.stillWatching.length > 0 && 
                        <View
                          style={{
                            justifyContent:'center'
                          }}
                        >
                          <Text
                            style={{
                              color: COLORS.white,
                              ...FONTS.h4
                            }}
                          >Still Watching</Text>
                        <Profiles
                          profiles={item.stillWatching}
                        />
                        </View>  
                      }
                    </View>
                  </ImageBackground>
                </View>

              </TouchableWithoutFeedback>
            )
          }}
      />
    )
  }

  const renderContinueWatchingSection= ()=>{
    return (
      <View
        style={{
          marginTop: SIZES.padding
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              flex: 1,
              color: COLORS.white,
              ...FONTS.h2
            }}
          >Continue Watching</Text>
          <Image
            source={icons.right_arrow}
            style={{
              width:20, 
              height:20,
              tintColor:COLORS.primary
            }}
          />
        </View>
        {/* List */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop:SIZES.padding
          }}
          data = {dummyData.continueWatching}
          keyExtractor={item=>item.id}
          renderItem={({item, index})=>{
            return (
              <TouchableWithoutFeedback
                onPress={()=>navigation.navigate("MovieDetail",{selectedMovie: item})}
              >
                <View
                  style={{
                    marginLeft: index == 0? SIZES.padding :20,
                    marginRight: index == dummyData.continueWatching.length - 1 ? SIZES.padding : 0
                  }}
                >
                  {/* thumbnail */}
                  <Image
                    source={item.thumbnail}
                    resizeMode='cover'
                    style={{
                      width: SIZES.width / 3,
                      height: (SIZES.width / 3 ) + 60,
                      borderRadius: 20
                    }}
                  />
                  {/* name */}
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h4}}>{item.name}</Text>
                  {/* bar */}
                  <ProgressBar
                    containerStyle={{
                      marginTop: SIZES.radius,
                    }}
                    barStyle={{
                      height: 3
                    }}
                    barPercentage={item.overallProgress}
                  />
                </View>

              </TouchableWithoutFeedback>
            )
          }}
        
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={[styles.container,{paddingTop:insets.top}]}>
      
      {renderHeader()}

      {renderTypeBar()}
      <View
        contentContainerStyle={{
          paddingBottom: 100
        }}
        style={{
          flex:1
        }}
      >
        {renderVideos()}

        {/* {renderNewLiveSteam()} */}
        {/* {randerbar()} */}
        {/* {renderDots()}  */}
        {/* {renderContinueWatchingSection()} */}
      </View>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: COLORS.black,
  },
  header:{
    // borderColor:'white',
    // borderWidth:1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
  },
  profile:{
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
    height:50,
    marginRight:10,
    borderRadius:20,
    paddingHorizontal:10,

  },
  headerText:{
    color:COLORS.white,
    alignSelf:'center',
  },
  headerMirror:{
    width: 25,
    height:25,
    tintColor: COLORS.primary
  },
  innerContainer:{
    flexDirection: 'row',
    alignItems:'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius:4,
    backgroundColor: 'silver',
    marginHorizontal:4
  },
  categoryContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    borderRadius:SIZES.base,
    backgroundColor:COLORS.gray1
  }

});
export default LiveStreamScreen;