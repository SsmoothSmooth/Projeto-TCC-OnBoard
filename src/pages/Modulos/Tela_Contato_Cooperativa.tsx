import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../components/ModHeader';
import { NavBar } from '../../components/NavBar';
import fonts from '../../styles/fonts';
import { ScrollView } from 'react-native-gesture-handler';


export function Tela_Contato_Cooperativa() {

    const navigation = useNavigation();

    function touchNew() {
        navigation.navigate('Mod_Coop_Feed')
    }


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
                        title="Contatos" />
                </View>

                <ScrollView style={styles.scrollview}>
                    <View style={styles.MenuButton}>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={touchNew}
                        >

                            <Image
                                source={require('../../assets/juliamorato.jpg')}
                                style={styles.ImageIconStyle1} />

                        </TouchableOpacity>

                        <Text style={styles.text}>
                            Júlia Morato
                        </Text>

                    </View>


                    <View style={styles.MenuButton}>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={touchNew}
                        >

                            <Image
                                source={require('../../assets/joão-paulo.jpg')}
                                style={styles.ImageIconStyle2} />

                        </TouchableOpacity>

                        <Text style={styles.text}>
                            João Paulo
                        </Text>

                    </View>

                </ScrollView>

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.buttonInicio}
                        title="Inicio"
                        onPress={touchInicio} />

                    <NavBar
                        style={styles.buttonMenu}
                        title="Menu"
                        onPress={touchMenu} />

                    <NavBar
                        style={styles.buttonPerfil}
                        title="Perfil" />
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
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '10%'
    },


    scrollview: {

        paddingHorizontal: '5%',
    },

    MenuButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        marginHorizontal: 20,
    },


    ImageIconStyle1: {
        padding: 20,
        paddingHorizontal: 20,
        marginVertical: 30,
        borderRadius: 100,
        margin: 15,
        height: 65,
        width: 65,
        justifyContent: 'flex-start'
    },

    ImageIconStyle2: {
        padding: 20,
        paddingHorizontal: 20,
        marginVertical: 30,
        borderRadius: 100,
        margin: 15,
        height: 65,
        width: 65,
        justifyContent: 'flex-start'
    },

    text: {
        fontSize: 22,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
        justifyContent: 'flex-start'
    },

    boxButton: {
        flex: 1,
        paddingVertical: '15%',
        marginTop: '10%',
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
})
