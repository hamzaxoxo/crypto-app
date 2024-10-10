import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import CryptoItem from '../components/CryptoItem';
import { cryptoItems } from '../lib/cryptoItems';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import { colors } from '../utils/colors';
import TotalBalanceCard from '../components/TotalBalanceCard';
import { usdFormatter } from '../services/CurrencyFormatter';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [filteredData, setFilteredData] = React.useState(cryptoItems);
    const [totalBalance, setTotalBalance] = React.useState('0.00');
    
    const countingTotalBalance = () => {
        let balance: (string | undefined)[] = []
        cryptoItems.forEach(item => {
            balance.push(item.currentPrice);
        });

        const sumBalance = balance.reduce((a, b) => {
            return parseFloat(a) + parseFloat(b);
        }, 0)

        setTotalBalance(sumBalance.toFixed(2));

    }

    useEffect(() => {
        countingTotalBalance();
    }, []);

    const filterDataWithHighestHoldings = () => {
        const highestHoldings = [...cryptoItems].sort((a: any, b: any) => b.currentPrice - a.currentPrice);
        setFilteredData(highestHoldings);
    };

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

            <TotalBalanceCard balance={usdFormatter.format(parseFloat(totalBalance))} pnlBalance={'+ $248.23 (+0.35)'} image={false} />

            <View style={ProfileScreenStyles.buttonsContainer}>
                <Button
                    title='Highest holdings'
                    style={ProfileScreenStyles.button}
                    onPress={filterDataWithHighestHoldings}
                />
                <Button
                    title='24 Hours'
                    style={ProfileScreenStyles.button}
                />
            </View>
            <View style={{
                marginTop: 40,
                marginHorizontal: 10
            }}>
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => (
                        <CryptoItem
                            id={item.id}
                            name={item.name}
                            currentPrice={item.currentPrice}
                            percent24hr={item.percent24hr}
                            imageURL={item.imageURL}
                            pnl={item.pnl}
                            symbol={item.symbol}
                        />
                    )}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    );
};


export default ProfileScreen;
