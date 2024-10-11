import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import Button from '../components/Button';
import CryptoItem from '../components/CryptoItem';
import HeaderOne from '../components/HeaderOne';
import TotalBalanceCard from '../components/TotalBalanceCard';
import { cryptoItems } from '../lib/cryptoItems';
import { usdFormatter } from '../services/CurrencyFormatter';
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import { colors } from '../utils/colors';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [filteredData, setFilteredData] = React.useState(cryptoItems);
    const [totalBalance, setTotalBalance] = React.useState('0.00');

    const countingTotalBalance = () => {
        let balance: (string | undefined)[] = [];

        cryptoItems.forEach(item => {
            balance.push(item.currentPrice);
        });
        const sumBalance = balance.reduce<number>((a, b) => {
            const parsedValue = parseFloat(b ?? "0");
            return a + (isNaN(parsedValue) ? 0 : parsedValue);
        }, 0);

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

            <HeaderOne title='My Porfolio' />

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
