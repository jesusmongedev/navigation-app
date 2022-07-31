import { useDrawerStatus } from '@react-navigation/drawer';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { usersList } from '../db/users';
import {StackProps} from '../models/StackNavigator';
import { styles } from '../theme/appTheme';

export const Page1Screen = ({navigation: {navigate}}: StackProps) => {

  const isDrawerOpen = useDrawerStatus()

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button title="Go to page 2" onPress={() => navigate('Page2Screen')} />

      <Text style={styles.title}>Passing params to routes</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={ { ...styles.largeButton, marginRight: 16 } }
          onPress={() => navigate('PersonScreen', usersList[0])}>

          <Text style={ styles.buttonText }> Jesus' Screen </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={ { ...styles.largeButton, ...styles.secondaryButton } }
          onPress={() => navigate('PersonScreen', usersList[1])}>

          <Text style={ styles.buttonText }> Fatima's Screen </Text>

        </TouchableOpacity>
      </View>

      <Text style={{...styles.title, left: '25%', top: 150}}> { `Drawer is: ${isDrawerOpen === 'closed' ? '❌' : '✅' }` } </Text>

    </View>
  );
};
