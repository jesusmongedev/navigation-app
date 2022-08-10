import React from 'react';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {Tab1Screen, Tab2Screen} from '../screens';
import {StackNavigator} from './StackNavigator';

import {ColorPalette} from '../constants';
import { BottomTabParams } from '../models/StackNavigator';
import { TopTabNavigator } from './MaterialTopTab';

export const Tabs = () => Platform.OS === 'android' ? <TabAndroid/> : <TabIOS/>


const BottomTabAndroid = createMaterialBottomTabNavigator<BottomTabParams>();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: 'white' }}
      screenOptions= {({route}) => ({ 
        tabBarIcon: ({ color, focused }) => {

          const {name} = route

          let iconName: string = "";
          
          switch (name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
              break;

            case 'StackNavigator':
              iconName = 'bed-outline'
              break;

            case 'Tab2Screen':
              iconName = 'key-outline'
              break;

          
            default:
              break;
          }

          return <Icon name={ iconName } size={20} color={ColorPalette.primaryColor} />
        }
      })}
        
    >
      <BottomTabAndroid.Screen name="Tab1Screen"
        component={Tab1Screen} />
      <BottomTabAndroid.Screen  name="Tab2Screen"
        component={TopTabNavigator} />
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
