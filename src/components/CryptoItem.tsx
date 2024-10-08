import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { CryptoItemStyles } from '../styles/CryptoItemStyle';
import { CryptoItem } from '../types/type';


const CryptoItem: React.FC<CryptoItem> = ({
    name,
    currentPrice,
    percent24hr,
    imageURL,
    pnl,
}) => {
    const isPositive = parseFloat(percent24hr) >= 0;
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <TouchableOpacity style={CryptoItemStyles.container} onPress={toggleModal}>
            <View style={CryptoItemStyles.logoContainer}>
                <Image source={{ uri: imageURL }} style={CryptoItemStyles.logo} />
            </View>
            <View style={CryptoItemStyles.detailsContainer}>
                <Text style={CryptoItemStyles.name}>{name} </Text>
                <View style={CryptoItemStyles.symboleRankContainer}>
                    <Text style={CryptoItemStyles.rank}># {pnl}</Text>
                </View>
            </View>
            <View style={CryptoItemStyles.priceAndVolume}>
                <Text style={CryptoItemStyles.price}>
                    {currentPrice}
                </Text>
                <Text style={[CryptoItemStyles.change, isPositive ? CryptoItemStyles.up : CryptoItemStyles.down]}>
                    {isPositive ?
                        <Feather name='arrow-up-right' size={20} /> : <Feather name='arrow-down-right' size={20} />} {percentChange}%
                </Text>
            </View>
        </TouchableOpacity>
    );
};



export default CryptoItem;