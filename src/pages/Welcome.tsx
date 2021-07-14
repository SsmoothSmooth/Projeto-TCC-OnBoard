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

import handsLoves from '../assets/handsLoves.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
    const navigation = useNavigation();

    function touchInit(){
        navigation.navigate('ConfirmAccess')
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Text style={styles.title}>
                        Realize o descarte {'\n'} 
                        e reciclavel da {'\n'}
                        maneira correta! {'\n'}
                    </Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image 
                        source={ handsLoves }
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <Text style={styles.subtitle}>
                        Venham conosco  {'\n'}
                        mudar o meio ambiente {'\n'}
                        entre na Coletores Onboard. 
                    </Text>
                </View>


                <View style={styles.buttonContainer}>
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
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingBottom: '6%'
    },

    header:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.green_cyan,
        paddingTop: '20%',
        paddingBottom: '2%',
        margin: - 30,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32
    },

    imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: '100%',
    },


    image: {
        height: Dimensions.get('window').width * 0.5,
        borderRadius: 15,
        margin: 10
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        margin: 10
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: '2%'
    },

    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }


})