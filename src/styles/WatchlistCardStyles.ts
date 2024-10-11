import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export const WatchlistCardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.buttonSecondary,
        borderRadius: 12,
        padding: 16,
        margin: 10,
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
    },
    subtitle: {
        fontSize: 14,
        color: colors.darkGray,
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
});