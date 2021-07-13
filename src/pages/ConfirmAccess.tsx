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

                <Text style={styles.title}>
                    Coletores OnBoard
                </Text>

                <Image
                    source={handsPlanet}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text
                    style={styles.button}
                >
                        <Button 
                            title="Cadastrar"
                            onPress={touchModality}
                        />
                </Text>


                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={touchModality}
                ></TouchableOpacity>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Entrar"
                        onPress={touchLogin}
                    />    
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={touchLogin}
                ></TouchableOpacity>


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

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    //Arrumar depois - colocar outra tag 
    button: {

    }

})