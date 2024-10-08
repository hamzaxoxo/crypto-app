import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
});