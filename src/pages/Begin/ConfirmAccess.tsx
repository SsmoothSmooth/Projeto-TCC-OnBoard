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

import { Button } from '../../components/Button';

import handsPlanet from '../../assets/handsPlanet.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';

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

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Coletores OnBoard {'\n'}
                    </Text>
                </View>

                <View style={styles.boxImage}>
                    <Image 
                        source={ handsPlanet }
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

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



                    <View style={styles.boxBackButton}>
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
        width: '100%',
        justifyContent: 'center',
        paddingTop: '23%',
        paddingBottom: '8%',
        backgroundColor: colors.green_cyan

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
        alignItems: 'center',
    },

    image: {
        height: Dimensions.get('window').width * 0.7,
        borderRadius: 15
    },

    wrapperButton:{
        width: '100%',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%'

    },

    boxBackButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: '10%',
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