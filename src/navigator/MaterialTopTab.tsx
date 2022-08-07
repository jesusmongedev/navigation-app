import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen, ChatScreen, ContactScreen } from '../screens';
import { TopTabParams } from '../models/StackNavigator';
import { Text } from 'react-native';
import { ColorPalette } from '../constants';

const Tab = createMaterialTopTabNavigator<TopTabParams>();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}
      screenOptions = {({route}) => ({
        tabBarActiveTintColor: ColorPalette.primaryColor,
        tabBarShowIcon: true,
        tabBarPressColor: ColorPalette.primaryColor,
        tabBarIndicatorStyle: {
        backgroundColor: ColorPalette.primaryColor,
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          elevation: 0
        },
        tabBarIcon: ({ color, focused }) => {
          
          const {name} = route
          let iconName: string = "";
          
          switch (name) {
            case 'Chat':
              iconName = '🔷'
              break;

            case 'Contacs':
              iconName = '🖤'
              break;

            case 'Albums':
              iconName = '❌'
              break;

          
            default:
              break;
          }

          return <Text >{ iconName }</Text>
        }
        
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacs" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
}