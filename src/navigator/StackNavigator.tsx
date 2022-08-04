import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParams } from '../models/StackNavigator';
import { Page1Screen, Page2Screen, Page3Screen, PersonScreen } from '../screens';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#121212',
        headerStyle: {
          elevation: 0,
          // equivalent on ios
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name='Page1Screen' options={ {title: 'Página 1'} } component={Page1Screen} />
      <Stack.Screen name='Page2Screen' options={ {title: 'Página 2'} } component={Page2Screen} />
      <Stack.Screen name='Page3Screen' options={ {title: 'Página 3'} } component={Page3Screen} />
      <Stack.Screen name='PersonScreen' options={ {title: 'Person page'} } component={PersonScreen} />
    </Stack.Navigator>
  )
}