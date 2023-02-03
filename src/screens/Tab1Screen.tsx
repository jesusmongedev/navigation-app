import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Ion Icons:</Text>

      <Text>
        <TouchableIcon iconName='airplane-outline' />
        <TouchableIcon iconName="american-football-outline"  />
        <TouchableIcon iconName="key-outline"  />
        <TouchableIcon iconName="baseball-outline"  />
        <TouchableIcon iconName="bed-outline"  />
        <TouchableIcon iconName="calendar-outline"  />
        <TouchableIcon iconName="cloudy-night-outline"  />
        <TouchableIcon iconName="cut-outline"  />
        <TouchableIcon iconName="laptop-outline"  />
        <TouchableIcon iconName="fast-food-outline"  />
        <TouchableIcon iconName="finger-print-outline"  />
        <TouchableIcon iconName="hourglass-outline"  />
      </Text>

    </View>
  )
}

