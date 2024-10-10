import React from 'react';
import { TouchableHighlight, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { ButtonProps } from '../types/type';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Button = ({ onPress, title, style, textStyle, disabled, loading }: ButtonProps) => {
    return (
        <TouchableHighlight
            style={[styles.button, style, disabled || loading ? styles.disabled : null]}
            disabled={disabled || loading}
            onPress={onPress}
        >
            {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
            ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {typeof title === 'string' ? (
                        <Text style={[styles.text, textStyle]}>{title}</Text>
                    ) : (
                        title 
                    )}
                </View>
            )}
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5, 
    },
    text: {
        color: colors.white,
        fontFamily: fonts.SemiBold,
    },
    disabled: {
        backgroundColor: colors.btndisabled,
    }
});

export default Button;
