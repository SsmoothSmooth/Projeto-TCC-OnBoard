import React from 'react';
import { Component } from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Image,
} from 'react-native';

import colors from '../styles/colors';
import mapa from '../assets/mapa.png';
import fonts from '../styles/fonts';

export default class CategoriaButton2 extends Component {

    render() {
        return (
            <Image source={require('../assets/mapa.png')} style={styles.Image}></Image>

        );
    }
}

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