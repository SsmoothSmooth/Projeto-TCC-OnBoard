import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput


} from 'react-native';

import { Button } from '../../../components/Button';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export function Coop_Identification() {
    const navigation = useNavigation();

    function touchNext() {
        navigation.navigate('Coop_Contact')
    }

    function touchBack() {
        navigation.navigate('Coop_PersonalData')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Preencha os dados
                </Text>

                <View style={styles.boxInput}>

                    <Text style={styles.subtitle}>
                        CNPJ: {'\n'}
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="01.002.003/0004-XX"
                    />

                    <Text style={styles.subtitle}>
                        Data da Fundação da empresa

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="00/00/20XX"
                    />


                    <Text style={styles.subtitle}>
                        Responsável Legal da Empresa

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
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
        fontSize: 16,
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