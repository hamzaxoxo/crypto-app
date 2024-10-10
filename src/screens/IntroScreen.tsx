import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Logo from '../assets/icons/Logo';
import Button from '../components/Button';
import { IntroScreenStyles } from '../styles/IntroScreenStyles';
import { colors } from '../utils/colors';

const IntroScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={IntroScreenStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
            <Logo style={IntroScreenStyles.logo} />
            <View style={IntroScreenStyles.content}>
                <Text style={IntroScreenStyles.welcomeText}>Welcome to Coinapp</Text>
                <Text style={IntroScreenStyles.descriptionText}>
                    All your crypto transactions in one place! Track coins,
                    add portfolios, buy & sell.
                </Text>
                <Button
                    title="Sign In"
                    style={IntroScreenStyles.signInButton}
                    onPress={() => navigation.navigate("Home" as never)}
                />
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate("SignUp" as never)}
                    style={IntroScreenStyles.signUpButton}
                />
            </View>
        </View>
    );
};



export default IntroScreen;
