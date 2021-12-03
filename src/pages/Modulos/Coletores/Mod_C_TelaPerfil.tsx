import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';
import colors from '../../../styles/colors';

export function Mod_C_TelaPerfil(){
    const navigation = useNavigation();

    // function touchAlteraSenha(){
    //     navigation.navigate('AlterarSenha')
    // }

    // function touchConfigurações(){
    //     navigation.navigate('Configurações')
    // }

    // function touchAjuda(){
    //     navigation.navigate('Ajuda')
    // }

    // function touchSair(){
    //     navigation.navigate('Login')
    // }

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

                <View style={styles.header}>
                <ModHeader
                    title="Perfil"
                 />
                </View>

                <View style={styles.boxButton}>
                    <Button
                        style={styles.button}
                        title="Alterar Senha" 
                    />


                    <Button
                        style={styles.button}
                        title="Configurações"
                    />

                    <Button
                        style={styles.button}
                        title="Ajuda"
                    />

                    <Button
                        style={styles.button}
                        title="Sair"
                    />
                </View>

                <View style={styles.boxDownbar}>
                    <NavBar
                        style={styles.dbar}
                        title="Inicio"
                        onPress={touchInicio}
                    />

                    <NavBar
                        style={styles.dbar}
                        title="Menu"
                        onPress={touchMenu}

                    />

                    <NavBar
                        style={styles.dbar}
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
        justifyContent: 'space-between',
        backgroundColor: 'white',
         
    },

    header: {
        width: '100%',
        paddingVertical: '2%',
        backgroundColor: colors.gray,
    },
    
    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    button: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    },

    boxDownbar: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        backgroundColor: colors.gray,
    },

    dbar: {
        backgroundColor: colors.green_cyan,
        height: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    }
})