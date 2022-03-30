import React,{useEffect,useState} from 'react';
import {useNavigationState} from '@react-navigation/native';
import {DummyData} from "../../webScripter/dataInfo";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FONTS,COLORS,SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    ImageBackground,
    Alert,
    StyleSheet
} from 'react-native';



const Home = ({ navigation }) => {
    const basePath = '../../webScripter/';
    const [gameImage, setGameImage] = useState('');
    const [gameIntro, setGameIntro] = useState('');
    const [gameTitle, setGameTitle] = useState('');
    const [gameType, setGameType] = useState([]);
    const insets = useSafeAreaInsets();


    useEffect(()=>{
        const setup = ()=>{
            const game = DummyData[0];
            setGameImage(game.cover_image_info.path);
            setGameIntro(game.intro);
            setGameTitle(game.name);
            setGameType(game.tags);

        }
        setup();
    },[]);

    const renderHeaderSection = ()=>{
        return (
                <View
                    style={{ 
                        justifyContent:'flex-start',
                        alignContent:'flex-start',
                        marginTop:insets.top,
                        }}
                >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginTop:10,
                            height:100,
                            maxHeight:100,
                        }}
                        data={DummyData}
                        keyExtractor={item=>item.index}
                        renderItem={({item})=>{
        
                            return <View 
                                    style={{flex:1,height:100}}>
                                <Pressable
                                    style={{
                                        alignItems:'center'
                                    }}
                                    onPress={()=>{
                                        setGameImage(item.cover_image_info.path);
                                        let intro = item.intro.length >100
                                        ? item.intro.substring(0,400)
                                        :item.intro;

                                        setGameIntro(intro);
                                        setGameTitle(item.name);
                                        setGameType(item.tags);
                                    }}
                                >
                                    <Image
                                    source={item.cover_image_info.path}
                                    style={{
                                        height:70,
                                        width:70,
                                        marginRight:10,
                                        borderRadius:20,
                                    }}
                                    />
                                    <Text
                                        numberOfLines={1}
    
                                        style={
                                            [FONTS.body5,{
                                                width:70,
                                                alignSelf:'center',
                                                color:'white',
                                                alignSelf:'center'
                                        }]}
                                    
                                    >{item.name}
                                    </Text>
                                </Pressable>
                            </View>
                        }}
                    />      
                    </View>
    
        )
    }
    
    const renderBodyImage = ()=>{
        return (
            <ImageBackground
            source={gameImage?gameImage:null}
            resizeMode='cover'
            style={{
                width:'100%',
                height:SIZES.height < 700? SIZES.height * 0.4 : SIZES.height * 0.5
            }}
            >
                {/* dissapear effect on the top */}
                <View
                    style={{
                        flex:1,
                        justifyContent: "flex-start"
                    }}
                >
                    <LinearGradient
                        start = {{x:0, y:1}}
                        end = {{x:0, y:0}}
                        colors={['transparent','#000']}
                        style={{
                            width:"100%",
                            height:150,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    ></LinearGradient>
                </View>
                {/* dissapear effect on the bottom */}
                <View
                    style={{
                        flex:1,
                        justifyContent: 'flex-end'
                    }}
                >
    
                    <LinearGradient
                        start = {{x:0, y:0}}
                        end = {{x:0, y:1}}
                        colors={['transparent','#000']}
                        style={{
                            width:"100%",
                            height:300,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >

                        <Text
                            style={{
                                marginTop:SIZES.base,
                                color:COLORS.white,
                                ...FONTS.h1,
                                paddingBottom:10
                            }}
                        >{gameTitle}
                        </Text>                   
                    </LinearGradient>
                </View>
                
            </ImageBackground>
            
        )
    }
    const renderTypes= ()=>{
        return(
            <View
            style={{
                marginTop: SIZES.base,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal:10

            }}
            >
                <FlatList
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}

                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={gameType}
                    keyExtractor={item=>item}
                    renderItem={({item})=>{
                        return(
                            <Pressable
                                onPress={()=>{
                                }}
                            >
                                <View
                                    style={[
                                        styles.categoryContainer,
                                        {
                                            marginLeft:0,
                                            marginRight:10
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
                >

                </FlatList>

            </View>
        )
    }
    const renderIntro = ()=>{
        return(
            <View
                style={{
                    marginTop:50
                }}
            >
                <Text
                    numberOfLines={6}
                    style={{
                        color:COLORS.lighterGray,
                        ...FONTS.body3,
                    }}
                >{gameIntro}
                </Text>
            </View>
        )
    }



    return (

        <View
            style={{
                backgroundColor: COLORS.black,
                paddingBottom: 150,
            }}
        
        >

                {/* header flatList */}
                {renderHeaderSection()}
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 100,
                        backgroundColor: COLORS.black
                    }}
                 >
                {/* body Image */}
                {renderBodyImage()}
                
                {/* game title and types */}
                {renderTypes()}

                {/* Intro */}
                {renderIntro()}
            </ScrollView>
        </View>
        
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

    }
})
export default Home;