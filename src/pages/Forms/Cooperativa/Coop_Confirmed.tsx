import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import { Button } from '../../../components/Button';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import celebrationPlanet from '../../../assets/celebrationPlanet.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Coop_Confirmed() {
    const navigation = useNavigation();

    function touchNext() {
        navigation.navigate('Mod_Coop_Feed')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Image
                    source={celebrationPlanet}
                    style={styles.image}
                    resizeMode="contain"
                />

                <View  >

                    <Text style={styles.title}>
                        Prontinho

                    </Text>

                    <Text style={styles.subtitle}>
                        Formulario finalizado {'\n'}
                        Vamos iniciar sua experencia.

                    </Text>

                </View>

                <View style={styles.boxButton}>
                    <Button
                        title="Começar"
                        onPress={touchNext}
                    />
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
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: '16%'
    },

    image: {
        height: Dimensions.get('window').width * 0.6
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



    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

})