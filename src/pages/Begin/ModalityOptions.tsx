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

                <View style={styles.boxHeader}>

                    <Image
                        source={happyPlanet}
                        style={styles.image}
                        resizeMode="contain"
                        />

                    <Text style={styles.title}>
                         Em qual categoria {'\n'}
                        voce se encontra? {'\n'}

                    </Text>

                </View>

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

                <View style={styles.boxBackButton}>
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
    
    boxHeader:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15%'
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
        height: 80,
        borderRadius: 16,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '15%', 
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



