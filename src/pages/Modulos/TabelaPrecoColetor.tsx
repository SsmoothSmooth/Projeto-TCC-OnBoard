import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,


} from 'react-native';


import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import Vector from '../../assets/Vector.png'
import avaliacao from '../assets/avaliacao.png'


export function TabelaPrecoColetor() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('TelaMenuCooperativa')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Tabela de Preço {'\n'}
                    </Text>
                </View>

                <View style={styles.wrapperMenu}>

                    <View>
                        <Text style={styles.subtitle}>
                            Cooperativa
                        </Text>
                    </View>

                    <View>
                        <Button
                            style={styles.ButtonMenu}
                            title=" Coop.recicle "
                            onPress={touchInit}
                        />
                    </View>

                    <View>
                        <Button
                            style={styles.ButtonMenu}
                            title=" Coop.recicle 2 "
                            onPress={touchInit}
                        />
                    </View>

                    <View>
                        <Button
                            style={styles.ButtonMenu}
                            title=" Coop.recicle 3 "
                            onPress={touchInit}
                        />
                    </View>

                    <View>
                        <Button
                            style={styles.ButtonMenu}
                            title=" Coop.recicle 4 "
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
        paddingTop: '5%',
        marginTop: '5%',
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 38,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34

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

    wrapperMenu: {
        flex: 1,
        flexDirection: 'column',
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        padding: 20


    },

    ButtonMenu: {
        backgroundColor: colors.gray,
        height: 50,
        width: '130%',
        borderRadius: 50,
        paddingHorizontal: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingTop: 10,

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

