import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import fonts from '../../../styles/fonts';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../../components/Button';

export function Mod_D_Tela_Descarte() {
    const navigation = useNavigation();

    function touchSalvar() {
        navigation.navigate('')
    }

    function touchBack() {
        navigation.navigate('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Descarte"
                    />

                </View>

                <View style={styles.backgroundColors}>
                    <View style={styles.DescarteImagem}>
                        <Image source={require('../../assets/DescartePapel.png')} />
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Papel {'\n'}
                    </Text>

                    <View style={styles.DescarteImagem}>
                        <Image source={require('../../assets/Volume.png')} />
                        <Text> Volume</Text>
                        <Text> {'\n'}</Text>
                        <Text> Pequena (até 2Kg) </Text>
                        <Text> Média (De 2Kg até 5Kg) </Text>
                        <Text> Grande (De 5Kg até 10Kg) {'\n'} </Text>
                    </View>

                </View>

                <View style={styles.ButtonMenu}>
                    <Button
                        style={styles.Button1}
                        title="Confirmar"
                        onPress={touchSalvar}
                    />
                </View>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '5%'
    },

    backgroundColors: {
        backgroundColor: colors.blue_linear,
        width: '100%'
    },

    DescarteImagem: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '5%',
        marginVertical: '5%',
    },

    subtitle: {
        textAlign: 'left',
        fontSize: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
        paddingRight: '70%'
    },

    boxInput: {
        width: '80%',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        paddingTop: '8%',
        flexWrap: 'wrap'
    },


    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },

    ButtonMenu: {
        flex: 1,
        height: '30%',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
    },

    Button1: {
        backgroundColor: colors.gray,
        height: 45,
        width: '80%',
        marginBottom: '10%',
        borderRadius: 60,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxBackButton: {
        flex: 1,
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingHorizontal: '43%',
        justifyContent: 'center',
        backgroundColor: colors.gray,
    },

    backButton: {
        backgroundColor: colors.green_cyan,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    backButtonIcon: {
        color: colors.black,
        fontSize: 20,

    },

})
