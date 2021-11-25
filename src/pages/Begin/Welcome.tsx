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
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { FontAwesome5 } from '@expo/vector-icons';

import handsLoves from '../../assets/handsLoves.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Welcome() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('ConfirmAccess')
    }

    // Usar para testar as telas
 
    function test(){
        navigation.navigate('Mod_D_Menu')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Header
                        title="Realize o descarte e a coleta de lixo reciclavel da maneira correta!"
                    />
                </View>

                <Image
                    source={handsLoves}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Venham conosco  {'\n'}
                    mudar o meio ambiente {'\n'}
                    entre na Coletores Onboard.
                </Text>


                {/* Teste screen */}

                <View style={styles.testButton}>
                        <Button
                            title="View Interface"
                            onPress={test}
                            
                            />
                </View>

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
        paddingBottom: '16%'
    },

    header: {
        width: '100%',
        backgroundColor: colors.green_cyan,
        paddingVertical: '2%'
    },

    image: {
        marginTop: '3%',
        height: Dimensions.get('window').width * 0.5,
        borderRadius: 15,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        margin: 10
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