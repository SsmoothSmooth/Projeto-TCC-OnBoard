import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed(){
    return(
        <SafeAreaView style={styles.container}> 

            <Text style={styles.title}> News </Text>

            <Text style={styles.feed}> </Text>
            <Text style={styles.feed}> </Text>
            <Text style={styles.feed}> </Text>

            <Text style={styles.feed2}> </Text>

             <Text style={styles.base}> </Text>   

            

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
        fontSize: 60,
        backgroundColor: colors.gray,
        width: '100%',
        paddingVertical: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.heading
   
       
    },

    feed: {
        textAlign: 'center',
        fontSize: 50,
        width: '80%',
        backgroundColor: colors.grey    
        
    },

    feed2: {
        textAlign: 'center',
        fontSize: 150,
        width: '80%',
        backgroundColor: colors.grey    
        
    },

    base: {
        width: '100%',
        textAlign: 'center',
        fontSize: 100,
        backgroundColor: colors.gray,
       
    }
  
});