import { Link, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Logo from '../assets/icons/Logo';
import Button from '../components/Button';
import { SignUpStyles } from '../styles/SignUpStyle';
import { colors } from '../utils/colors';
import { SignupSchema } from '../utils/validationSchema';

interface initialValues {
    fullName: string;
    email: string;
    password: string;
}
const SignUpScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);

    const initialValues: initialValues = {
        fullName: 'hamnza',
        email: 'hamza@gmail.com',
        password: '1234567879',
    };

    const handleSignUp = async (values: initialValues) => {
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            navigation.navigate('Home' as never);
        } catch (error) {
            console.log('Sign up error:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={SignUpStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handleSignUp}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <>
                        <View>
                            <View>
                                <View style={SignUpStyles.header}>
                                    <Button
                                        title="Sign In"
                                        onPress={() => navigation.navigate('Intro' as never)}
                                    />
                                    <Logo style={SignUpStyles.logo} />
                                    <EvilIcons
                                        name={'close'}
                                        size={24}
                                        color={colors.white}
                                        onPress={() => navigation.navigate('Intro' as never)}
                                    />
                                </View>

                                <Text style={SignUpStyles.title}>
                                    Let's create {'\n'}your account
                                </Text>

                                <TextInput
                                    style={[
                                        SignUpStyles.input,
                                        touched.fullName && errors.fullName
                                            ? { borderBottomColor: colors.error }
                                            : values.fullName
                                                ? SignUpStyles.inputFocused
                                                : SignUpStyles.inputBlurred,
                                    ]}
                                    placeholder="Enter your Full Name"
                                    placeholderTextColor={colors.inputColor}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                    selectionColor={colors.buttonPrimary}
                                />
                                {touched.fullName && errors.fullName ? (
                                    <Text style={SignUpStyles.errorText}>
                                        {errors.fullName}
                                    </Text>
                                ) : null}

                                <TextInput
                                    style={[
                                        SignUpStyles.input,
                                        touched.email && errors.email
                                            ? { borderBottomColor: colors.error }
                                            : values.email
                                                ? SignUpStyles.inputFocused
                                                : SignUpStyles.inputBlurred,
                                    ]}
                                    placeholder="Enter your email address"
                                    placeholderTextColor={colors.inputColor}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    selectionColor={colors.buttonPrimary}
                                />
                                {touched.email && errors.email ? (
                                    <Text style={SignUpStyles.errorText}>{errors.email}</Text>
                                ) : null}

                                <TextInput
                                    style={[
                                        SignUpStyles.input,
                                        touched.password && errors.password
                                            ? { borderBottomColor: colors.error }
                                            : values.password
                                                ? SignUpStyles.inputFocused
                                                : SignUpStyles.inputBlurred,
                                    ]}
                                    placeholder="Enter your password"
                                    placeholderTextColor={colors.inputColor}
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    selectionColor={colors.buttonPrimary}
                                />
                                {touched.password && errors.password ? (
                                    <Text style={SignUpStyles.errorText}>
                                        {errors.password}
                                    </Text>
                                ) : null}
                            </View>


                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link to={'/'} style={SignUpStyles.bottomText}>
                                By signing up you accept the Terms of Service &
                                {'\n'} Privacy Policy.
                            </Link>
                            <Button
                                title={'Sign Up'}
                                onPress={handleSubmit}
                                disabled={isLoading}
                                style={SignUpStyles.btn}
                                loading={isLoading}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
};



export default SignUpScreen;
