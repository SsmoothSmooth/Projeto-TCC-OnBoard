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
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import Vector from '../../assets/Vector.png'
import avaliacao from '../assets/avaliacao.png'


export function TabelaPrecoColetor() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.boxHeader}>
                <Text style={styles.title}>
                    Tabela de Preço {'\n'}
                </Text>
            </View>

            <View>
                <Text style={styles.subtitle}>
                    Cooperativa
                </Text>
            </View>

            <View style={styles.wrapper}>

                <View style={styles.Button}>
                    <Image source={Vector} />
                    <Text> Coop.recicle {'\n'} </Text>
                </View>

                <View style={styles.Button}>
                    <Image source={Vector} />
                    <Text> Coop.recicle 2 {'\n'} </Text>
                </View>

                <View style={styles.Button}>
                    <Image source={Vector} />
                    <Text> Coop.recicle 3 {'\n'} </Text>
                </View>

                <View style={styles.Button}>
                    <Image source={Vector} />
                    <Text> Coop.recicle 4 {'\n'} </Text>
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
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    boxHeader: {
        backgroundColor: colors.gray,
        justifyContent: 'center',

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

    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingHorizontal: 20

    },

    Button: {
        backgroundColor: colors.gray,
        flexDirection: 'row',
        height: 50,
        width: '90%',
        borderRadius: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingTop: 10,

    },

    boxButton: {
        flex: 1,
        paddingVertical: '10%',
        paddingHorizontal: '100%',
        marginTop: '50%',
        justifyContent: 'center',
        marginHorizontal: '30%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'center',
        flexDirection: 'row'

    },

    buttonInicio: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        marginHorizontal: 10,
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
        marginHorizontal: 10,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        textAlign: 'center',

    },

})

