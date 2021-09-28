import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    photo: string;
}

export function MenuButton({ title, photo, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
            activeOpacity={0.5}
        >
            <Image
                source={require(photo)}
                style={styles.Image}
            />
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },

    text: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.heading,
        paddingHorizontal: '5%'
    },

    Image: {}
})