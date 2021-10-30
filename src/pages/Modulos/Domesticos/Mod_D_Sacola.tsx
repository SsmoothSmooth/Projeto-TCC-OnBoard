import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import mapImg from '../../../assets/mapIcon.png';


export function Mod_D_Sacola() {


    return(
        <SafeAreaView style={styles.container}> 

            <View style={styles.boxHeader}>
                <Text style={styles.title}>Sacola{'\n'}</Text>
            </View>

            <View style={styles.boxSubTitle}>
                <Text >Sacola de lixo</Text>
            </View>

            <View style={styles.boxStreet}>
                <Image source={mapImg} />
                <Text >Local do descarte</Text>
                <Text >Rua José Alvaro de Carvalho</Text>
                <Text >Jardim dos Zés</Text>
            </View>

            <View style={styles.boxInformation}>
                <Text >Materiais</Text>
                <Text >Volumes</Text>
                <Text >Papel</Text>
                <Text >Pequeno</Text>
                <Text >Metal</Text>
                <Text >Médio</Text>
                <Text >Vidro</Text>
                <Text >Pequeno</Text>
                <Text >Platico</Text>
                <Text >Grande</Text>
            </View>

            <View style={styles.buttonConfirm}>
                <Text >Confirmar</Text>
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

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    boxHeader: {
        width: '100%',
        marginTop: -60,
        backgroundColor: colors.gray,
        paddingTop: '25%',
        fontFamily: fonts.heading

    },

    title: {
        fontSize: 60,
        textAlign: 'center',
        fontFamily: fonts.heading

    },

    boxSubTitle: {
        fontSize: 100,
        fontFamily: fonts.heading,
        paddingHorizontal: '5%',
        paddingTop: '5%'

    },

    boxImage: {
        fontSize: 20,
        fontFamily: fonts.heading,
        paddingHorizontal: '5%',
        paddingTop: '5%'

    },

    boxStreet: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'

    },

    boxInformation: {
        flexDirection: 'row'

    },

    buttonConfirm: {
        backgroundColor: colors.green_cyan,
        width: 100,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    boxButton: {
        flex: 1,
        paddingVertical: '18%',
        marginTop: '16%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'flex-end',
        flexDirection: 'row'

    },

    buttonInicio: {
        backgroundColor: colors.green_cyan,
        width: 100,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonMenu: {
        backgroundColor: colors.green_cyan,
        width: 100,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonPerfil: {
        backgroundColor: colors.green_cyan,
        width: 100,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        textAlign: 'center',

    },

});
