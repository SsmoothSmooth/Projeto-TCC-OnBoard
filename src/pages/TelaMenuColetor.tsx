import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import mapa from '../assets/mapa.png';
import meusresultados from '../src/assets/meusresultados.png';
import pontosdevenda from '../src/assets/pontosdevenda.png';
import tabelasdepreco from '../src/assets/tabelasdepreco.png';
import { useNavigation } from '@react-navigation/core';

export function TelaMenuColetor() {
    const navigation = useNavigation();

    function touchInit() {
        navigation.navigate('')
    }

    function touchInit2() {
        navigation.navigate('')
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                    <Image
                        source={require(mapa.png)}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        mapa
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 200,
        padding: 30,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});

