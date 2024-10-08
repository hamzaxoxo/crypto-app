import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const SignUpStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.bg,
        padding: 20,
        marginTop: 20,
    },
    logo: {
        width: 25,
        height: 25,
    },
    title: {
        color: colors.white,
        fontFamily: fonts.Bold,
        lineHeight: 40,
        fontSize: 32,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.inputColor,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        color: colors.white,
    },
    inputFocused: {
        opacity: 1,
        borderBottomColor: colors.white,
    },
    inputBlurred: {
        opacity: 0.5,
    },
    errorText: {
        color: colors.error,
        marginLeft: 30,
        marginTop: -10,
    },
    bottomText: {
        color: colors.inputColor,
        opacity: 0.5,
        fontFamily: fonts.Regular,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: colors.buttonPrimary,
        height: 60,
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 0,
    },
});