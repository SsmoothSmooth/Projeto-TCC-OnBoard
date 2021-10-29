import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert


} from 'react-native';

import { Button } from '../../../components/Button';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export function C_PersonalData() {
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


    function touchInit() {

        if (!name)
            return Alert.alert('Preenchimento obrigatório do CPF');

        if (!name2)
            return Alert.alert('Preenchimento obrigatório data de nascimento');

        navigation.navigate('FormContact')
    }

    function touchFormIdentidication() {
        navigation.navigate('FormAddress')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Preencha os dados {'\n'}
                </Text>
            
                <View style={styles.boxInput}>

                    <Text style={styles.subtitle}>
                        CPF: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="000.000.000-XX"
                        onChangeText={handleInputChange}
                    />

                    <Text style={styles.subtitle}>
                       Data de nascimento: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="00/00/20XX"
                        onChangeText={handleInputChange2}
                    />
                </View>

                <View style={styles.boxButton}>
                        <Button
                            title="Confirmar"
                            onPress={touchInit}

                        />
                </View>

                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.5}
                    onPress={touchFormIdentidication}
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
        marginTop: 38,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
        paddingTop: '4%'        
    },
    
    image: {
        margin: '8%',
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