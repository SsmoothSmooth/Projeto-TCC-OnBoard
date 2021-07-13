import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput

} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';




export function CadastroCooperativa2() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('CadastroCooperativa3')
    }

    function touchInit2() {
        navigation.navigate('CadastroCooperativa')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>



                <Text style={styles.title}>
                    Preencha os dados
                </Text>



                <Text style={styles.subtitle}>
                    Cidade/ UF

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite a sua cidade/ UF"
                />

                <Text style={styles.subtitle}>
                    Endereço

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o seu endereço"
                />

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Confirmar"
                        onPress={touchInit}

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="<"
                        onPress={touchInit2}

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