import React from 'react';
import {
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
    photo2?: string;

}

export function ModHeader({ title, ...rest }: TextHeader) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {title}
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
        paddingVertical: 10,
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 30,
    },

});