import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';
interface SearchBarProps {
    // searchText?: string;
    // onSearchTextChange: (text: string) => void;
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <View style={styles.searchSection}>
            <Feather style={styles.searchIcon} name="search" size={20} color={colors.white} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                placeholderTextColor={colors.white}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonSecondary,
        padding: 5,
        borderRadius: 50,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.buttonSecondary,
        color: colors.white
    },
});

export default SearchBar;