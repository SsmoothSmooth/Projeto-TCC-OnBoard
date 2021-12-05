import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Mod_Coop_Criar_Evento() {
    const navigation = useNavigation();

    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const [name2, setName2] = useState<string>();
    const [name3, setName3] = useState<string>();
    const [name4, setName4] = useState<string>();

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleInputChange2(value2: string) {
        setIsFilled(!!value2);
        setName2(value2);

    }

    function handleInputChange3(value3: string) {
        setIsFilled(!!value3);
        setName3(value3);

    }

    function handleInputChange4(value4: string) {
        setIsFilled(!!value4);
        setName4(value4);

    }

    function touchSalvar() {
        navigation.navigate('Mod_Coop_Criar_Evento')
    }

    function touchBack() {
        navigation.navigate('Mod_Coop_Campanha')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.wrapper}>

                    <View style={styles.boxHeader}>
                        <ModHeader
                            title="Novo Evento/Campanha "
                        />
                    </View>


                    <View style={styles.boxInput}>

                        <Text style={styles.subtitle}>
                            Dia: {'\n'}

                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite um Dia"
                            onChangeText={handleInputChange}
                        />

                        <Text style={styles.subtitle}>
                            Local: {'\n'}

                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite um Local"
                            onChangeText={handleInputChange2}
                        />

                        <Text style={styles.subtitle}>
                            Horário: {'\n'}

                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite um Horário"
                            onChangeText={handleInputChange3}
                        />

                        <Text style={styles.subtitle}>
                            Tema: {'\n'}

                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Opcional"
                            onChangeText={handleInputChange4}
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

            </TouchableWithoutFeedback>

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
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
    },

    boxInput: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '4%',
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
        marginBottom: 10,
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
        height: 43,
        width: '80%',
        borderRadius: 60,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
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
    }
})
