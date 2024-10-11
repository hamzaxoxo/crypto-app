import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const NFTCardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.buttonSecondary,
        width: 150,
        height: 150,
        borderRadius: 8,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 5,
        margin: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    title: {
        fontSize: 20,
        fontFamily: fonts.Bold,
        color: colors.white,
        lineHeight: 25,
    },
    price: {
        lineHeight: 25,
        fontSize: 16,
        fontFamily: fonts.Medium,
        color: 'lightgray',
    },
    change: {
        lineHeight: 30,
        fontFamily: fonts.Medium,
        fontSize: 27,
        color: colors.error,
    },
});
