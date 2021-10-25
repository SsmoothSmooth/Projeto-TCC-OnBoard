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

import { Button } from '../../components/Button';

import handsPlanet from '../../assets/handsPlanet.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from '../../components/Header';

export function ConfirmAccess(){
    const navigation = useNavigation();

    function touchModality(){
        navigation.navigate('ModalityOptions')
    }

    function touchLogin(){
        navigation.navigate('Login')
    }

    function touchWelcome(){
        navigation.navigate('Welcome')
    }
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Header
                        title="Coletores OnBoard"
                    />
                </View>

                <Image 
                    source={ handsPlanet }
                    style={styles.image}
                    resizeMode="contain"
                />


                <View style={styles.wrapperButton}>

                    <View style={styles.boxButton}>
                        <Button 
                            title="Cadastrar"
                            onPress={touchModality}
                        />

                        <Button  
                            title="Entrar"
                            onPress={touchLogin}
                        />    
                    </View>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchWelcome}

                    >
                        <FontAwesome5
                            name="arrow-alt-circle-left"
                            style={styles.backButtonIcon}
                            
                        />

                    </TouchableOpacity>

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
        paddingBottom: '16%'
    },

    header: {
        width: '100%',
        backgroundColor: colors.green_cyan,
        paddingVertical: '5%'
    },

    image: {
        marginTop: '3%',
        height: Dimensions.get('window').width * 0.5,
        borderRadius: 15
    },

    wrapperButton:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%'

    },

    backButton: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    backButtonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }


})