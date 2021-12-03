import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavBar } from '../../../components/NavBar';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export function Mod_C_Coleta() {
    const navigation = useNavigation();

    function touchBack() {
        navigation.navigate('Mod_C_Categoria')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Minha coleta"
                    />
                </View>

                <View>
                    {/* <Image 
                         source={require('../../../assets/pointColeta.png')}
                    /> */}
                        
                    <Text> 
                        Local do descarte {'\n'}
                        Rua José Alvaro de Carvalho {'\n'}
                        Jardim dos Zés
                    </Text>

                    <NavBar
                        style={styles.buttonConfirma}
                        title="Excluir"
                    />
                </View>

              


                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.buttonConfirma}
                        title="Coletado"
                    />

                
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={touchBack}
                    >
                    <FontAwesome5
                        name="arrow-alt-circle-right"
                        style={styles.buttonIcon}

                    />
                </TouchableOpacity>


                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),

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


    boxButton: {
        flex: 1,
        paddingVertical: '10%',
        marginTop: '70%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'center',
    },

    buttonConfirma: {
        backgroundColor: colors.green_cyan,
        width: 160,
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 40,
        textAlign: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    },



})