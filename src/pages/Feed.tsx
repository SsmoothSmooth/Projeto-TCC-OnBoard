import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed(){
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.wrapper}>

            <View style={styles.boxHeader}>
                 <Text style={styles.title}> News{'\n'} </Text>
            </View>

            <View style={styles.boxFeed}>
                <Text style={styles.feed}> </Text>
                <Text style={styles.feed}> </Text>
                <Text style={styles.feed}> </Text>

                <Text style={styles.feed2}> </Text>
            </View>

            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.buttonInicio}>
                    <Text style={styles.buttonText}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonMenu}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPerfil}>
                    <Text style={styles.buttonText}>Perfil</Text> 
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
        justifyContent: 'space-between',
        backgroundColor: 'white',
       
        
    },

    boxHeader: {
        width: '100%',
        backgroundColor: colors.gray,
        justifyContent: 'center',
        paddingTop: '16%',
        alignItems: 'center'
        
    },

    title: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.heading
   
    },

    boxFeed: {
     width:'100%',
     paddingHorizontal:'10%'

    },

    feed: {
        fontSize: 50,
        marginTop: '2%',
        alignItems:'center',
        backgroundColor: colors.grey
        
    },

    feed2: {
        fontSize: 100,
        marginVertical: '2%',
        backgroundColor: colors.grey    
        
    },

    boxButton: {
        flex: 1,
        justifyContent:'space-between',
        paddingHorizontal: '10%',
        width:'100%',
        backgroundColor: colors.gray,
        alignItems:'center',
        flexDirection:'row'
        
    },

    buttonInicio: {
        backgroundColor: colors.green_cyan,
        textAlign: 'center',
        width: 60,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        margin: 10

       
    },

    buttonMenu: {  
        backgroundColor: colors.green_cyan, 
        width: 60,
        height: 60,
        borderRadius: 16,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10
              
    },

    buttonPerfil: {
        backgroundColor: colors.green_cyan,
        width: 60,
        height: 60,
        borderRadius: 16,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10

    },

    buttonText: {
        
        
    },
  
});