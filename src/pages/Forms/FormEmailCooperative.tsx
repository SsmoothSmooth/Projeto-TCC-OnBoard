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
import sacola from '../../assets/sacola.png';



export function FormEmailCooperative() {

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

    function touchINext() {

        if (!name)
            return Alert.alert('Preenchimento obrigatório do Nome Fantasia');
        if (!name2)
            return Alert.alert('Preenchimento obrigatório do Email');
        else


            navigation.navigate('FormPersonalDataCooperative')
    }

    function touchBack() {
        navigation.navigate('FormDescriptionCooperative')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>



                <Text style={styles.title}>
                    ColetoresOnBoard
                </Text>

                <Image
                    source={sacola}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Nome Completo

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o Nome Fantasia"
                    onChangeText={handleInputChange}
                />

                <Text style={styles.subtitle}>
                    Email

                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu Email"
                    onChangeText={handleInputChange2}
                />

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Confirmar"
                        onPress={touchINext}

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