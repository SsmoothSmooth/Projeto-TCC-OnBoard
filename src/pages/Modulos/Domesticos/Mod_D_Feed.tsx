import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../../../styles/colors';

import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { NavBar } from '../../../components/NavBar';

export function Mod_D_Feed(){
    const navigation = useNavigation();

    function touchSacola(){
        navigation.navigate('Sacola')
    }

    return(
        
        <SafeAreaView style={styles.container}> 
            <View style={styles.wrapper}>

                <View style={styles.header}>
                 <ModHeader
                    title="News"
                 />
                </View>
                
                <ScrollView style={styles.boxFeed}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus vehicula libero.
                    </Text>
                    <Text>
                        Sed faucibus mi in tincidunt tincidunt. 
                        Donec ac lacus vitae velit luctus auctor sit amet volutpat lectus.

                    </Text>

                    <Text style={styles.text}>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>

                    <Text style={styles.text}>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>


                    <Text style={styles.text}>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>


                    <Text style={styles.text}>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>

                </ScrollView>

                <View style={styles.boxButton}>
                    <NavBar
                        style={styles.button}
                        title="Inicio"
                    />

                    <NavBar
                        style={styles.button}
                        title="Menu"
                    />

                    <NavBar
                        style={styles.button}
                        title="Perfil"
                    />
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
         
    },

    header: {
        width: '100%',
        paddingVertical: '2%',
        backgroundColor: colors.gray,
    },

    boxFeed: {
        paddingHorizontal: '10%'
    },

    text: {
        paddingTop: '10%'
    },


    boxButton: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        backgroundColor: colors.gray
    },

    button: {
        backgroundColor: colors.green_cyan,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    },

});