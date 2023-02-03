import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { styles as screenStyles } from '../theme/TopTabScreenStyles';
import { AuthContext } from '../context/AuthContext';
import colors from '../constants/colors';

export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext);

  const { isLoggedIn, favoriteIcon, username  } = authState
    
  return (
    <View style={screenStyles.container}>

      {/* AuthState */}
      <Text> {JSON.stringify(authState, null, 4)} </Text>
      <Text style={screenStyles.text}> Settings Screen </Text>

      <View style={{alignItems: 'center', marginVertical: 8}}>
        <Icon
          name={
            isLoggedIn ? 'shield-checkmark-outline' : 'hand-left-outline'
          }
          size={40}
          color={colors.primaryColor}
        />
      </View>

      <Text style={styles.avatarName}>
        {isLoggedIn ? `Welcome Back! ${username}` : 'Please login'}
      </Text>

      {favoriteIcon && isLoggedIn && (
        <>
          <Text style={styles.avatarName}>Favorite Icon is: </Text>
          <Icon name={favoriteIcon} size={40} color={colors.primaryColor} />
        </>
      )}

    </View>
  );
}