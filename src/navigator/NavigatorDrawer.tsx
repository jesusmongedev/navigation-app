import React from 'react';
import { useWindowDimensions, Image, View, Alert, Text, StyleSheet } from 'react-native';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';

import SettingsScreen from '../screens/SettingsScreen';
import { ColorPalette } from '../constants';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileScreen from '../screens/ProfileScreen';
import { RootDrawerParams } from '../models/StackNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export const NavigatorDrawer = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions = {{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: width >= 768 ? false : true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: ColorPalette.primaryColor
        },
        drawerStyle: {
          // backgroundColor: ColorPalette.primaryColor,
          width: 255,
        },
      }}
      drawerContent = { (props) => <DrawerContent {...props} /> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsStackScreen" component={SettingsStackScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( props: DrawerContentComponentProps ) => {

  const { navigation } = props

  return (

    <DrawerContentScrollView style={drawerStyles.drawer}>

      {/* Avatar section */}
      <View style={ styles.avatarContainer }>
        <Image
          source={ { uri: 'https://lookgoodlive.com/wp-content/uploads/2021/03/Profile_avatar_placeholder_large.png' } }
          style={styles.avatar}
        />
        <View style={ styles.avatarDescription }>
          <Text style={ styles.avatarName }>Jesus Monge</Text>
          <Text style={ styles.avatarEmail }>jesus@jmongedev.com</Text>
        </View>
      </View>

        {/* Default components */}
        {/* <DrawerItemList {...props} />
        <DrawerItem 
          label='Profile'
          onPress={() => Alert.alert('Profile Page')}
        /> */}

        {/* Custom */}
        <View style={ drawerStyles.drawerList }>

          <TouchableOpacity 
            onPress={ () => { navigation.navigate('StackNavigator') }}
            style={ drawerStyles.drawerBtn }>
            <Text style={ drawerStyles.drawerLabel }>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => { navigation.navigate('ProfileScreen') }}
            style={ drawerStyles.drawerBtn }>
            <Text style={ drawerStyles.drawerLabel }>My Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => Alert.alert('Blog Page')}
            style={ drawerStyles.drawerBtn }>
            <Text style={ drawerStyles.drawerLabel }>Blog</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => Alert.alert('Blog Page')}
            style={ drawerStyles.drawerBtn }>
            <Text style={ drawerStyles.drawerLabel }>Portfolio</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => Alert.alert('Blog Page')}
            style={ drawerStyles.drawerBtn }>
            <Text style={ drawerStyles.drawerLabel }>Contact</Text>
          </TouchableOpacity>

        </View>
        
        {/* Drawer's footer */}
        <View style={ drawerStyles.drawerFooter }>  

          <View style={ drawerStyles.drawerList }>

            <TouchableOpacity 
              onPress={ () => { navigation.navigate('SettingsStackScreen') }}
              style={ drawerStyles.drawerBtn }>
              <Text style={ drawerStyles.drawerLabel }>Settings & account</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => Alert.alert('Help & feedback')}
              style={ drawerStyles.drawerBtn }>
              <Text style={ drawerStyles.drawerLabel }>Help & feedback</Text>
            </TouchableOpacity>

          </View>

        </View>


    </DrawerContentScrollView>


  )
}

const drawerStyles = StyleSheet.create({
  drawer: {
    marginHorizontal: 20,
  },
  drawerList: {
    marginVertical: 20,
  },
  drawerBtn: {
    marginVertical: 5
  },
  drawerLabel: {
    fontSize: 16,
  },
  drawerFooter: {
    borderTopWidth: 1,
    borderTopColor: '#c3c3c3',
  }
});