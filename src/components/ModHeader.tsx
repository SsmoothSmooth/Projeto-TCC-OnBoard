import React from 'react';
<<<<<<< HEAD
import {
=======
import{
>>>>>>> SmoothSmooth
    StyleSheet,
    Text,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface TextHeader {
    photo?: string;
    title: string;
<<<<<<< HEAD
    photo2?: string;

}

export function ModHeader({ title, ...rest }: TextHeader) {
=======
    photo2? : string;

}

export function ModHeader({ title, ...rest}: TextHeader) {
>>>>>>> SmoothSmooth
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
<<<<<<< HEAD
                    {title}
=======
                    { title }
>>>>>>> SmoothSmooth
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '10%',
<<<<<<< HEAD
        paddingVertical: 10,
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 30,
=======
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 40,
>>>>>>> SmoothSmooth
    },

});