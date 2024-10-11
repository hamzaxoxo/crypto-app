import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const ProfileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.bg,
    },
    heading: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    portfolioDetails: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    total: {
        color: colors.white,
        fontSize: 32,
        fontWeight: 'bold',
    },
    pnl: {
        color: colors.success,
        fontSize: 16,
        marginTop: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        fontSize: 12,
        color: colors.white,
        backgroundColor: colors.buttonSecondary,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
});
