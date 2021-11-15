import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Button } from '../../../components/Button';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export function Mod_D_AlterarSenha(){
    // const navegation = useNavigation();

    //  function touchAlteraSenha(){
    //      navegation.navigate('AlterarSenha')
    //  }

    //  function touchConfigurações(){
    //      navegation.navigate('Configurações')
    //  }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}> 

                <View style={styles.header}>
                    <Text style={styles.title}>
                        Alterar Senha
                    </Text>
                </View>

                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a senha antiga"
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite a nova senha"
                        secureTextEntry
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme a nova senha"
                        secureTextEntry
                    />

                </View>

                <View style={styles.boxButton}>
                    <Button 
                        title="Confirmar"
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
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
        paddingBottom: 8 
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
    
    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
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

    button: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    },
    
    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }
})