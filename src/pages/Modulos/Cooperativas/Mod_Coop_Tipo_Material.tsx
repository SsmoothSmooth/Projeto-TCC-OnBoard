import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';


export function Mod_Coop_Tipo_Material() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    // Footer

    function touchInicio() {
        navigation.navigate('Mod_Coop_Feed')
    }

    function touchMenu() {
        navigation.navigate('Mod_Coop_Menu')
    }

    // function touchPerfil() {
    //     navigation.navigate('Mod_Coop_Perfil')
    // }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Materiais para Coleta"
                    />
                </View>

                <View style={styles.MenuButton}>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../assets/papel.png')}
                            style={styles.ImageIconStyle1}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>

                        <Image
                            source={require('../../../assets/metal.png')}
                            style={styles.ImageIconStyle2}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../assets/vidro.png')}
                            style={styles.ImageIconStyle3}
                        />

                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <Image
                            source={require('../../../assets/plastico.png')}
                            style={styles.ImageIconStyle4}
                        />

                    </TouchableOpacity>

                </View>

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.buttonInicio}
                        title="Inicio"
                        onPress = {touchInicio}
                    />

                    <NavBar
                        style={styles.buttonMenu}
                        title="Menu"
                        onPress = {touchMenu}
                    />

                    <NavBar
                        style={styles.buttonPerfil}
                        title="Perfil"
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
        justifyContent: 'space-around',
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

    MenuButton: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
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
        paddingHorizontal: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },

    buttonMenu: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },

    buttonPerfil: {
        backgroundColor: colors.green_cyan,
        width: 90,
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
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