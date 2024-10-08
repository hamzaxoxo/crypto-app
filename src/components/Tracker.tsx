import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Tracker = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Price and Balance Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Ethereum Price</Text>
                    <Text style={styles.price}>$1,687.17</Text>
                    <Text style={styles.priceChange}>↑ $106.69 (6.75%)</Text>
                </View>
                <TouchableOpacity style={styles.watchButton}>
                    <Text style={styles.watchText}>Watch</Text>
                </TouchableOpacity>
            </View>

            {/* Price Chart */}
            <LineChart
                data={{
                    labels: ['1H', '1D', '1W', '1M', '1Y', 'All'],
                    datasets: [
                        {
                            data: [1600, 1620, 1650, 1700, 1600, 1687],
                        },
                    ],
                }}
                width={width - 40} // from react-native
                height={220}
                yAxisLabel="$"
                chartConfig={{
                    backgroundColor: '#000',
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#08130D',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                bezier
                style={styles.chart}
            />

            {/* Balance */}
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Your balance</Text>
                <Text style={styles.balanceValue}>0.000000 ETH</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actions}>
                <ActionButton title="Buy" />
                <ActionButton title="Swap" />
                <ActionButton title="Bridge" />
                <ActionButton title="Send" />
                <ActionButton title="Receive" />
            </View>

            {/* About Ethereum */}
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About Ethereum</Text>
                <Text style={styles.aboutDescription}>
                    Ethereum is a decentralized computing platform that uses ETH (also called ETHER) to pay transaction fees (or "Gas").
                </Text>
            </View>
        </ScrollView>
    );
};

const ActionButton = ({ title = "Ethereum" }) => {
    return (
        <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    priceChange: {
        color: '#00ff00',
        fontSize: 16,
    },
    watchButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    watchText: {
        color: '#fff',
        fontSize: 16,
    },
    chart: {
        marginVertical: 20,
        borderRadius: 16,
    },
    balanceContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    balanceLabel: {
        color: '#888',
        fontSize: 14,
    },
    balanceValue: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    actionButton: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    aboutContainer: {
        paddingVertical: 20,
    },
    aboutTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    aboutDescription: {
        color: '#888',
        fontSize: 14,
    },
});

export default Tracker;
