import React from 'react';
import {
    View, 
    Text, 
    SafeAreaView, 
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){

    return(

        <View style={styles.container}>

          <Text>    
              News
          </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
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

    image: {
        height: Dimensions.get('window').width * 0.7
        
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },

    button: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 10
    },

    buttonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }

})