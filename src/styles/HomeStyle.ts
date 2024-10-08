import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2421',
        paddingHorizontal: 10,
    },
    list: {
        paddingBottom: 10,
    },
    errorWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    loadData:{
        color: colors.error,
        fontSize: 16,
        textAlign: 'center',
    },
    loadContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A2421',
    }
});