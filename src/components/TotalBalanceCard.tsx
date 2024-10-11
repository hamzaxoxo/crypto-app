import React, { useEffect, useRef } from 'react';
import { Image, Text, View, Animated } from 'react-native';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import { TotalBalanceCardProps } from '../types/type';

export default function TotalBalanceCard({ balance, pnlBalance, image }: TotalBalanceCardProps) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
        }}>
            <View style={ProfileScreenStyles.portfolioDetails}>
                <Text style={ProfileScreenStyles.total}>
                    {balance}
                </Text>
                <Text style={ProfileScreenStyles.pnl}>{pnlBalance}</Text>
            </View>
            {image ? (
                <View style={{ position: 'relative' }}>
                    <View style={{
                        width: 72,
                        height: 72,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#1B1C24',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../assets/icons/btc.png')} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }} />
                    </View>
                </View>
            ) : null}
        </View>
    );
}
