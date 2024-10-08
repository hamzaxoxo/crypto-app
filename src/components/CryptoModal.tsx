import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils/colors';
export default function CryptoModal({
    name,
    symbol,
    price,
    volume,
    percentChange,
    marketCap,
    circulatingSupply,
    ath,
    high24h,
    low24h,
    image,
    toggleModal,
}: {
    name: string,
    symbol: string,
    price: string,
    volume: string,
    percentChange: string,
    marketCap: string,
    circulatingSupply: string,
    ath: string,
    high24h: string,
    low24h: string,
    image: string,
    toggleModal: () => void,
}) {

    const isPositiveChange = parseFloat(percentChange) >= 0;
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalContent}>

                <Image source={{ uri: image }} style={styles.cryptoImage} />

                <Text style={styles.cryptoName}>{name} ({symbol.toUpperCase()})</Text>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Price:</Text>
                    <Text style={styles.value}>{price}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Volume:</Text>
                    <Text style={styles.value}>{volume}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Market Cap:</Text>
                    <Text style={styles.value}>{marketCap}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Circulating Supply:</Text>
                    <Text style={styles.value}>{circulatingSupply}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>24h High:</Text>
                    <Text style={styles.value}>{high24h}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>24h Low:</Text>
                    <Text style={styles.value}>{low24h}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>All-Time High (ATH):</Text>
                    <Text style={styles.value}>{ath}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>24h Change:</Text>
                    <Text style={[styles.change, isPositiveChange ? styles.up : styles.down]}>
                        {isPositiveChange ?
                            <Feather name='arrow-up-right' size={20} /> : <Feather name='arrow-down-right' size={20} />} {percentChange}%
                    </Text>
                </View>

                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                    <Icon name="close" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: colors.feild,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        alignItems: 'center',
        width: '90%',
        shadowColor: '#cecece',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        position: 'relative'
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
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    cryptoImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    cryptoName: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'center',
        color: colors.Text,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.gray,
    },
});
