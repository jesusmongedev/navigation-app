import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProfileScreen = () => {

  // Custom way to handle safe Area on devices with notch
  const inset = useSafeAreaInsets();  

  return (
    <View style={{marginTop: inset.top + '75%', margin: inset.left + '25%'}}>
      <Text style={styles.title}> Profile Screen </Text>
    </View>
  )
}