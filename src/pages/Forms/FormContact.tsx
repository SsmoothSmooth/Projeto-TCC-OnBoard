import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import happyPlanet from '../../assets/happyPlanet.png';
import { FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';



export function FormContact() {
    const navigation = useNavigation();

    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function touchFormAddress() {

        if (!name)
            return Alert.alert('Preenchimento obrigatório do número de telefone');

        navigation.navigate('FormNickname')
    }

    function touchModalityOptions() {
        navigation.navigate('FormPersonalData')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Image
                    source={happyPlanet}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Informe seu telefone {'\n'}
                </Text>
                
                <View style={styles.boxInput}>
   
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: (DDD) 00000-0000"
                        onChangeText={handleInputChange}
                    />

                </View>

                <View style={styles.boxButton}>
                        <Button
                            title="Confirmar"
                            onPress={touchFormAddress}

                        />
                </View>

                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.5}
                    onPress={touchModalityOptions}
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
        paddingBottom: '20%'
    },
    
    image: {
        margin: '10%',
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
        paddingHorizontal: '15%',
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