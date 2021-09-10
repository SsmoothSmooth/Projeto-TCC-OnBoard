import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ColorPropType,
} from 'react-native';


import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import Vector from '../../assets/Vector.png'

export function TabelaPrecoColetor() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchInit2() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.boxHeader}>
                <Text style={styles.title}>
                    Tabela de Preço {'\n'}
                </Text>

            </View>

            <View>
                <Text style={styles.subtitle}>
                    Cooperativa
                </Text>
            </View>

            <View style={styles.Button}>
                <Image source={Vector} />
                <Text>Coop.recicle </Text>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    boxHeader: {
        backgroundColor: colors.green_cyan,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '10%',
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
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: fonts.text
    },

    Button: {
        backgroundColor: colors.gray,
        height: 60,
        width: '85%',
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingTop: '5%',
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 45
    },

    boxInput: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '15%',
        paddingVertical: 30

    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: '10%'
    },

    wrapperButton: {
        width: '100%',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%'

    },

    boxBackButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: '10%',
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

