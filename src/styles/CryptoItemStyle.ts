
import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
export const CryptoItemStyles = StyleSheet.create({
    symboleRankContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        // backgroundColor: '#1B1B1B',
    },
    logoContainer: {
        marginRight: 10,
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.Bold,
    },
    rank: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        paddingTop: 0,
        paddingBottom: 0,
        // paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 4,
        opacity: 0.5,
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
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.Bold,
    },
    change: {
        fontSize: 12,
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