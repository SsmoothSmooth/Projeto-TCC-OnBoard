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
        flex: 1,
        width: '100%',
        backgroundColor: colors.green_cyan,
        paddingBottom: '50%',
        marginBottom: '2%'
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: "15%",
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32
    },

    image: {
        height: Dimensions.get('window').width * 0.7,
        marginBottom: 2,
        borderRadius: 15,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: '10%',
        fontFamily: fonts.text
    },

    button: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10
    },

    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }

})