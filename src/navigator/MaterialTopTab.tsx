import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen, ChatScreen, ContactScreen } from '../screens';
import { TopTabParams } from '../models/StackNavigator';
import { ColorPalette } from '../constants';
import Icon  from 'react-native-vector-icons/Ionicons';

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
              iconName = 'chatbox-ellipses-outline'
              break;

            case 'Contacs':
              iconName = 'people-outline'
              break;

            case 'Albums':
              iconName = 'images-outline'
              break;

          
            default:
              break;
          }

          return <Icon name={iconName} size={20} color={ColorPalette.primaryColor} />
        }
        
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacs" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
}