import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';

import colors from '../../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavBar } from '../../../../components/NavBar';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../../../../styles/fonts';
import { Button } from '../../../../components/Button';


export function Mod_C_EscolhaVenda() {
    const navigation = useNavigation();

    function touchRota() {
        navigation.navigate('Mod_C_RotaVenda')
    }

    function touchBack() {
        navigation.navigate('Mod_C_Ponto_Venda')
    }

    return (
        <SafeAreaView style={styles.container}>

        <View style={styles.wrapper}> 

        <View style={styles.header}>
            <ModHeader
                title="Ponto de venda"
             />
            </View>


            <View style={styles.boxInformation}>
                <View style={styles.Information}>
                    <Text >Coop. recicle </Text>           
                </View>
                <View style={styles.Information}>
                    <Text>Bairro: Jardim dos Zés</Text>
                </View>
                <View style={styles.Information}>
                    <Text style={styles.texto}>Rua coperativa</Text>
                </View>
    
            </View>

            <View style={styles.boxButton}>
                <Button style={styles.button}
                    title="Iniciar rota para vender"
                    onPressIn={touchRota}
                />
                <Button style={styles.button}
                    title="Tabela de preço"
                    onPress={touchBack}
                />
                
            </View>

            

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={touchBack}

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
    borderRadius: 16,
    padding: '5%',
    backgroundColor: colors.green_cyan
},

Information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},

texto: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 32,
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
    marginVertical: '3%', 
},

buttonIcon: {
    color: colors.black,
    fontSize: 35,
}
})