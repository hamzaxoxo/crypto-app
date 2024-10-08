import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import CryptoItem from '../components/CryptoItem';
import SearchBar from '../components/SearchBar';
import { HomeStyles } from '../styles/HomeStyle';
import { useAppDispatch, useAppSelector } from '../lib/store/store';
import { getCryptoData } from '../lib/store/cryptoSlice';
import { CryptoData } from '../types/type';

const LIMIT = 10;

const HomeScreen: React.FC = () => {

  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.crypto.data);
  const cryptoStatus = useAppSelector((state) => state.crypto.status);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);

  if (cryptoStatus === 'failed') {
    return (
      <View style={HomeStyles.loadContainer}>
        <Text style={HomeStyles.loadData}>Failed to load data</Text>
      </View>
    )
  }

  if (cryptoStatus === 'loading') {
    return (
      <View style={HomeStyles.loadContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }
  function usdPrice(price: any) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <View style={HomeStyles.container}>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />
      <FlatList
        data={coins}
        renderItem={({ item }) => (
          <CryptoItem
            name={item.name}
            symbol={item.symbol}
            price={usdPrice(item.current_price)}
            percentChange={item.price_change_percentage_24h}
            logoUrl={item.image}
            volume={usdPrice(item.total_volume)}
            market_cap_rank={parseInt(item.market_cap_rank)}
            ath={usdPrice(item.ath)}
            marketCap={usdPrice(item.market_cap)}
            circulatingSupply={usdPrice(item.circulating_supply)}
            high24h={usdPrice(item.high_24h)}
            low24h={usdPrice(item.low_24h)}
          />
        )}
        keyExtractor={(item: CryptoData) => item.id}
        onEndReachedThreshold={0.1}
        contentContainerStyle={HomeStyles.list}
      />
    </View>
  );
};



export default HomeScreen;