import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const IntroScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    welcomeText: {
        color: colors.white,
        fontSize: 32,
        fontFamily: fonts.Bold,
        marginBottom: 10,
    },
    descriptionText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.Light,
        textAlign: 'center',
        marginBottom: 20,
    },
    signInButton: {
        backgroundColor: colors.buttonPrimary,
        height: 50,
        width: 187,
        paddingHorizontal: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButton: {
        height: 50,
        width: 187,
        paddingHorizontal: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});