import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ColorPalette } from '../constants';
import { AuthContext } from '../context/AuthContext';

interface TouchableOpacityProps {
    iconName: string
}

export const TouchableIcon = ({ iconName }: TouchableOpacityProps) => {

  const { changeFavIcon } = useContext( AuthContext )

  return (
    <TouchableOpacity
      onPress={ () => changeFavIcon(iconName) }
    >
        <Icon name={ iconName } size={ 60 } color={ ColorPalette.primaryColor } />
    </TouchableOpacity>
  )
}
