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
import metal from '../assets/metal.png';
import papel from '../assets/papel.png';
import plastico from '../assets/plastico.png';
import vidro from '../assets/vidro.png';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';


export function CategoriaColetor() {
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

            <View style={styles.boxHeader}>
                <Text style={styles.title}>
                    Categorias {'\n'}
                </Text>

            </View>

            <View style={styles.wrapper}>

                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/papel.png')}
                        style={styles.ImageIconStyle1}
                    />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>

                    <Image
                        source={require('../../assets/metal.png')}
                        style={styles.ImageIconStyle2}
                    />

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                        source={require('../../assets/vidro.png')}
                        style={styles.ImageIconStyle3}
                    />

                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={touchInit4}
                >
                    <Image
                        source={require('../../assets/plastico.png')}
                        style={styles.ImageIconStyle4}
                    />

                </TouchableOpacity>

            </View>

            <View style={styles.boxBackButton}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.5}
                //onPress={}

                >
                    <FontAwesome5
                        name="arrow-alt-circle-left"
                        style={styles.backButtonIcon}

                    />

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
        backgroundColor: colors.gray,
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
    },
})