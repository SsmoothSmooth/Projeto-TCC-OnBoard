import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { Button } from '../../components/Button'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Login() {
    const navigation = useNavigation();


    function touchBack() {
        navigation.navigate('ConfirmAccess')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Header
                        title={"Login"}
                    />

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

                <View style={styles.boxButton}>
                    <Button
                        title="Confirmar"
                    // onPress={touchLogin}
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

    header: {
        width: '100%',
        backgroundColor: colors.green_cyan,
        padding: '10%'
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

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%'

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