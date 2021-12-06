import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import colors from '../../../styles/colors';

export function Mod_C_Ajuda(){
     const navegation = useNavigation();

     function touchVoltar(){
         navegation.navigate('Mod_C_TelaPerfil')
     }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}> 

                <View style={styles.header}>
                <ModHeader
                    title="Ajuda"
                 />
                </View>

                <Text style={styles.boxinfortion}>
                        Perguntas Frequentes
                </Text>

                <View style={styles.boxButton}>

                    <Button
                        style={styles.button}
                        title="O que é reciclagem?" 
                    />

                    <Button
                        style={styles.button}
                        title="Como excluir minha conta?"
                    />

                    <Button
                        style={styles.button}
                        title="Enviar FeedBack"
                    />

                    <Button
                        style={styles.button}
                        title="Sobre os Coletores OnBoard"
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
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
         
    },

    header: {
        width: '100%',
        paddingVertical: '2%',
        backgroundColor: colors.gray,
    },

    boxinfortion: {
        fontWeight: 'bold',
        fontSize: 26,
        alignItems: 'center'
    },
    
    boxButton: {
        width: '100%',
        paddingHorizontal: '10%',
    },

    button: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '3%', 
    },

    buttonIcon: {
        color: colors.black,
        fontSize: 35,
    }

})