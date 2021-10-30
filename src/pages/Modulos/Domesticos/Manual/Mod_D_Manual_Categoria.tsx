import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../../components/Button';
import { ModHeader } from '../../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';

export function Mod_D_Manual_Categoria() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchBack() {
        navigation.navigate('Mod_D_Manual_Guia')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Manual 
                               OnBoard"
                    />
                </View>

                <View>
                    <Text style={styles.BoxSubtitle}> Tipos de Reciclagem </Text>
                </View>

                <View style={styles.BoxButton}>

                    <Button
                        style={styles.Button}
                        title="Papel"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.Button}
                        title="Metal"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.Button}
                        title="Plastico"
                        onPress={touchInit}
                    />

                    <Button
                        style={styles.Button}
                        title="Vidro"
                        onPress={touchInit}
                    />

                </View>

                <View style={styles.boxBackButton}>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchBack}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            style={styles.backButtonIcon}
                        />
                    </TouchableOpacity>


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
        flex: 1,
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '5%',
        flexWrap: 'wrap'
    },

    BoxSubtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.heading,
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontFamily: fonts.text,
        marginBottom: 30
    },

    BoxButton: {
        flex: 1,
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginHorizontal: 20,
        padding: 25,


    },

    Button: {
        backgroundColor: colors.lightgrey,
        height: 50,
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
        paddingTop: 10,
    },

    boxBackButton: {
        flex: 1,
        paddingTop: 5,
        paddingVertical: 10,
        paddingHorizontal: '45%',
        marginTop: 80,
        justifyContent: 'center',
        backgroundColor: colors.gray,
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


