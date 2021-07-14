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

import handsPlanet from '../assets/handsPlanet.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function ConfirmAccess(){
    const navigation = useNavigation();

    function touchModality(){
        navigation.navigate('ModalityOptions')
    }

    function touchLogin(){
        navigation.navigate('Login')
    }
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Text style={styles.title}>
                        Coletores OnBoard
                    </Text>
                </View>

                <Image 
                    source={ handsPlanet }
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.button}>
                    <Button 
                        title="Cadastrar"
                        onPress={touchModality}
                    />


                    <Button  
                        title="Entrar"
                        onPress={touchLogin}
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
        backgroundColor: 'white',
        paddingBottom: '2%'
    },

    header: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            backgroundColor: colors.green_cyan,
            padding: '2%',
            marginBottom: '4%'
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,

    },

    image: {
        height: Dimensions.get('window').width * 0.7,
        marginBottom: 10,
        borderRadius: 15
    },

    button: {
        width: '100%',
        paddingHorizontal: '20%',
        paddingVertical: 5,
    }


})