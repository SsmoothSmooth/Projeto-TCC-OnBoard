import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';

export function TelaEventosCampanhas() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Eventos/ {'\n'}
                        Campanhas
                    </Text>
                </View>

                <View style={styles.wrapperMenu}>

                    <View>
                        <Button
                            style={styles.ButtonMenu}
                            title="criar novo Evento / Campanha "
                            onPress={touchInit}
                        />
                    </View>

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
        paddingTop: '10%',
        marginTop: '5%',

    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
        paddingVertical: 10

    },

    wrapperMenu: {
        flex: 1,
        flexDirection: 'column',
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20



    },

    ButtonMenu: {
        backgroundColor: '#D9FCAC',
        height: 80,
        width: '100%',
        borderRadius: 50,
        paddingTop: 5,
        paddingHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,


    },

    boxButton: {
        flex: 1,
        paddingVertical: '10%',
        paddingHorizontal: '100%',
        marginTop: '30%',
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



