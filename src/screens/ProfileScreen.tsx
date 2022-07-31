import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {

  // Custom way to handle safe Area on devices with notch
  const inset = useSafeAreaInsets();

  return (
    <View style={{marginTop: inset.top + '75%', marginLeft: inset.left + '25%'}}>
      <Text style={styles.title}> Profile Screen </Text>
    </View>
  )
}