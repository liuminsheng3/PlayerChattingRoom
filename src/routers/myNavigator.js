import * as React from 'react';
import { Text,Image, Pressable, View,StyleSheet, SafeAreaView,Dimensions, ScrollView } from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';

function TabNavigator(x
) {
  const {
    initialRouteName,
    children,
    screenOptions,
    tabBarStyle,
    contentStyle,} = x;
  const { state, navigation, descriptors,NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (

    <NavigationContent>
      <View style={{flex:1}}>
    <View style={[{ flexDirection: 'row' }, tabBarStyle]}>
    <ScrollView horizontal style={{flex:1}}>
      {state.routes.map((route) => (
        
        <Pressable
          key={route.key}
          onPress={() => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              peventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.dispatch({
                ...TabActions.jumpTo(route.name),
                target: state.key,
              });
            }
          }}
          style={{ flex: 1,marginHorizontal:10 }}
        >
          <Text>{descriptors[route.key].options.title || route.name}</Text>
        </Pressable>
      ))}
      </ScrollView>
    </View>
    <View style={[{ flex: 1 }, contentStyle]}>
      {state.routes.map((route, i) => {
        return (
          <View
            key={route.key}
            style={[
              StyleSheet.absoluteFill,
              {margin:3,borderWidth:1, display: i === state.index ? 'flex' : 'none' },
            ]}
          >
            {descriptors[route.key].render()}
          </View>
        );
      })}
    </View>
    </View>
  </NavigationContent>
  
  );
}

export const createMyNavigator = createNavigatorFactory(TabNavigator);
