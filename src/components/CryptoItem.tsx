import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { CryptoItemStyles } from '../styles/CryptoItemStyle';
import { CryptoItems, RootStackParamList } from '../types/type';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationConfig } from 'react-native-screens/lib/typescript/native-stack/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const CryptoItem = ({
    name,
    currentPrice,
    percent24hr,
    imageURL,
    pnl,
    symbol
}: CryptoItems) => {
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const isPositive = parseFloat(percent24hr) >= 0;


    return (
        <TouchableOpacity style={CryptoItemStyles.container} onPress={() => navigate.navigate('Detailed', { name, symbol })}>
            <View style={CryptoItemStyles.logoContainer}>
                <Image source={{ uri: imageURL }} style={CryptoItemStyles.logo} />
            </View>
            <View style={CryptoItemStyles.detailsContainer}>
                <Text style={CryptoItemStyles.name}>{name} </Text>
                <View style={CryptoItemStyles.symboleRankContainer}>
                    <Text style={CryptoItemStyles.rank}>{pnl}</Text>
                </View>
            </View>
            <View style={CryptoItemStyles.priceAndVolume}>
                <Text style={CryptoItemStyles.price}>
                    ${currentPrice}
                </Text>
                <Text style={[CryptoItemStyles.change, isPositive ? CryptoItemStyles.up : CryptoItemStyles.down]}>
                    {isPositive ?
                        '+' : ''} ${percent24hr}%
                </Text>
            </View>
        </TouchableOpacity>
    );
};



export default CryptoItem;