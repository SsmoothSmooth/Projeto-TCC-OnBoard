import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../components/Button';
import { ModHeader } from '../../components/ModHeader';
import { NavBar } from '../../components/NavBar';

export function TelaNotificacoesCooperativas() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Notificações"
                    />
                </View>

                <View style={styles.ButtonMenu}>

                    <View >
                        <Button
                            style={styles.Button1}
                            title="Materiais para coleta"
                            onPress={touchInit}
                        />
                    </View>

                    <View>
                        <Button
                            style={styles.Button2}
                            title="contatos"
                            onPress={touchInit}
                        />
                    </View>

                </View>

                <View style={styles.boxButton}>

                    <NavBar
                        style={styles.buttonInicio}
                        title="Inicio"
                    />

                    <NavBar
                        style={styles.buttonMenu}
                        title="Menu"
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        marginHorizontal: 2,
        marginTop: '-5%'
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '10%',
        marginTop: '5%',
    },

    ButtonMenu: {
        flex: 1,
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        padding: 20
    },

    Button1: {
        backgroundColor: '#D9FCAC',
        height: 60,
        width: '120%',
        borderRadius: 60,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },

    Button2: {
        backgroundColor: '#D9FCAC',
        height: 60,
        width: '120%',
        borderRadius: 60,
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
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

    buttonText: {
        textAlign: 'center',

    },

})



