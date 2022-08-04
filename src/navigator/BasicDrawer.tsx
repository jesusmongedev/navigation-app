import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ColorPalette } from '../constants';
import { useWindowDimensions } from 'react-native';
import { SettingsScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const BasicDrawer = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions = {{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: width >= 768 ? false : true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: ColorPalette.primaryColor
        }
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}