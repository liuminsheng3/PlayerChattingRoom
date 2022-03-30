import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { LiveStreamScreen } from '../screens';
function MyTabBar({ state, descriptors, navigation, position, bGColor }) {
  console.log('state', state);
  const insets = state.routeNames[0] ==='SecondTab'?useSafeAreaInsets():0;
  
  return (
    <View>
      <ScrollView style={{ paddingTop:insets.top, backgroundColor:'black'}}>
    <FlatList 
    horizontal
    style={{ flexDirection: 'row',}}
    data = {state.routes}
    keyExtractor = {route=>route.key}
    renderItem ={({item,index})=> {

      const { options } = descriptors[item.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : item.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: item.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: item.name, merge: true });
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: item.key,
        //   });
        // };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

      
      return (
        <View>
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        // onLongPress={onLongPress}
        style={{ alignItems:'center', marginHorizontal:1, borderWidth:1, borderColor:bGColor}}
        
      >
        {/* {console.log(bGColor)} */}
        <Animated.Text style={{  flex:1,opacity, color:'red', borderWidth:1, borderColor:'green' }}>
          {label}
        </Animated.Text>
      </TouchableOpacity></View>
    );}}
    >

    </FlatList></ScrollView>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();
const My= createMaterialTopTabNavigator();

// const TabScreen= ()=>{
//   return <My.Navigator  tabBar={(props) => <MyTabBar {...props}  navIndex='first'/>}>
//     <My.Screen name="LiveStream" component={LiveStreamScreen}/>
//     <My.Screen name="LiveStream2" component={LiveStreamScreen}/>
//     <My.Screen name="LiveStream3" component={LiveStreamScreen}/>


//   </My.Navigator>
// }
export default LiveTab = ()=>{
     return <Tab.Navigator 

        tabBar={(props) => <MyTabBar {...props}  bGColor='white'/>}
      >

        <Tab.Screen name="Live Streaming" component={LiveStreamScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
  

}















// import { COLORS, icons } from "./constants"
// import { TabIcon } from "./components"
// import * as React from 'react';
// import { Text, Pressable, View,StyleSheet } from 'react-native';
// import {
//   NavigationHelpersContext,
//   useNavigationBuilder,
//   TabRouter,
//   TabActions,
//   createNavigatorFactory,
//   NavigationContainer,
  
// } from '@react-navigation/native';
// import { createMyNavigator } from './routers/myNavigator';
// import FirstScreen from './screens/FirstScreen';
// import SecondScreen from './screens/SecondScreen';
// import ThirdScreen from './screens/ThirdScreen';
// import ForthScreen from './screens/ForthScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createStackNavigator } from "@react-navigation/stack";

// const FirstTab = createMyNavigator();
// const My = createMyNavigator();

// const customBar = ()=>{
//   return <My.Navigator>
//   <My.Screen name="First" component={FirstScreen} />
//   <My.Screen name="Second" component={SecondScreen} />
//   <My.Screen name="Third" component={ThirdScreen} />
//   <My.Screen name="Forth" component={ForthScreen} />
//   </My.Navigator>
// }
// const Tab = createMaterialTopTabNavigator();
// const App=()=> {
//   return (
//     <NavigationContainer>
//       {/* {customBar()} */}
//       <FirstTab.Navigator

//       >
//         <FirstTab.Screen name="Home" component={customBar}
        
//         options={{
//           tabBarIcon: ({ focused }) => (
//               <TabIcon
//                   focused={focused}
//                   icon={icons.play_button}
//               />
//           )
//       }}
//         />
//         <FirstTab.Screen name="Main-Second" component={customBar}/>
//       </FirstTab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




// const stack = createStackNavigator();
// const App = ()=>{
//   return <NavigationContainer>
//     <stack.Navigator screenOptions={{headerShown:false}}>
//       <stack.Screen name='First' component={FirstScreen}/>
//     </stack.Navigator>

//   </NavigationContainer>
// }

// export default App;