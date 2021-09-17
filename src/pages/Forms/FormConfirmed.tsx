import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions

} from 'react-native';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import celebrationPlanet from '../../assets/celebrationPlanet.png';



export function FormConfirmed() {
    const navigation = useNavigation();

    function touchInitFeed() {

        navigation.navigate('Feed')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxImage}>
                    
                    <Image
                        source={celebrationPlanet}
                        style={styles.image}
                        resizeMode="contain"
                    />

                </View>

                <View style={styles.boxText}>

                    <Text style={styles.title}>
                        Prontinho

                    </Text>


                    <Text style={styles.subtitle}>
                        Agora vamos começar a cuidar {'\n'}
                        do meio ambiente.

                    </Text>

                </View>

                <View style={styles.boxButton}>
                    <Button
                        title="Começar"
                        onPress={touchInitFeed}
                    />
                </View>


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

    boxImage: {
        width: '100%',
        alignItems: 'center'
    },

    image: {
        height: Dimensions.get('window').width * 0.6
    },

    boxText: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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