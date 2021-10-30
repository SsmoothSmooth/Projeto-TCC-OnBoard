import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';

export function Mod_Coop_Campanha() {
    const navigation = useNavigation();

    function touchCampanha() {
        navigation.navigate('Mod_Coop_Criar_Evento')
    }

    function touchBack() {
        navigation.navigate('Mod_Coop_Menu')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Eventos / Campanhas "
                    />
                </View>

                <View style={styles.ButtonMenu}>

                    <Button
                        style={styles.ButtonStyle}
                        title="criar novo Evento / Campanha "
                        onPress = { touchCampanha}
                    />

                </View>

                <View style={styles.boxBackButton}>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchBack}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            style={styles.backButtonIcon}

                        />
                    </TouchableOpacity>

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

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
        paddingVertical: 10
    },

    ButtonMenu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        marginHorizontal: 40,
    },

    ButtonStyle: {
        backgroundColor: '#D9FCAC',
        height: 60,
        width: '120%',
        borderRadius: 50,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    },

    boxBackButton: {
        flex: 1,
        paddingVertical: '10%',
        marginTop: '60%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        width: '100%',
        backgroundColor: colors.gray,
        alignItems: 'center',
    },

    backButton: {
        backgroundColor: colors.green_cyan,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    backButtonIcon: {
        color: colors.black,
        fontSize: 20,
    }
})



