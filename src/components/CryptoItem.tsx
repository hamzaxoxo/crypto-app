import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import Feather from 'react-native-vector-icons/Feather';
import CryptoModal from './CryptoModal';
import { CryptoItemStyles } from '../styles/CryptoItemStyle';

interface CryptoItemProps {
    name: string;
    symbol: string;
    price: string;
    percentChange: string;
    logoUrl: string;
    volume: string;
    market_cap_rank: number
    ath: string;
    marketCap: string;
    circulatingSupply: string;
    high24h: string;
    low24h: string;
}

const CryptoItem: React.FC<CryptoItemProps> = ({
    name,
    symbol,
    price,
    percentChange,
    logoUrl,
    volume,
    market_cap_rank,
    ath,
    marketCap,
    circulatingSupply,
    high24h,
    low24h,
}) => {
    const isPositive = parseFloat(percentChange) >= 0;
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <TouchableOpacity style={CryptoItemStyles.container} onPress={toggleModal}>
            <View style={CryptoItemStyles.logoContainer}>
                <Image source={{ uri: logoUrl }} style={CryptoItemStyles.logo} />
            </View>
            <View style={CryptoItemStyles.detailsContainer}>
                <Text style={CryptoItemStyles.name}>{name} </Text>
                <View style={CryptoItemStyles.symboleRankContainer}>
                    <Text style={CryptoItemStyles.symbol}>{symbol.toUpperCase()} </Text>
                    <Text style={CryptoItemStyles.rank}># {market_cap_rank}</Text>
                </View>
            </View>
            <View style={CryptoItemStyles.priceAndVolume}>
                <Text style={CryptoItemStyles.price}>
                    {price}
                </Text>
                <Text style={[CryptoItemStyles.change, isPositive ? CryptoItemStyles.up : CryptoItemStyles.down]}>
                    {isPositive ?
                        <Feather name='arrow-up-right' size={20} /> : <Feather name='arrow-down-right' size={20} />} {percentChange}%
                </Text>
            </View>
            <Modal isVisible={isModalVisible}>
                <CryptoModal
                    name={name}
                    symbol={symbol}
                    price={price}
                    volume={volume}
                    percentChange={percentChange}
                    marketCap={marketCap}
                    circulatingSupply={circulatingSupply}
                    ath={ath}
                    high24h={high24h}
                    low24h={low24h}
                    image={logoUrl}
                    toggleModal={toggleModal}
                />
            </Modal>
        </TouchableOpacity>
    );
};



export default CryptoItem;