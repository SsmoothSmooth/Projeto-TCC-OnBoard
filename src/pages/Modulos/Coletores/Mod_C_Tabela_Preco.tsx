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

    function touchpreco() {
        navigation.navigate('Mod_C_Tabela')
    }
    
    function touchpreco3() {
        navigation.navigate('Mod_C_Tabela3')
    }

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

                <View style={styles.boxItemButton}>

                    <Button
                        style={styles.itemButton}
                        title=" Coop. recicle"
                        onPress={touchpreco}
                        
                    />

                    <Button
                        style={styles.itemButton}
                        title=" Coop.recicle 2"
                        
                    />

                    <Button
                        style={styles.itemButton}
                        title=" Coop.recicle 3"
                        onPress={touchpreco3}
                    />

                    <Button
                        style={styles.itemButton}
                        title=" Coop.recicle 4"
                     
                    />

                </View>

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.button}
                        title="Inicio"
                        onPress = {touchInicio}

                    />

                    <NavBar
                        style={styles.button}
                        title="Menu"
                        onPress= {touchMenu}
                    />

                    <NavBar
                        style={styles.button}
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
        justifyContent: 'space-around',
        backgroundColor: 'white',
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


    boxItemButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    itemButton: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    },

    boxButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: colors.gray
    },

    button: {
        backgroundColor: colors.green_cyan,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
    },
   
})

