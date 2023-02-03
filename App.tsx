import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { NavigatorDrawer } from './src/navigator/NavigatorDrawer';
import { AuthProvider } from './src/context/AuthContext';

// import { BasicDrawer } from './src/navigator/BasicDrawer';

export const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigatorDrawer/>
      </AuthProvider>
    </NavigationContainer>
  )
}