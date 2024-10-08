import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './lib/store/store';
import IntroScreen from './screens/IntroScreen';
import SignUpScreen from './screens/SignUpScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />

            <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

export default App;
