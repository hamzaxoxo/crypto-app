import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { CryptoItemStyles } from '../styles/CryptoItemStyle';
import { CryptoData, RootStackParamList } from '../types/type';
import { getCryptoIcon } from '../services/api'; // Assuming these are your API functions
import { usdFormatter } from '../services/CurrencyFormatter';

interface LatestCryptoItemsProps {
    id: number;
    name: string;
    symbol: string;
    quote: {
        USD: {
            price: number;
            percent_change_24h: number;
        };
    };
}

const LatestCryptoItems: React.FC<LatestCryptoItemsProps> = ({ id, name, symbol, quote }) => {
    const { percent_change_24h, price } = quote?.USD;
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [cryptoName, setCryptoName] = useState<string>(name);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const [cryptoIcon] = await Promise.all([
                    getCryptoIcon(id),
                ]);

                setImageURL(cryptoIcon);
            } catch (error) {
                setError('Failed to load data');
                console.error('Error fetching crypto data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCryptoData();
    }, [id]);

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const isPositive = parseFloat(percent_change_24h) >= 0;



    if (isLoading) {
        return (
            <View style={CryptoItemStyles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={CryptoItemStyles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity
            style={CryptoItemStyles.container}
            onPress={() => navigate.navigate('Detailed', { name: cryptoName })}
        >
            <View style={CryptoItemStyles.logoContainer}>
                <Image
                    source={imageURL ? { uri: imageURL } : require('../assets/icons/Logo')}
                    style={CryptoItemStyles.logo}
                />
            </View>
            <View style={CryptoItemStyles.detailsContainer}>
                <Text style={CryptoItemStyles.name}>{name}</Text>
                <View style={CryptoItemStyles.symboleRankContainer}>
                    <Text style={CryptoItemStyles.rank}>{symbol}</Text>
                </View>
            </View>
            <View style={CryptoItemStyles.priceAndVolume}>
                <Text style={CryptoItemStyles.price}>{usdFormatter.format(price)}</Text>
                <Text
                    style={[
                        CryptoItemStyles.change,
                        isPositive ? CryptoItemStyles.up : CryptoItemStyles.down,
                    ]}
                >
                    {isPositive ? '+' : ''}
                    {Math.trunc(percent_change_24h)}%
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default LatestCryptoItems;
