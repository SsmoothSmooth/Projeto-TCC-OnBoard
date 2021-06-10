import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Senha() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>



                <Text style={styles.title}>
                    Senha
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="digite uma senha"
                />

                <Text
                    style={styles.button}
                >
                    <Button
                        title="Confirmar"

                    />
                </Text>

                <Text
                    style={styles.button}
                >
                    <Button
                        title="<"

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
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 24,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    //Arrumar depois - colocar outra tag 
    button: {

    }

})

