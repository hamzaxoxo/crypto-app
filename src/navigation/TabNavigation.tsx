import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailedScreen from '../screens/DetailedScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from '../types/type';
import BottomTabNavigator from './BottomTabNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigation(): React.JSX.Element {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Detailed" component={DetailedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default TabNavigation;
