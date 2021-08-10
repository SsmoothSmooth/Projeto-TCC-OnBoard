import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { Button } from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';

export function Login() {
    const navigation = useNavigation();

    function touchConfirmAccess() {
        navigation.navigate('ConfirmAccess')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <Text style={styles.title}>
                        Login {'\n'}
                    </Text>

                </View>

                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="digite um usuário"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="digite uma senha"
                        secureTextEntry
                    />
                </View>

                <View style={styles.wrapperButton}>

                    <View style={styles.boxButton}>
                        <Button
                            title="Confirmar"

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
        backgroundColor: colors.green_cyan,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '16%',
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
        alignItems: 'center',
        paddingHorizontal: '15%',
        paddingVertical: 30

    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: '10%'
    },

    wrapperButton: {
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