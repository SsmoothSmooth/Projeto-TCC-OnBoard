import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed(){
    return(
        <View style={style.title}>
        <View style={style.news}><Text>News</Text></View>
        <View style={style.buttons}><Text>Inicio Menu Perfil </Text></View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 75,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        fontFamily: fonts.heading,
        backgroundColor: colors.gray
    },

    news: {
        justifyContent: 'center',
        paddingVertical: 75,
        backgroundColor: colors.gray
    },

    buttons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 75,
        backgroundColor: colors.gray
    },

})