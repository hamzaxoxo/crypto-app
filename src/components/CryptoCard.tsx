import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardProps, RootStackParamList } from '../types/type';
import { usdFormatter } from '../services/CurrencyFormatter';
import { CryptoItemStyles } from '../styles/CryptoItemStyle';

const CryptoCard = ({ title, symbol, current_price, price_change_percentage_24h, image }: CardProps
) => {
    const isPositive = price_change_percentage_24h >= 0;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <TouchableOpacity style={CryptoCardStyles.card} onPress={() => navigation.navigate("Detailed", { title, symbol })}>
            <View>
                <Image
                    source={{ uri: image }}
                    style={CryptoCardStyles.icon}
                />
            </View>
            <View style={CryptoCardStyles.infoContainer}>
                <Text style={CryptoCardStyles.title}>{symbol.toUpperCase()}</Text>
                <Text style={CryptoCardStyles.price}>
                    {usdFormatter.format(current_price)}
                </Text>
            </View>
            <Text style={[CryptoCardStyles.change, , isPositive ? CryptoItemStyles.up : CryptoItemStyles.down]}>
                <Feather
                    name={'arrow-up-right'}
                    size={24}
                    color={isPositive ? colors.success : colors.error}
                />
                {price_change_percentage_24h.toFixed(1)}%</Text>
        </TouchableOpacity>
    );
};

const CryptoCardStyles = StyleSheet.create({
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

export default CryptoCard;
