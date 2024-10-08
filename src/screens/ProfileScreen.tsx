import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import CryptoItem from '../components/CryptoItem';
import { cryptoItems } from '../lib/cryptoItems';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import { colors } from '../utils/colors';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={ProfileScreenStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.bg} />

            <View style={ProfileScreenStyles.header}>
                <Feather
                    name={'bar-chart-2'}
                    size={24}
                    color={colors.white}
                    onPress={() => navigation.navigate('Intro' as never)}
                />
                <Text style={ProfileScreenStyles.heading}>My Portfolio</Text>
                <MaterialCommunityIcons
                    name={'dots-horizontal'}
                    size={24}
                    color={colors.white}
                    onPress={() => navigation.navigate('Intro' as never)}
                />
            </View>

            <View style={ProfileScreenStyles.portfolioDetails}>
                <Text style={ProfileScreenStyles.total}>$14,634.06</Text>
                <Text style={ProfileScreenStyles.pnl}>+ $248.23 (+0.35)</Text>
            </View>

            <View style={ProfileScreenStyles.buttonsContainer}>
                <Button
                    title='Highest holdings'
                    style={ProfileScreenStyles.button}
                />
                <Button
                    title='24 Hours'
                    style={ProfileScreenStyles.button}
                />
            </View>
            <FlatList
                data={cryptoItems}
                renderItem={({ item }) => (
                    <CryptoItem
                        name={item.name}
                        currentPrice={item.currentPrice}
                        percentChange={item.percent24hr}
                        logoUrl={item.imageURL}
                        pnl={item.pnl}
                    />
                )}
                keyExtractor={(item) => item.imageURL}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
};


export default ProfileScreen;
