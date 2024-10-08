import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const Logintyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        padding: 20,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.bg,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.Medium,
        lineHeight: 40,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderRadius: 10,
        backgroundColor: colors.inputColor,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: colors.secondary
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 10,
    },
    loginButtonWrapper: {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        marginTop: 20,
    },
    loginText: {
        color: colors.bg,
        fontSize: 20,
        fontFamily: fonts.Medium,
        textAlign: "center",
        padding: 10,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: colors.secondary,
        fontFamily: fonts.Regular,
    },
    signupText: {
        color: colors.white,
        textDecorationLine: 'underline',
        fontFamily: fonts.Bold,
    },
});