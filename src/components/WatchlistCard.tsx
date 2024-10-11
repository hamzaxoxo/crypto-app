// WatchlistCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SpeedIcon from '../assets/icons/SpeedIcon';
import { colors } from '../utils/colors';
import { WatchlistCardStyles } from '../styles/WatchlistCardStyles';

const WatchlistCard = () => {
    return (
        <View style={WatchlistCardStyles.card}>
            <View style={WatchlistCardStyles.textContainer}>
                <Text style={WatchlistCardStyles.title}>Create a watchlist</Text>
                <Text style={WatchlistCardStyles.subtitle}>Get price alerts and stay up to date</Text>
            </View>
            <SpeedIcon />
        </View>
    );
};


export default WatchlistCard;
