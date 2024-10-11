import React from 'react'
import { ProfileScreenStyles } from '../styles/ProfileStyles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { colors } from '../utils/colors';
export default function HeaderOne({ title }: { title: string }) {
    const navigation = useNavigation();
    return (
        <View style={ProfileScreenStyles.header}>
            <Feather
                name={'bar-chart-2'}
                size={24}
                color={colors.white}
                onPress={() => navigation.navigate('Intro' as never)}
            />
            <Text style={ProfileScreenStyles.heading}>{title}</Text>
            <MaterialCommunityIcons
                name={'dots-horizontal'}
                size={24}
                color={colors.white}
                onPress={() => navigation.navigate('Intro' as never)}
            />
        </View>
    )
}
