import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import mapa from '../assets/mapa.png';
import meusresultados from '../assets/meusresultados.png';
import pontosdevenda from '../assets/pontosdevenda.png';
import tabelasdepreco from '../assets/tabelasdepreco.png';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../components/Button';
import { CategoriaButton2 } from '../components/CategoriaButton2';


export function TelaMenuColetor() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Menu {'\n'}
                    </Text>

                </View>

                <View style={styles.ImageIconStyle1}>
                    <CategoriaButton2>
                        {mapa.ImageIconStyle1}
                    </CategoriaButton2>
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
        margin: 45
    },


    ImageIconStyle1: {
        padding: 10,
        margin: 5,
        height: 93,
        width: 93,
        resizeMode: 'stretch',

    },

    ImageIconStyle2: {
        padding: 10,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'contain',

    },

    ImageIconStyle3: {
        padding: 10,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },

    ImageIconStyle4: {
        padding: 10,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },

    boxInput: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '15%',
        paddingVertical: 30

    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: '10%'
    },

    wrapperButton: {
        width: '100%',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%'

    },

    boxBackButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: '10%',
    },

    backButton: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    backButtonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }


})

