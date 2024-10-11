import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'
import NFTCard from '../../components/NFTCard'
import { getCoins } from '../../services/api'
import { CardProps } from '../../types/type'
import { colors } from '../../utils/colors'

export default function CryptoScreen() {
    const [data, setData] = React.useState<CardProps[]>([]);
    const [loading, setLoading] = React.useState(true);
    const POLLING_INTERVAL = 10000;
    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const res = await getCoins(100);
            setData(res);
            setLoading(false);
        }
        fetchCoins();
    }, [])
    return (
        <ScrollView style={{backgroundColor: colors.bg}}>
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={{
                    paddingVertical: 10,
                }}>
                    <NFTCard
                        title={item.name}
                        symbol={item.symbol}
                        current_price={item.current_price}
                        price_change_percentage_24h={item.price_change_percentage_24h}
                        image={item.image}
                        name={item.name}
                        id={item.id}
                    />
                </View>
            )}
            onEndReachedThreshold={0.1}
            keyExtractor={item => item.name}
            ListEmptyComponent={
                loading ? 
                <ActivityIndicator animating={true} color={colors.white} />
                :
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 20
                }}>
                   <Text>0 results</Text>
                </View>
              }
        />
        </ScrollView>
    )
}
