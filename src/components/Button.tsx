import React from 'react';
import { 
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
            activeOpacity={0.5}        
        >
            <Text style={styles.text}>
                { title } 
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green_cyan,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%'
    },

    text: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.heading,
    }
});