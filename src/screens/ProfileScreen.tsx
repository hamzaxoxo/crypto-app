import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ProfileStyles } from "../styles/ProfileStyle";

const ProfileScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate("Login" as never);
    };

    return (
        <View style={ProfileStyles.container}>
            <TouchableOpacity style={ProfileStyles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={24} color="#fff" />
                <Text style={ProfileStyles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

