import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import fonts from '../../../styles/fonts';
import { NavBar } from '../../../components/NavBar';

export function Mod_D_Tela_Resultados() {
    const navigation = useNavigation();

    function touchInicio() {
        navigation.navigate('Mod_D_Feed')
    }

    function touchMenu() {
        navigation.navigate('Mod_D_Menu')
    }

    function touchPerfil() {
        navigation.navigate('Mod_Coop_Perfil')
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Resultados"
                    />
                </View>

                <View>
                    <Text style={styles.subtitle}> Seus Resultados </Text>
                    <View style={styles.DescarteImagem}>
                        <Image source={require('../../../assets/Resultado.png')} />
                    </View>
                    <Text style={styles.subtitle}> Seus últimos descartes </Text>
                </View>

                <View style={styles.MenuButton}>

                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <Image
                            source={require('../../../assets/PapelResultados.png')}
                            style={styles.ImageIconStyle1}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                    >

                        <Image
                            source={require('../../../assets/VidroResultados.png')}
                            style={styles.ImageIconStyle2}
                        />

                    </TouchableOpacity>

                </View>

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.buttonInicio}
                        title="Inicio"
                        onPress={touchInicio}
                    />

                    <NavBar
                        style={styles.buttonMenu}
                        title="Menu"
                        onPress={touchMenu}

                    />

                    <NavBar
                        style={styles.buttonPerfil}
                        title="Perfil"
                        onPress={touchPerfil}
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
        textAlign: 'center',
        fontSize: 15,
        color: colors.heading,
        fontFamily: fonts.heading,
        paddingRight: '50%',

    },

    MenuButton: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginHorizontal: 40,
        paddingBottom: 40
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

    boxButton: {
        flex: 1,
        paddingVertical: '8%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: '25%'
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

})
