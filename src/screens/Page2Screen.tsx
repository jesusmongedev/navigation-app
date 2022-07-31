import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react'
import { StackProps } from '../models/StackNavigator';
import { styles } from '../theme/appTheme';

export const Page2Screen = ( { navigation: {navigate, setOptions} }: StackProps ) => {

  useEffect(() => {
    setOptions({
      title: 'Hello World',
      // change headerBackTitle label on ios, if empty it will display 'back' depending on the device language
      headerBackTitle: ''
    })
  
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title='Go to Page 3'
        onPress={() => navigate('Page3Screen')}
      />
    </View>
  )
}