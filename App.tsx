import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NavigatorDrawer } from './src/navigator/NavigatorDrawer';
// import { BasicDrawer } from './src/navigator/BasicDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* <BasicDrawer/> */}
      <NavigatorDrawer/>
    </NavigationContainer>
  )
}