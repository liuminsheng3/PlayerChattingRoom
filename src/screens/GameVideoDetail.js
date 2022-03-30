import React from 'react';
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
  Platform,
  Text,
  Button,
  Pressable
} from 'react-native';
import { COLORS, SIZES,FONTS, icons } from '../constants';
import { Profiles, ProgressBar } from '../components';
import {LinearGradient} from 'expo-linear-gradient';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DummyData } from '../../webScripter/dataInfo';

const GameVideoDetail
 = ({navigation, route}) => {
    const insets = useSafeAreaInsets();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    let { oneVideo } = route.params;

    const game = DummyData.find(g=>g.index==oneVideo.clip_index.split('_')[0]);

    React.useEffect(()=>{
        
    },[])

    const renderUploaderInfo = ()=>{
        return (
            <View
                style={{
                    paddingHorizontal:10,
                }}
            >
            {/* game title */}
            <View
                style={{
                    alignContent:'center',
                    alignItems:'center',
                    paddingBottom:10
                }}
            >
                <Text
                    style={{
                        ...FONTS.h1,
                        color:'white',
                        paddingLeft:10
                    }}
                >{oneVideo.uploader_video_title}
                </Text>
            </View>
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}
            >
                <Image
                    style={{
                        height:40,
                        width:40,
                        borderRadius:20,
                        borderColor:COLORS.gray,
                        borderWidth:2

                    }}
                    source={oneVideo.uploader_path}
                />
                <Text
                    numberOfLines={1}
                    style={{
                        ...FONTS.h3,
                        color:'white',
                        paddingLeft:10,
                    }}
                >{oneVideo.uploader_name}</Text>
            </View>
            </View>
        )
    }
    const renderVideo=()=>{
        return (
        <View
            style={styles.backgroundVideo}
        >
            <Video
                ref={video}
                style={styles.video}
                source={oneVideo.video_prop.video_path}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            {renderUploaderInfo()}
        </View>
      )
    }

    const renderGameIntro = ()=>{
        return(
            <View
                style={{
                    flex:1,
                    paddingTop:20,
                    paddingBottom:100,
                    paddingHorizontal:10

                }}
            >

                <ImageBackground
                    resizeMode='cover'

                    source={game.cover_image_info.path}
                    contentContainerStyle={{

                    }}
                    style={{
                        width:"100%",
                        height:300
                    }}
                >        
                    <LinearGradient
                        start = {{x:0, y:0.8}}
                        end = {{x:0, y:0.2}}
                        colors={['transparent','#000']}
                        style={{
                            width:"100%",
                            height:400,
                        }}
                    >       
                        <Text
                            style={{
                                ...FONTS.h2, 
                                color:COLORS.lighterGray,
                            }}
                        >Game Intro</Text>
                        <Text
                            style={{
                                ...FONTS.body5,
                                color:COLORS.lightGray,
                            }}
                        >{game.intro}</Text>

                    </LinearGradient> 

                </ImageBackground>
            </View>
        )
    }
    return (
        <ScrollView
            contentContainerStyle={{
                flex:1,
                backgroundColor: COLORS.black,
            }}
            style={{
                backgroundColor: COLORS.black,
                paddingTop:insets.top,

            }}
            
        >
            {/* renderVideo */}
            {(oneVideo?.video_prop?.video_path)?renderVideo():null}
            
            {/* render game info */}
            {renderGameIntro()}
           
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SIZES.base,
        paddingHorizontal: SIZES.base,
        borderRadius:SIZES.base,
        backgroundColor:COLORS.gray1

    },
    backgroundVideo: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        
    },
    video:{
        height:320,
        width:"100%",

    }
})
export default GameVideoDetail
;