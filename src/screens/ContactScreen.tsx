import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/TopTabScreenStyles';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  const { login, logout, authState } = useContext(AuthContext);

  const { isLoggedIn } = authState;

  return (
    <View style={ styles.container }>
      <Text style={{...styles.text, marginBottom: 10 }}>ContactScreen</Text>

      { !isLoggedIn && <Button title='Login' onPress={ login } /> }

      { isLoggedIn && <Button title='Logout' onPress={ logout } /> }

    </View>  
  )
  
}

