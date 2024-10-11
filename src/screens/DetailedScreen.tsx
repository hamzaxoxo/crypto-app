import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { colors } from '../utils/colors';
import { LinearGradient, Stop } from 'react-native-svg';
import { LineChart } from "react-native-gifted-charts"
import Chart from '../components/Chart';
import Button from '../components/Button';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import BarIcon from '../assets/icons/Bar';
import MaximizeIcon from '../assets/icons/MaximizeIcon';
import TotalBalanceCard from '../components/TotalBalanceCard';
import { fonts } from '../utils/fonts';

type DetailedScreenProps = {
    route: RouteProp<RootStackParamList, 'Detailed'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'Detailed'>;
};

const data = [
    {
        key: 'Portfolio',
        value: '41,375.00 BTC',
    },
    {
        key: 'Market Value',
        value: '$1,200.000.00',
    },
    {
        key: 'Net Cost',
        value: '$800.000.00',
    }
]

const DetailedScreen = ({ route, navigation }: DetailedScreenProps) => {
    const { title, symbol } = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${title} (${symbol.toUpperCase()})`,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 14,
            },
            headerStyle: {
                backgroundColor: colors.bg,
            },
            headerTintColor: colors.white,
        });
    }, [navigation, title]);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            <TotalBalanceCard balance='$24,634.06' pnlBalance={'+ $248.23 (+0.35)'} image={true} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
                marginBottom: 20,
                marginTop: 20,
            }}>
                {data.map((item, index) => (
                    <View key={index} style={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: fonts.ExtraLight,
                            fontSize: 12,
                        }}>
                            {item.key}
                        </Text>
                        <Text style={{
                            color: colors.white,
                            fontFamily: fonts.Bold,
                            fontSize: 12,
                        }}>
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={ProfileScreenStyles.buttonsContainer}>
                <Button
                    title='Global Average'
                    style={ProfileScreenStyles.button}
                />
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                }}>
                    <Button
                        title={<BarIcon width={15} height={15} />}
                        style={ProfileScreenStyles.button}
                    />
                    <Button
                        title={<MaximizeIcon width={15} height={15} />}
                        style={ProfileScreenStyles.button}
                    />
                </View>
            </View>

            <Chart />
        </SafeAreaView>
    );
};

export default DetailedScreen;
