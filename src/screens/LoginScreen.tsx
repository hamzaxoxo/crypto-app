import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useDispatch } from 'react-redux';
import { Logintyles } from "../styles/LoginStyle";
import { colors } from "../utils/colors";
import { setEmail, setPassword } from "../lib/store/loginSlice";

const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [secureEntry, setSecureEntry] = useState(true);
    const [inpEmail, setInpEmail] = useState('');
    const [inpPassword, setInpPassword] = useState('');

    const handleLogin = () => {
        // dispatch(setEmail(inpEmail));
        // dispatch(setPassword(inpPassword));
        navigation.navigate("Home" as never);
    };

    return (
        <View style={Logintyles.container}>
            <View style={Logintyles.textContainer}>
                <Text style={Logintyles.headingText}>Hey,</Text>
                <Text style={Logintyles.headingText}>Welcome</Text>
                <Text style={Logintyles.headingText}>Back</Text>
            </View>
            <View style={Logintyles.formContainer}>
                <View style={Logintyles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={20} color={colors.secondary} />
                    <TextInput
                        style={Logintyles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={'#e2e2e2'}
                        keyboardType="email-address"
                        value={inpEmail}
                        onChangeText={setInpEmail}
                    />
                </View>
                <View style={Logintyles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={20} color={colors.secondary} />
                    <TextInput
                        style={Logintyles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor={'#e2e2e2'}
                        secureTextEntry={secureEntry}
                        value={inpPassword}
                        onChangeText={setInpPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                        <Ionicons
                            name={secureEntry ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color={colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={Logintyles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Logintyles.loginButtonWrapper}
                    onPress={handleLogin}
                >
                    <Text style={Logintyles.loginText}>Login</Text>
                </TouchableOpacity>
                <View style={Logintyles.footerContainer}>
                    <Text style={Logintyles.accountText}>Don’t have an account?</Text>
                    <TouchableOpacity>
                        <Text style={Logintyles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;