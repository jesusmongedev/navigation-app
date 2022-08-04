import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {ColorPalette} from '../constants';
import {Text} from 'react-native';
import { BottomTabParams } from '../models/StackNavigator';

const Tab = createBottomTabNavigator<BottomTabParams>();

export const Tabs = () => {
  return (
    <Tab.Navigator
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
          console.log(focused, size);
          
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
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          // tabBarIcon: () => <Text>⚪</Text>
        }}
      />
      <Tab.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          title: 'Tab2',
          // tabBarIcon: () =>  <Text>🐻‍❄️</Text>,
          tabBarBadge: '5',
          tabBarBadgeStyle: {backgroundColor: ColorPalette.error}
        }}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Home',
          // tabBarIcon: () =>  <Text>💮</Text> 
        }}
      />
    </Tab.Navigator>
  );
};
