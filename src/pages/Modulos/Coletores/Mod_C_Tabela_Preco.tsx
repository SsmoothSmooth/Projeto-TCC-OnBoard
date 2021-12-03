import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,


} from 'react-native';


import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';

export function Mod_C_Tabela_Preco() {
    const navigation = useNavigation();

    // Footer

    function touchInicio() {
        navigation.navigate('Mod_C_Feed')
    }

    function touchMenu() {
        navigation.navigate('Mod_C_Menu')
    }

    function touchPerfil() {
        navigation.navigate('Mod_C_TelaPerfil')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Tabelas de Preço"
                    />
                </View>


                <View>

                    <Text style={styles.subtitle}>
                        Cooperativa
                    </Text>

                </View>

                <View style={styles.BoxButton}>

                    <Button
                        style={styles.Button}
                        title=" Coop.recicle "
                        
                    />

                    <Button
                        style={styles.Button}
                        title=" Coop.recicle 2 "
                        
                    />

                    <Button
                        style={styles.Button}
                        title=" Coop.recicle 3 "
                        
                    />

                    <Button
                        style={styles.Button}
                        title=" Coop.recicle 4 "
                     
                    />

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
                        onPress= {touchPerfil}
                    />

                </View>

            </View>

        </SafeAreaView >
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
        margin: 10,
        marginHorizontal: 2,


    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '10%',
        marginTop: '5%',
        margin: '10%'
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

    BoxButton: {
        flex: 1,
        height: '55%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        padding: 30,

    },

    Button: {
        backgroundColor: colors.gray,
        height: 50,
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingTop: 10,
    },

    boxButton: {
        flex: 1,
        paddingVertical: '20%',
        paddingHorizontal: '100%',
        marginTop: '60%',
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

})

