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
                    <Text style={styles.title}>
                        Tabela de Preço
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Reciclável  Peso  Valor
                    </Text>
                </View>

                <View style={styles.ButtonMenu}>

                    <View >
                        <Button
                            style={styles.Button}
                            title="Papel  1KG  R$0.50"
                            onPress={touchInit}
                        />
                    </View>

                    <View>
                        <Button
                            style={styles.Button}
                            title="Metal  5Kg  R$3.00"
                            onPress={touchInit}
                        />
                    </View>


                    <View>
                        <Button
                            style={styles.Button}
                            title="Vidro  3KG  R$2.00"
                            onPress={touchInit}
                        />
                    </View>


                    <View>
                        <Button
                            style={styles.Button}
                            title="Plástico  10KG  R$10.00"
                            onPress={touchInit}
                        />
                    </View>


                    <View>
                        <Button
                            style={styles.Button}
                            title="Adicionar"
                            onPress={touchInit}
                        />
                    </View>

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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 20,
        marginTop: '-5%',
        marginHorizontal: 20,
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '140%',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 20,
        paddingVertical: 25,
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
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text,
    },

    ButtonMenu: {
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 15,
        paddingVertical: 20

    },

    Button: {
        backgroundColor: colors.gray,
        height: 45,
        width: '100%',
        borderRadius: 60,
        paddingHorizontal: 85,
        justifyContent: 'center',
        marginVertical: 15,
        paddingTop: 10,
        flexWrap: 'wrap'
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


