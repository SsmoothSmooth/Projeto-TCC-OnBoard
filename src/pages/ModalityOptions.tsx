import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,

    Dimensions
} from 'react-native';

import { Button } from '../components/Button';

import happyPlanet from '../../assets/happyPlanet.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function ModalityOptions() {

    const navigation = useNavigation();


    function touchInit() {

        navigation.navigate('CadastroColetor')
    }

    function touchInit2() {

        navigation.navigate('CadastroDomestico')
    }

    function touchInit3() {

        navigation.navigate('CadastroCooperativa')
    }
    function touchInit4() {

        navigation.navigate('ConfirmAcess')
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
                        onPress={touchInit}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Domesticos"
                        onPress={touchInit2}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Cooperativas"
                        onPress={touchInit3}

                    />

                </Text>

                <Text
                    style={styles.button}
                >

                    <Button
                        title="<"
                        onPress={touchInit4}

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



