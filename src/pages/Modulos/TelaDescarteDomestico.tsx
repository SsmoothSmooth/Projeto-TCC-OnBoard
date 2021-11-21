import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';

import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../components/ModHeader';
import { NavBar } from '../../components/NavBar';


export function TelaDescarteDomestico() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')

    }

    function touchInit2() {
        navigation.navigate('TabelaPrecoColetor')
    }


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Descarte"
                    />
                </View>


                <View style={styles.DescarteImagem}>
                    <Image source={require('../assets/DescartePapel.png')} />
                    <Text >Papel</Text>

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
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },

    boxHeader: {
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '10%'
    },


    DescarteImagem: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },

    MenuButton: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        marginHorizontal: 40,
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

})

