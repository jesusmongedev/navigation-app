import { StyleSheet } from "react-native";
import { ColorPalette } from "../constants";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',  
        flex: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: ColorPalette.primaryColor
    }
})