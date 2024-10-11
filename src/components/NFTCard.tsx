import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import axios from 'axios';
import { WatchlistCardStyles } from '../styles/WatchlistCardStyles';
import SpeedIcon from '../assets/icons/SpeedIcon';
import { usdFormatter } from '../services/CurrencyFormatter';
import Feather from 'react-native-vector-icons/Feather';
import { CardProps } from '../types/type';
const NFTCard = ({ title, symbol, current_price, price_change_percentage_24h, image }: CardProps
) => {
    const isPositive = price_change_percentage_24h >= 0;
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Image
                    source={{ uri: image }}
                    style={styles.icon}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}>
                <Text style={styles.price}>
                    {usdFormatter.format(current_price)}
                </Text>
                <Text style={[styles.change, , isPositive ? styles.up : styles.down]}>
                    <Feather
                        name={'arrow-up-right'}
                        size={24}
                        color={isPositive ? colors.success : colors.error}
                    />
                    {price_change_percentage_24h.toFixed(1)}%</Text>
            </View>
        </TouchableOpacity>
    );
};


export default NFTCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.buttonSecondary,
        borderRadius: 12,
        height: 75,
        marginHorizontal: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 40,
        height: 40,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        color: colors.white,
        lineHeight: 25,
    },
    symbol: {
        lineHeight: 25,
        fontSize: 16,
        fontFamily: fonts.Light,
        color: 'lightgray',
    },
    price: {
        lineHeight: 30,
        fontSize: 18,
        fontFamily: fonts.Medium,
        color: 'lightgray',
    },
    change: {
        lineHeight: 30,
        fontFamily: fonts.Medium,
        fontSize: 18,
    },
    up: {
        color: colors.success,
    },
    down: {
        color: colors.error,
    },

});