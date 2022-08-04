import { StackScreenProps } from "@react-navigation/stack";
import { UserInterface } from "./user.model";

export type RootStackParams = {
    'Page1Screen': undefined, 
    'Page2Screen': undefined, 
    'Page3Screen': undefined, 
    'PersonScreen': UserInterface 
}

export interface StackProps extends StackScreenProps <RootStackParams, 'PersonScreen'>{};

export type RootDrawerParams = {
    'Tabs': undefined, 
    'SettingsStackScreen': undefined, 
    'ProfileScreen': undefined, 
}

export type BottomTabParams = {
    'Tab1Screen': undefined,
    'Tab2Screen': undefined,
    'StackNavigator': undefined
}