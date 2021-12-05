import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export function Mod_D_Manual_Vidro() {
    const navigation = useNavigation();

    function touchBack() {
        navigation.navigate('Mod_D_Manual_Guia')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Manual 
                               OnBoard"
                    />
                </View>

                <View>
                    <Text style={styles.BoxSubtitle}> Guia de Reciclagem: Vidro </Text>
                </View>

                <ScrollView style={styles.scrollview}>

                    <Text style={styles.text}>
                        Garrafas de bebidas ( alcóolicas e não alcóolicas), frascos de perfume e potes de alimentos,
                        são exemplos de materiais que podem ser reciclados.{'\n'}
                    </Text>

                    <Text>
                        Ao descartar esses materiais, é importante estar bem embalado , para evitar ferimentos
                        na hora da recolha.{'\n'}
                    </Text>

                    <Text>
                        O vidro é um material 100% reciclavél, portanto ao reciclar esse material, economiza recursos
                        como energia e água na sua fabricação. {'\n'}
                    </Text>


                </ScrollView>



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

        </SafeAreaView >
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
    },

    boxHeader: {
        flex: 1,
        backgroundColor: colors.gray,
        width: '100%',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingVertical: '5%',
        flexWrap: 'wrap'
    },

    BoxSubtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.heading,
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontFamily: fonts.text,
        marginBottom: 5
    },

    scrollview: {
        paddingHorizontal: '15%',
    },

    text: {
        paddingTop: '10%'
    },

    boxBackButton: {
        flex: 1,
        paddingTop: 5,
        paddingVertical: 10,
        paddingHorizontal: '45%',
        marginTop: 80,
        justifyContent: 'center',
        backgroundColor: colors.gray,
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
