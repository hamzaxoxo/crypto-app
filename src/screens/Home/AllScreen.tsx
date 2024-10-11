import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'
import FireIcon from '../../assets/icons/FireIcon'
import CryptoCard from '../../components/CryptoCard'
import NFTCard from '../../components/NFTCard'
import WatchlistCard from '../../components/WatchlistCard'
import { getCoins } from '../../services/api'
import { CardProps } from '../../types/type'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function AllScreen() {
    const [data, setData] = React.useState<CardProps[]>([]);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const res = await getCoins(6);
            setData(res);
            setLoading(false);
        }
        fetchCoins();
    }, [])

    if (loading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.bg,
            }}>
                <ActivityIndicator animating={true} size="large" color={colors.white} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{ flexGrow: 1, backgroundColor: colors.bg, gap: 10 }}>
                <WatchlistCard />
                <View style={{
                    gap: 2,
                    display: 'flex',
                    paddingLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <FireIcon width='20px' height='20px' />
                    <Text style={{ color: colors.white, fontFamily: fonts.Bold, fontSize: 16, lineHeight: 20 }}>
                        Trending in Crypto</Text>
                </View>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item }) => (
                        <View>
                            <CryptoCard
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
                />
                <View style={{
                    gap: 5,
                    paddingLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <FireIcon width='20px' height='20px' />
                    <Text style={{ color: colors.white, fontFamily: fonts.Bold, fontSize: 16, lineHeight: 20 }}>
                        Trending NFT collections</Text>
                </View>
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
                />
            </View>
        </ScrollView>
    )
}
