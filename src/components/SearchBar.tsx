import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
interface SearchBarProps {
    searchText: string;
    onSearchTextChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, onSearchTextChange }) => {
    return (
        <View style={styles.container}>
            <Feather name='search' size={24} color='#888' />
            <TextInput
                style={styles.searchInput}
                placeholder="Search for crypto"
                placeholderTextColor="#cecece"
                value={searchText}
                onChangeText={(text) => onSearchTextChange(text)}
                 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.bg,
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 15,
        marginTop: 15,
        display: 'flex',
        paddingLeft: 15,
        flexDirection: 'row',

    },
    searchInput: {
        width: '90%',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        fontSize: 16,
    },
});

export default SearchBar;