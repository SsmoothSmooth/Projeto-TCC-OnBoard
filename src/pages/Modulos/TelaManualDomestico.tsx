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
import { Button } from '../../components/Button';
import { NavBar } from '../../components/NavBar';



export function TelaManualDomestico() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('TelaMenuColetor')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>


                    <Text style={styles.title}>
                        Manual  {'\n'}
                        OnBoard {'\n'}
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Reciclar é fazer nossa parte {'\n'}
                        para um mundo mais {'\n'}
                        sustentável {'\n'}
                    </Text>
                </View>


                <View>
                    <Button
                        style={styles.ButtonMenu}
                        title="O que é reciclagem "
                        onPress={touchInit}
                    />
                </View>

                <View>
                    <Button
                        style={styles.ButtonMenu}
                        title="Aterros Sanitários "
                        onPress={touchInit}
                    />
                </View>

                <View>
                    <Button
                        style={styles.ButtonMenu}
                        title="Tipos de reciclagem"
                        onPress={touchInit}
                    />
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
        margin: 20,
        marginHorizontal: 20,
        marginTop: '-5%'
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '140%',
        justifyContent: 'center',
        paddingTop: '5%',
        marginTop: '5%',
        alignItems: 'center'
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

    ButtonMenu: {
        backgroundColor: colors.gray,
        flexDirection: 'row',
        height: 45,
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 10,
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
        marginHorizontal: 10,
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

