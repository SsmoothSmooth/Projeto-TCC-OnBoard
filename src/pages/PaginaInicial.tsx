import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Header } from '../components/Header';
import colors from '../styles/colors';

export function PaginaInicial() {
    return (
        <View style={styles.container}>
            <Header />

            <Text> OK </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});