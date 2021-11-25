import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import mapImg from '../../../assets/mapIcon.png';
import { NavBar } from '../../../components/NavBar';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';


export function Mod_D_Sacola() {
    const navigation = useNavigation();


     // Footer

     function touchInicio() {
        navigation.navigate('Mod_D_Feed')
    }

    function touchMenu() {
        navigation.navigate('Mod_D_Menu')
    }

    // function touchPerfil() {
    //     navigation.navigate('Mod_Coop_Perfil')
    // }



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                
            <View style={styles.boxHeader}>
                    <ModHeader
                        title="Sacola"
                    />
                </View>

                <Text style={styles.subtitle}>
                    Sacola de lixo
                </Text>

                <View style={styles.boxStreet}>
                    <Image source={mapImg} />
                    <Text >Local do descarte {'\n'} </Text>
                    <Text >Rua José Alvaro de Carvalho{'\n'}</Text>
                    <Text >Jardim dos Zés</Text>
                    <Text>Alterar</Text>
                </View>

                <Text >Materiais</Text>
                <Text>Volume</Text>

                <View style={styles.boxInfo}>
                    <Text>Papel</Text>
                    <Text>Pequeno</Text>
                    <Button style={styles.boxInfo}
                    title = 'Editar'
                    />
                </View>

                <Button
                    style={styles.confirmarButton}
                    title = 'Confirmar'
                />

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.button}
                        title="Inicio"
                        onPress = {touchInicio}
                    />

                    <NavBar
                        style={styles.button}
                        title="Menu"
                        onPress = {touchMenu}
                    />

                    <NavBar
                        style={styles.button}
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
        paddingVertical: '10%'
    },

    subtitle: {

    },

    boxStreet: {

    },

    boxInfo: {

    },

    confirmarButton: {
            backgroundColor: colors.green_cyan,
            height: 50,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
    },

    boxButton: {
        flexDirection: 'row',
        justifyContent:'space-around',
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


});
