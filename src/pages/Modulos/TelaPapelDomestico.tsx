import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    Dimensions
} from 'react-native';

import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../components/ModHeader';
import fonts from '../../styles/fonts';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';


export function TelaPapelDomestico() {
    const navigation = useNavigation();


    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const [name2, setName2] = useState<string>();

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleInputChange2(value2: string) {
        setIsFilled(!!value2);
        setName2(value2);

    }

    function touchSalvar() {
        navigation.navigate('')
    }

    function touchBack() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Papel"
                    />
                </View>

                <View style={styles.DescarteImagem}>
                    <Image source={require('../../assets/DescartePapel.png')} />
                </View>

                <View>
                    <Text> Pequena (até 2Kg) </Text>
                    <Text> Média (De 2Kg até 5Kg) </Text>
                    <Text> Grande (De 5Kg até 10Kg) {'\n'} </Text>
                </View>

                <Text style={styles.title}> Gerenciamento de Valores </Text>

                <View style={styles.boxInput}>

                    <Text style={styles.subtitle}>
                        Peso: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChange}
                    />

                    <Text style={styles.subtitle}>
                        Valor: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChange2}
                    />

                </View>

                <View style={styles.ButtonMenu}>
                    <Button
                        style={styles.Button1}
                        title="Salvar"
                        onPress={touchSalvar}
                    />
                </View>

                <View style={styles.boxBackButton}>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchBack}
                    >
                        <FontAwesome5
                            name="chevron-left"
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
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '5%'
    },

    DescarteImagem: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '5%',
        marginVertical: '5%',
    },

    title: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: fonts.heading
    },

    boxInput: {
        width: '80%',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        paddingTop: '8%',
        flexWrap: 'wrap'
    },

    subtitle: {
        textAlign: 'left',
        fontSize: 15,
        color: colors.heading,
        fontFamily: fonts.text
    },

    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },

    ButtonMenu: {
        flex: 1,
        height: '30%',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
    },

    Button1: {
        backgroundColor: colors.gray,
        height: 45,
        width: '80%',
        marginBottom: '10%',
        borderRadius: 60,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxBackButton: {
        flex: 1,
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingHorizontal: '43%',
        justifyContent: 'center',
        backgroundColor: colors.gray,
    },

    backButton: {
        backgroundColor: colors.green_cyan,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    backButtonIcon: {
        color: colors.black,
        fontSize: 20,

    },

})

