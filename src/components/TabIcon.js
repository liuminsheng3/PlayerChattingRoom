import React from "react"
import { Ionicons } from '@expo/vector-icons';
import {
    SafeAreaView,
    View,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ImageBackGround,
    Animated,
    ScrollView
} from "react-native"
import { COLORS } from "../constants"

const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.primary : COLORS.gray
                }}
            />
        </View>
    )
}


export default TabIcon;