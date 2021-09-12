import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import mapa from '../assets/mapa.png';
import meusresultados from '../assets/meusresultados.png';
import pontosdevenda from '../assets/pontosdevenda.png';
import tabelasdepreco from '../assets/tabelasdepreco.png';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'


export function TelaMenuDomestico() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    function touchInit3() {
        navigation.navigate('')
    }

    function touchInit4() {
        navigation.navigate('TabelaPrecoColetor')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View>
                <Header />
            </View>

            <View style={styles.boxHeader}>
                <Text style={styles.title}>
                    Menu {'\n'}
                </Text>

            </View>

            <View style={styles.wrapper}>

                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/mapa.png')}
                        style={styles.ImageIconStyle1}
                    />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>

                    <Image
                        source={require('../../assets/meusresultados.png')}
                        style={styles.ImageIconStyle2}
                    />

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/pontosdevenda.png')}
                        style={styles.ImageIconStyle3}
                    />

                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={touchInit4}
                >
                    <Image
                        source={require('../../assets/tabelasdepreco.png')}
                        style={styles.ImageIconStyle4}
                    />

                </TouchableOpacity>

            </View>

            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttonInicio}>
                    <Text style={styles.buttonText}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonMenu}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPerfil}>
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    boxHeader: {
        backgroundColor: colors.green_cyan,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '10%',
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 38,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34

    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
        marginHorizontal: 40,

    },


    ImageIconStyle1: {
        padding: 20,
        paddingHorizontal: 20,
        marginVertical: 20,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    ImageIconStyle2: {
        padding: 20,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',

    },

    ImageIconStyle3: {
        padding: 20,
        paddingHorizontal: 20,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    ImageIconStyle4: {
        padding: 20,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    boxButton: {
        flex: 1,
        paddingVertical: '10%',
        marginTop: '70%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'flex-end',
        flexDirection: 'row'

    },

    buttonInicio: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonMenu: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonPerfil: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        textAlign: 'center',

    },
})
