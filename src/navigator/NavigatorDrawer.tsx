import React from 'react';
import { useWindowDimensions, Image, View, Alert, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ColorPalette } from '../constants';
import { styles } from '../theme/appTheme';

import { Tabs } from './Tabs';

import { RootDrawerParams } from '../models/StackNavigator';
import { ProfileScreen, SettingsScreen } from '../screens';

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
        // drawerStyle: {
        //   // backgroundColor: ColorPalette.primaryColor,
        //   width: 255,
        // },
      }}
      drawerContent = { (props) => <DrawerContent {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
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
          source={ { uri: 'https://i.postimg.cc/D051zVGh/JM-Profile-Picture.jpg' } }
          style={styles.avatar}
        />
        <View style={ styles.avatarDescription }>
          <Text style={ styles.avatarName }>Jesus Monge</Text>
          <View style={{...drawerStyles.drawerBtn, justifyContent: 'space-between'}}>
            <Text style={ styles.avatarEmail }>jesus@jmongedev.com</Text>
            <Icon name='chevron-down-outline' color={ColorPalette.primaryColor} size={16}/>
          </View>
        </View>
      </View>

        {/* Default components */}
        {/* <DrawerItemList {...props} /> */}
        {/* <DrawerItem 
          label='Profile'
          onPress={() => Alert.alert('Profile Page')}
        /> */}

        {/* Custom */}
        <View style={ drawerStyles.drawerList }>
          
          <TouchableOpacity 
            onPress={ () => { navigation.navigate('Tabs') }}
            style={ drawerStyles.drawerBtn }>
              <Icon name='copy-outline' color={ColorPalette.primaryColor} size={16}/>
            <Text style={ drawerStyles.drawerLabel }>Tabs</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => { navigation.navigate('ProfileScreen') }}
            style={ drawerStyles.drawerBtn }>
            <Icon name='person-outline' color={ColorPalette.primaryColor} size={16}/>
            <Text style={ drawerStyles.drawerLabel }>My Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => Alert.alert('Blog Page')}
            style={ drawerStyles.drawerBtn }>
            <Icon name='book-outline' color={ColorPalette.primaryColor} size={16}/>
            <Text style={ drawerStyles.drawerLabel }>Blog</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => Alert.alert('Portfolio Page')}
            style={ drawerStyles.drawerBtn }>
            <Icon name='briefcase-outline' color={ColorPalette.primaryColor} size={16}/>
            <Text style={ drawerStyles.drawerLabel }>Portfolio</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => Alert.alert('Contact Page')}
            style={ drawerStyles.drawerBtn }>
            <Icon name='people-outline' color={ColorPalette.primaryColor} size={16}/>
            <Text style={ drawerStyles.drawerLabel }>Contact</Text>
          </TouchableOpacity>

        </View>
        
        {/* Drawer's footer */}
        <View style={ drawerStyles.drawerFooter }>  

          <View style={ drawerStyles.drawerList }>

            <TouchableOpacity 
              onPress={ () => { navigation.navigate('SettingsStackScreen') }}
              style={ drawerStyles.drawerBtn }>
              <Icon name='settings-outline' color={ColorPalette.primaryColor} size={16}/>
              <Text style={ drawerStyles.drawerLabel }>Settings & account</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => Alert.alert('Help & feedback')}
              style={ drawerStyles.drawerBtn }>
              <Icon name='help-circle-outline' color={ColorPalette.primaryColor} size={16}/>
              <Text style={ drawerStyles.drawerLabel }>Help & feedback</Text>
            </TouchableOpacity>

          </View>

        </View>


    </DrawerContentScrollView>


  )
}

const drawerStyles = StyleSheet.create({
  drawer: {
    marginHorizontal: 30,
  },
  drawerList: {
    marginVertical: 20,
  },
  drawerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  drawerLabel: {
    marginLeft: 16,
    fontSize: 16,
  },
  drawerFooter: {
    borderTopWidth: 1,
    borderTopColor: '#c3c3c3',
  }
});