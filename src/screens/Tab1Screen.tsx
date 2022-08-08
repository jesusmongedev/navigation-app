import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { ColorPalette } from '../constants';
import { styles } from '../theme/appTheme'

export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Ioni Icons:</Text>

      <Text>
        <Icon name="airplane-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="american-football-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="key-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="baseball-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="bed-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="calendar-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="cloudy-night-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="cut-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="laptop-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="fast-food-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="finger-print-outline" size={60} color={ColorPalette.primaryColor} />
        <Icon name="hourglass-outline" size={60} color={ColorPalette.primaryColor} />
      </Text>

    </View>
  )
}

