import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Feather';
import HomeScreen from './TopTabNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import { tabBarActiveTintColor, tabBarLabelStyle, tabBarStyle } from '../styles/BottomNavStyle';
import TopTabNavigation from './TopTabNavigation';
import TransactionsScreen from '../screens/Home/TransactionsScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: tabBarStyle,
                tabBarActiveTintColor: colors.buttonPrimary,
                tabBarInactiveTintColor: tabBarActiveTintColor,
                tabBarLabelStyle: tabBarLabelStyle,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Top_Assets':
                            iconName = 'home';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.buttonPrimary : colors.inputColor} />;
                        case 'Transactions':
                            iconName = 'activity';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.buttonPrimary : colors.inputColor} />;
                        case 'Profile':
                            iconName = 'user';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.buttonPrimary : colors.inputColor} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Top_Assets" component={TopTabNavigation} options={{ headerShown: false }} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
