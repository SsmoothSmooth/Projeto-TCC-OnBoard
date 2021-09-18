import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';



import userImg from '../assets/zezinho.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Zezinho</Text>
            </View>

            <Image source={userImg} style={styles.image} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },

    image: {
        width: 56,
        height: 56,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    }

})