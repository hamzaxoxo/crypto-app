import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LogoSVG = () => {
    return (
        <View style={styles.container}>
            <Svg height="100" width="100" viewBox="0 0 108 95">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M99.1789 45.962C109.645 57.3876 109.648 74.9152 99.1869 86.345C94.3204 91.6681 87.4399 94.6996 80.2276 94.6984C73.0153 94.6973 66.1358 91.6636 61.2709 86.339C44.4439 68.439 62.0269 43.704 35.4709 38.053C31.0539 37.112 26.4809 35.828 23.3489 32.486C16.3659 24.8735 16.3625 13.1856 23.3409 5.569C26.5845 2.01967 31.1715 -0.00149819 35.9797 2.37471e-05C40.7879 0.00154568 45.3736 2.02562 48.6149 5.577C51.7539 8.923 52.9569 13.798 53.8389 18.495C59.1469 46.781 82.3779 28.043 99.1789 45.962Z"
                    fill="white"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.955 87.062C29.4236 87.062 37.91 79.1218 37.91 69.327C37.91 59.5322 29.4236 51.592 18.955 51.592C8.48644 51.592 0 59.5322 0 69.327C0 79.1218 8.48644 87.062 18.955 87.062Z"
                    fill="#0057FF"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default LogoSVG;
