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
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FontAwesome5 } from '@expo/vector-icons';


export function FormContactCooperative() {
    const navigation = useNavigation();

    function touchNext() {
        navigation.navigate('FormDescriptionCooperative')
    }

    function touchBack() {
        navigation.navigate('FormEmailCooperative')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Informe Número para Contato
                </Text>

                <View style={styles.boxInput}>



                <Text style={styles.subtitle}>
                    Telefone

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="(xx)00000-0000"
                />

                <Text style={styles.subtitle}>
                    Celular

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="(xx)00000-0000"
                />


                <Text style={styles.subtitle}>
                    Whatssap

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="(xx)00000-0000"
                />
                </View>

                <View style={styles.boxButton}>
                    <Button
                        title="Confirmar"
                        onPress={touchNext}

                    />
                </View>

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

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
        paddingTop: '4%'

    },

    boxInput: {
        width: '100%',
        paddingHorizontal: '15%',
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
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '15%'

    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
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