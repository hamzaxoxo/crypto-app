import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { tabBarActiveTintColor, tabBarLabelStyle, tabBarStyle } from '../styles/BottomNavStyle';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: tabBarStyle,
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: tabBarActiveTintColor,
                tabBarLabelStyle: tabBarLabelStyle,
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Top Assets':
                            iconName = 'home';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.secondary : colors.gray} />;
                        case 'Transactions':
                            iconName = 'activity';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.secondary : colors.gray} />;
                        case 'Profile':
                            iconName = 'user';
                            return <Ionicons name={iconName} size={24} color={focused ? colors.secondary : colors.gray} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Top Assets" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Transactions" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
