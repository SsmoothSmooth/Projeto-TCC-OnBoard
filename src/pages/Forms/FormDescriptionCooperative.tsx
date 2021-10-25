import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput

} from 'react-native';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';




export function FormDescriptionCooperative() {
    const navigation = useNavigation();

    function touchNext() {
        navigation.navigate('FormConfirmedCooperative')
    }

    function touchBack() {
        navigation.navigate('FormContactCooperative')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>


                <View style={styles.boxInput}>

                    <Text style={styles.title}>
                        Descrição da sua Empresa
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Fale sobre a sua Empresa"
                    />

                </View>

                <View style={styles.boxButton}>
                        <Button
                            title="Confirmar"
                            onPress={touchNext}

                        />

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchBack}
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

    boxInput: {
        width: '100%',
        paddingHorizontal: '10%',
    },

    subtitle: {
        textAlign: 'left',        
        fontSize: 20,
        paddingTop: '2%',
        color: colors.heading,
        fontFamily: fonts.text
    },

    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#52665A',
        color: colors.heading,
        fontSize: 20,
        textAlign: 'center',
        marginTop: '15%',
        marginBottom: '15%'

    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
        alignItems: 'center',
        justifyContent: 'center',
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