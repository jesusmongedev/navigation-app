import { View, Text, Button } from 'react-native';
import React from 'react'
import { StackProps } from '../models/StackNavigator';
import { styles } from '../theme/appTheme';

export const Page3Screen = ( { navigation: {pop, popToTop} }: StackProps ) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button
        title='Go back'
        onPress={() => pop()}
      />
      <Text/>
      <Button
        title='Return to Page 1'
        onPress={() => popToTop()}
      />
    </View>
  )
}