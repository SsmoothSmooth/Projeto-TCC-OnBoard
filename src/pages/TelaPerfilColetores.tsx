import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button } from '../components/Button';

export function TelaPerfilColetores(){
    // const navegation = useNavigation();

    // function touchAlteraSenha(){
    //     navegation.navigate('AlterarSenha')
    // }

    // function touchConfigurações(){
    //     navegation.navigate('Configurações')
    // }

    // function touchAjuda(){
    //     navegation.navigate('Ajuda')
    // }

    // function touchSair(){
    //     navegation.navigate('Login')
    // }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.visual}> 

                <View style={styles.tarja}>
                </View>

                <Text style={styles.subtitle}>
                    Perfil
                </Text>

                <Text style={styles.button1}>
                    <Button
                        title="Alterar Senha"
                    
                    />
                </Text>

                <Text style={styles.button2}>
                    <Button
                        title="Configurações"
                    
                    />
                </Text>

                <Text style={styles.button3}>
                    <Button
                        title="Ajuda"
                    
                    />
                </Text>

                <Text style={styles.button4}>
                    <Button
                        title="Sair"
                    
                    />
                </Text>

                <View style={styles.tarjaInf}>
                <TouchableOpacity>
                    <Text style={styles.buttoninf1}>

                        <Button
                        title="Inicio"
                        />

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttoninf2}>

                        <Button
                        title="Menu"
                        />

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttoninf3}>

                        <Button
                        title="Perfil"
                        />

                    </Text>
                </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
)
}



const styles = StyleSheet.create({
    container: {
        flex: 1
        alignItems: 'center'
    },

 //   tarja: {
     //   backgroundColor.ColumbiaBlue
    //}
    
    visual: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    subtitle: { 
        textAlign: 'center',
        fontSize: 28,
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text   
    },
}) 
    