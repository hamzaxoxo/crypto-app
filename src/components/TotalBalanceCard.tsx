import React, { useEffect, useRef } from 'react';
import { Image, Text, View, Animated } from 'react-native';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import { TotalBalanceCardProps } from '../types/type';

export default function TotalBalanceCard({ balance, pnlBalance, image }: TotalBalanceCardProps) {
    // Step 1: Create an Animated Value for the background
    const bounceAnim = useRef(new Animated.Value(1)).current;

    // Step 2: Define the bounce animation
    const startBounceAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.spring(bounceAnim, {
                    toValue: 1.2, // Scale up to 1.2
                    friction: 2,  // Spring effect
                    useNativeDriver: true, // Use native driver for better performance
                }),
                Animated.spring(bounceAnim, {
                    toValue: 1,   // Scale back to normal (1)
                    friction: 2,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    };

    // Step 3: Start animation on mount
    useEffect(() => {
        startBounceAnimation();
    }, []);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
        }}>
            <View style={ProfileScreenStyles.portfolioDetails}>
                <Text style={ProfileScreenStyles.total}>{balance}</Text>
                <Text style={ProfileScreenStyles.pnl}>{pnlBalance}</Text>
            </View>
            {image ? (
                <View style={{ position: 'relative' }}>
                    <Animated.View style={{
                        width: 72,
                        height: 72,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#1B1C24',
                        alignItems: 'center',
                        transform: [{ scale: bounceAnim }], 
                    }}>
                        <Image source={require('../assets/icons/btc.png')} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }} />
                    </Animated.View>
                </View>
            ) : null}
        </View>
    );
}
