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
import News from '../../assets/News.png';
import TabelasPrecoCooperativa from '../../assets/TabelasPrecoCooperativa.png';
import EventosCampanhas from '../../assets/EventosCampanhas.png';
import Notificações from '../../assets/Notificações.png';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'


export function TelaMenuCooperativa() {
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
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Menu {'\n'}
                    </Text>
                </View>



                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/News.png')}
                        style={styles.ImageIconStyle1}
                    />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>

                    <Image
                        source={require('../../assets/TabelasPrecoCooperativa.png')}
                        style={styles.ImageIconStyle2}
                    />

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/EventosCampanhas.png')}
                        style={styles.ImageIconStyle3}
                    />

                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={touchInit4}
                >
                    <Image
                        source={require('../../assets/Notificações.png')}
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

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 60,
        marginHorizontal: 35,
        marginTop: 10

    },

    headerStyle: {
        backgroundColor: colors.gray,

    },

    boxHeader: {

        width: '100%',
        justifyContent: 'center',

    },


    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 30,


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
        marginTop: '105%',
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
