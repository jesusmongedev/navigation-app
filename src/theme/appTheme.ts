import { StyleSheet } from "react-native";
import { ColorPalette } from "../constants";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 26,
        marginVertical: 14
    },
    largeButton: {
        padding: 20,
        backgroundColor: ColorPalette.primaryColor,
        borderRadius: 20,
    },
    secondaryButton: {
        backgroundColor: ColorPalette.secondaryColor,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
    avatarContainer: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#c3c3c3'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    avatarDescription: {
        marginVertical: 20,
    },
    avatarName: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    avatarEmail: {

    }
})