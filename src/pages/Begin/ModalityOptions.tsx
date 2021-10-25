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

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { useNavigation } from '@react-navigation/core';
import happyPlanet from '../../assets/happyPlanet.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { FontAwesome5 } from '@expo/vector-icons';



export function ModalityOptions() {

    const navigation = useNavigation();


    function touchForm() {

        navigation.navigate('FormIdentification')
    }

    function touchFormCooperative() {

        navigation.navigate('FormIdentificationCooperative')
    }
    function touchConfirmAccess() {

        navigation.navigate('ConfirmAccess')
    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Image
                    source={happyPlanet}
                    style={styles.image}
                    resizeMode="contain"
                    />

                <Text style={styles.title}>
                        Em qual categoria {'\n'}
                    voce se encontra? {'\n'}

                </Text>
                
                <View style={styles.boxButton}>
                    <Button
                        style={styles.button}
                        title="Coletores"
                        onPress={touchForm}   
                    />
                    <Button
                        style={styles.button}
                        title="Domesticos"
                        onPress={touchForm} 
                    />
                    <Button
                        style={styles.button}
                        title="Cooperativas"
                        onPress={touchFormCooperative}
                    />
                </View>

                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.5}
                    onPress={touchConfirmAccess}
                >
                <FontAwesome5
                    name="arrow-alt-circle-left"
                    style={styles.backButtonIcon}
                    
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
        backgroundColor: 'white',
        paddingBottom: '16%'
    },

    image: {
        margin: '8%',
    },
    
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34

    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    button: {
        backgroundColor: colors.green_cyan,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
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



