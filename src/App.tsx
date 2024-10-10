import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/store/store';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DetailedScreen from './screens/DetailedScreen';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { RootStackParamList } from './types/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Detailed" component={DetailedScreen} options={{
            
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
