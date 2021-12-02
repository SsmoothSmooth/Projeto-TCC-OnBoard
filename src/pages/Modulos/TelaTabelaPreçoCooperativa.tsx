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
import { FontAwesome5 } from '@expo/vector-icons';
import { ModHeader } from '../../components/ModHeader';



export function TelaTabelaPreçoCooperativa() {
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
                    <ModHeader
                        title="Resultados"
                    />
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        {""}Reciclável {" "}Peso{" "} Valor
                    </Text>
                </View>



                <View style={styles.ButtonMenu}>
                    <Button
                        style={styles.ButtonPapel}
                        title="Papel     1KG     $0.50"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.ButtonMetal}
                        title="Metal     5Kg     R$3.00"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.ButtonVidro}
                        title="Vidro     3KG     R$2.00"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.ButtonPlastico}
                        title="Plástico   10KG  R$10.00"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.ButtonAdicionar}
                        title="Adicionar"
                        onPress={touchInit}
                    />

                </View>

                <View style={styles.boxBackButton}>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchInit2}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            style={styles.backButtonIcon} />

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '5%'
    },

    subtitle: {
        justifyContent: 'space-around',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text,
    },

    ButtonMenu: {
        height: '60%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        paddingVertical: 20,
        marginHorizontal: '30%',
    },

    ButtonPapel: {
        backgroundColor: colors.gray,
        height: 45,
        width: '100%',
        borderRadius: 60,
        paddingHorizontal: 70,
        justifyContent: 'center',
        marginVertical: 15,
    },

    ButtonMetal: {
        backgroundColor: colors.gray,
        height: 45,
        width: '100%',
        borderRadius: 60,
        paddingHorizontal: 70,
        justifyContent: 'center',
        marginVertical: 15,
    },

    ButtonVidro: {
        backgroundColor: colors.gray,
        height: 45,
        width: '100%',
        borderRadius: 60,
        paddingHorizontal: 70,
        justifyContent: 'center',
        marginVertical: 15,
    },

    ButtonPlastico: {
        backgroundColor: colors.gray,
        height: 45,
        width: '100%',
        borderRadius: 60,
        paddingHorizontal: 70,
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 15,
    },

    ButtonAdicionar: {
        backgroundColor: colors.gray,
        height: 45,
        width: '65%',
        borderRadius: 60,
        paddingHorizontal: 70,
        justifyContent: 'center',
        marginVertical: 20,
    },


    boxBackButton: {
        flex: 1,
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingHorizontal: '43%',
        justifyContent: 'center',
        backgroundColor: colors.gray,
        width: 50
    },

    backButton: {
        backgroundColor: colors.green_cyan,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    backButtonIcon: {
        color: colors.black,
        fontSize: 20,
    }
})


