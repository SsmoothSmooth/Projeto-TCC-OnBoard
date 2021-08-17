import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions

} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import celebrationPlanet from '../assets/celebrationPlanet.png';



export function CadastroColetor6() {
    const navigation = useNavigation();

    function touchInit() {

        navigation.navigate('TelaMenuColetor')
    }

    function touchInit2() {
        navigation.navigate('CadastroColetor5')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>


                <Image
                    source={celebrationPlanet}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Prontinho

                </Text>


                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar {'\n'}
                    do meio ambiente.

                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Confirmar"
                        onPress={touchInit}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="<"
                        onPress={touchInit2}

                    />
                </Text>

            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40

    },

    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 20,
        marginTop: 20,
        padding: 15,
        textAlign: 'center'

    },

    image: {
        height: Dimensions.get('window').width * 0.6
    },


    button: {


    }

})