
import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
export const CryptoItemStyles = StyleSheet.create({
    symboleRankContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#1B1B1B',
    },
    logoContainer: {
        marginRight: 10,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        color: '#FCD535',
        fontFamily: 'Poppins-Regular',
    },
    rank: {
        fontSize: 10,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        backgroundColor: colors.badge,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 4,
    },
    symbol: {
        fontSize: 14,
        color: '#FCD535',
        fontFamily: 'Poppins-Regular',
    },
    priceAndVolume: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 20,
        color: '#FCD535',
        fontFamily: 'Poppins-Regular',
    },
    change: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    up: {
        color: 'green',
    },
    down: {
        color: 'red',
    },
    modalContent: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});