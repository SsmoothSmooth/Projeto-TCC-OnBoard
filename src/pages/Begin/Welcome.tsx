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

import { FontAwesome5 } from '@expo/vector-icons';

import handsLoves from '../../assets/handsLoves.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../components/Button';

export function Welcome() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('ConfirmAccess')
    }

    // Rota para testar a interface

    function touchTest() {
        navigation.navigate('TabelaPrecoColetor')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Realize o descarte {'\n'}
                        e reciclavel da {'\n'}
                        maneira correta! {'\n'}
                    </Text>
                </View>

                <View style={styles.boxImage}>
                    <Image
                        source={handsLoves}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.boxSubtitle}>
                    <Text style={styles.subtitle}>
                        Venham conosco  {'\n'}
                        mudar o meio ambiente {'\n'}
                        entre na Coletores Onboard.
                    </Text>
                </View>

                {/* Teste screen */}

                <View style={styles.testButton}>
                    <Button
                        title="View Interface"
                        onPress={touchTest}

                    />
                </View>


                <View style={styles.boxButton}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={touchInit}
                    >
                        <FontAwesome5
                            name="arrow-alt-circle-right"
                            style={styles.buttonIcon}

                        />

                    </TouchableOpacity>
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
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: '2%'
    },

    boxHeader: {
        backgroundColor: colors.green_cyan,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '16%'
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
    },

    boxImage: {
        width: '100%',
        alignItems: 'center'
    },


    image: {
        height: Dimensions.get('window').width * 0.7,
        borderRadius: 15,
    },

    boxSubtitle: {
        width: '100%',
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        margin: 10
    },

    boxButton: {
        width: '100%',
        padding: '16%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    },

    // teste

    testButton: {
        width: '100%',
        paddingHorizontal: '20%',
        backgroundColor: 'coral'
    }

})