import React from 'react';
import {Platform, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {Tab1Screen, Tab2Screen} from '../screens';
import {StackNavigator} from './StackNavigator';

import {ColorPalette} from '../constants';
import { BottomTabParams } from '../models/StackNavigator';
import colors from '../constants/colors';

export const Tabs = () => Platform.OS === 'android' ? <TabAndroid/> : <TabIOS/>


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primaryColor }}
      
      screenOptions= {({route}) => ({ 
        tabBarIcon: ({ color, focused }) => {

          const {name} = route

          console.log(JSON.stringify({color, focused, name}, null, 2));

          let iconName: string = "";
          
          switch (name) {
            case 'Tab1Screen':
              iconName = '🔷'
              break;

            case 'Tab2Screen':
              iconName = '🖤'
              break;

            case 'StackNavigator':
              iconName = '❌'
              break;

          
            default:
              break;
          }

          return <Text>{ iconName }</Text>
        }
      })}
        
    >
      <BottomTabAndroid.Screen name="Tab1Screen"
        component={Tab1Screen} />
      <BottomTabAndroid.Screen  name="Tab2Screen"
        component={Tab2Screen} />
      <BottomTabAndroid.Screen  name="StackNavigator"
        component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator<BottomTabParams>();

const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}
      initialRouteName = "StackNavigator"
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#c3c3c3',
        tabBarActiveBackgroundColor: ColorPalette.secondaryColor,
        tabBarActiveTintColor: '#121212',
        tabBarLabelStyle: {fontSize: 20, fontWeight: '500'},
        tabBarStyle: {backgroundColor: ColorPalette.primaryColor},
        tabBarIcon: ({color, focused, size}) => {
          
          const {name} = route
          let iconName: string = "";
          
          switch (name) {
            case 'Tab1Screen':
              iconName = '🔷'
              break;

            case 'Tab2Screen':
              iconName = '🖤'
              break;

            case 'StackNavigator':
              iconName = '❌'
              break;

          
            default:
              break;
          }

          return <Text style={{color, fontSize: size, backgroundColor: focused ? 'yellow' : 'black'}}>{ iconName }</Text>
        }
        
      })}
      >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          // tabBarIcon: () => <Text>⚪</Text>
        }}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          title: 'Tab2',
          // tabBarIcon: () =>  <Text>🐻‍❄️</Text>,
          tabBarBadge: '5',
          tabBarBadgeStyle: {backgroundColor: ColorPalette.error}
        }}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Home',
          // tabBarIcon: () =>  <Text>💮</Text> 
        }}
      />
    </BottomTabIOS.Navigator>
  );
};
