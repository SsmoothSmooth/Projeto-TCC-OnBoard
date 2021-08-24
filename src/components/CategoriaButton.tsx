import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Image
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    image: string;
}

export function CategoriaButton({ image, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
            activeOpacity={0.5}
        >
            <Image
                source={require('Image')}
                style={styles.Image}
            />


        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green_cyan,
        height: 56,
        borderRadius: 16,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },

    text: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.heading,
    },


    Image: {
        padding: 10,
        margin: 5,
        height: 93,
        width: 93,
        resizeMode: 'stretch',
    },
});