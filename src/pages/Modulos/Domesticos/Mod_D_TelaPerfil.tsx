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
import { NavBar } from '../../../components/NavBar';
import colors from '../../../styles/colors';

export function Mod_D_TelaPerfil(){
    const navegation = useNavigation();

    function touchAlteraSenha(){
        navegation.navigate('Mod_D_AlterarSenha')
    }

    function touchConfigurações(){
        navegation.navigate('Mod_D_Configuracoes')
    }

    function touchAjuda(){
        navegation.navigate('Mod_D_Ajuda')
    }

    function touchSair(){
        navegation.navigate('Login')
    }

    function touchInicio(){
       navegation.navigate('Mod_D_Feed')
   }

   function touchMenu(){
       navegation.navigate('Mod_D_Menu')
   }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}> 

                <View style={styles.header}>
                <ModHeader
                    title="Perfil"
                 />
                </View>

                <View style={styles.boxButton}>
                    <Button
                        style={styles.button}
                        title="Alterar Senha" 
                    />


                    <Button
                        style={styles.button}
                        title="Configurações"
                    />

                    <Button
                        style={styles.button}
                        title="Ajuda"
                    />

                    <Button
                        style={styles.button}
                        title="Sair"
                    />
                </View>

                <View style={styles.boxDownbar}>
                    <NavBar
                        style={styles.dbar}
                        title="Inicio"
                    />

                    <NavBar
                        style={styles.dbar}
                        title="Menu"
                    />

                    <NavBar
                        style={styles.dbar}
                        title="Perfil"
                    />
                </View>

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

    boxDownbar: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        backgroundColor: colors.gray,
    },

    dbar: {
        backgroundColor: colors.green_cyan,
        height: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    }
})