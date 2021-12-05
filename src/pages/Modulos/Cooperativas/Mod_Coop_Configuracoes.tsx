import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Mod_Coop_Configuracoes() {
    const navegation = useNavigation();

    function touchSalvar() {
        navegation.navigate('Mod_Coop_Configuracoes')
    }

    function touchVoltar() {
        navegation.navigate('Mod_Coop_TelaPerfil')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <ModHeader
                        title="Configurações"
                    />
                </View>

                <View style={styles.boxInformation}>
                    <View style={styles.Information}>
                        <Text >Apelido:</Text>
                        <Text >Zezinho</Text>
                        <Button style={styles.edit}
                            title="Editar"
                        />
                    </View>
                    <View style={styles.Information}>
                        <Text>Foto:</Text>
                        <Button style={styles.edit}
                            title="Editar"
                        />
                    </View>
                    <View style={styles.Information}>
                        <Text >Telefone:</Text>
                        <Text >(xx)xxxxx-xxxx</Text>
                        <Button style={styles.edit}
                            title="Editar"
                        />
                    </View>
                    <View style={styles.Information}>
                        <Text >E-mail:</Text>
                        <Text >zezinho@gmail.com</Text>
                        <Button style={styles.edit}
                            title="Editar"
                        />
                    </View>
                </View>

                <View style={styles.boxButton}>
                    <Button style={styles.button}
                        title="Salvar"
                        onPress={touchSalvar}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={touchVoltar}
                >

                    <FontAwesome5
                        name="arrow-alt-circle-left"
                        style={styles.buttonIcon}
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

    },

    header: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 8,
        backgroundColor: colors.gray,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '10%',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
    },

    boxInformation: {

    },

    Information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    edit: {
        color: 'red',
        paddingLeft: '25%',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    button: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
    },

    buttonIcon: {
        color: colors.black,
        fontSize: 35,
    }
})