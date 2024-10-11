import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StatusBar, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import AllScreen from '../screens/Home/AllScreen';
import CryptoScreen from '../screens/Home/CryptoScreen';
import NFTScreen from '../screens/Home/NFTScreen';
import { colors } from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
  return (
    <View style={{
      flex: 1, backgroundColor: colors.bg,
    }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
      <SearchBar placeholder='Search for coins, tokens, and NFTs' />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.bg,
            width: '60%',
            height: 50,
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.lightGray,
          tabBarLabelStyle: {
            fontSize: 14, fontWeight: 'bold', height: 40, fontFamily: 'Poppins-Regular', textTransform: 'capitalize',
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.white, height: 3, alignSelf: 'center',
          },
        }}
      >
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Crypto" component={CryptoScreen} />
        <Tab.Screen name="NFT" component={NFTScreen} />
      </Tab.Navigator>
    </View>
  );
}
