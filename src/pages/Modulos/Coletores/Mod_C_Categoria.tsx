import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import { FontAwesome5 } from '@expo/vector-icons';


export function Mod_C_Categoria() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>
                    <ModHeader
                        title="Categorias"
                    />
                </View>

                <View style={styles.MenuButton}>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../assets/papel.png')}
                            style={styles.ImageIconStyle1}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>

                        <Image
                            source={require('../../../assets/metal.png')}
                            style={styles.ImageIconStyle2}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../assets/vidro.png')}
                            style={styles.ImageIconStyle3}
                        />

                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <Image
                            source={require('../../../assets/plastico.png')}
                            style={styles.ImageIconStyle4}
                        />

                    </TouchableOpacity>

                </View>

                <View style={styles.boxBackButton}>

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchInit}
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

    MenuButton: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        marginHorizontal: 40,
    },

    ImageIconStyle1: {
        padding: 20,
        paddingHorizontal: 20,
        marginVertical: 20,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    ImageIconStyle2: {
        padding: 20,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',

    },

    ImageIconStyle3: {
        padding: 20,
        paddingHorizontal: 20,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    ImageIconStyle4: {
        padding: 20,
        marginHorizontal: 30,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },

    boxBackButton: {
        flex: 1,
        paddingVertical: '10%',
        marginTop: '70%',
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