import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { Button } from '../components/Button';

import happyPlanet from '../assets/happyPlanet.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function TipoCadastro() {
    const navigation = useNavigation();

    function touchColetor() {
        navigation.navigate('CadastroColetor')
    }


    function touchDomestico() {
        navigation.navigate('CadastroDomestico')
    }


    function touchCooperativa() {
        navigation.navigate('CadastroCooperativa')
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Image
                    source={happyPlanet}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Em qual categoria {'\n'}
                    voce se encontra?

                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Coletores"
                        onPress={touchColetor}


                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Domesticos"
                        onPress={touchDomestico}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Cooperativas"
                        onPress={touchCooperativa}

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
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    //Arrumar depois - colocar outra tag 
    button: {

    }

})


