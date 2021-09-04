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


export function FormContactCooperative() {
    const navigation = useNavigation();

    function touchNext() {
        navigation.navigate('FormDescriptionCooperative')
    }

    function touchBack() {
        navigation.navigate('FormIdentificationCooperative')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>



                <Text style={styles.title}>
                    Informe Número para Contato
                </Text>



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

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Confirmar"
                        onPress={touchNext}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="<"
                        onPress={touchBack}

                    />
                </Text>

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

    subtitle: {
        textAlign: 'center',
        fontSize: 12,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 20,
        marginTop: 20,
        padding: 15,
        textAlign: 'center'

    },

    image: {
        height: 50,
    },


    button: {


    }

})