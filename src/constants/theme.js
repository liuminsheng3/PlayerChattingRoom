import { Dimensions } from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { useState } from "react";

const fetchFont = ()=>{
    Font.loadAsync({
        "Roboto-Bold" : require("../../assets/fonts/Roboto-Bold.ttf"),

    })
}

const { width, height } = Dimensions.get("window");


export const COLORS = {
    primary: "#FF002E",     // Red

    white: "#fff",
    black: "#000000",
    blue: "#4096FE",
    darkBlue: "#3777f0",
    gray: "#464646",
    gray1: "#363636",
    gray2:'lightgray',
    lightGray: "#dedede",
    lighterGray:"#f2f2f2",
    lightestGray:'#f8f8f8',
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = ()=>{
    const [font,setFont] = useState(false);
    console.log('outsider');
    if(!font){
        console.log('sth');
        return <AppLoading
            startAsync={()=>{fetchFont(); console.log('app loading');}}
            onFinish={()=>{
                setFont(true);
            }}
            onError={(err)=>{console.log(err)}}

        />
    }
    return { COLORS, SIZES, FONTS };
} ;

export default appTheme;
