import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed(){
    return(
        <SafeAreaView style={styles.container}> 

            <Text style={styles.title}> News </Text>

            <Text style={styles.feed}>  </Text>
            <Text style={styles.feed}>  </Text>
            <Text style={styles.feed}>  </Text>

            <TouchableOpacity>

             <Text style={styles.button}>Inicio Menu Perfil</Text>   

            </TouchableOpacity>

        </SafeAreaView> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },

    title: {
        fontSize: 50,
        backgroundColor: colors.gray,
        width: '100%',
        paddingVertical: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.heading
   
       
    },

    feed: {
        textAlign: 'center',
        width: '75%',
        backgroundColor: colors.grey    
        
    },

    button: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: colors.green_cyan,
       
    }
  
});