import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../components/ModHeader';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ScrollView } from 'react-native-gesture-handler';

export function Feed(){
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
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus vehicula libero.
                    </Text>
                    <Text>
                        Sed faucibus mi in tincidunt tincidunt. 
                        Donec ac lacus vitae velit luctus auctor sit amet volutpat lectus.

                    </Text>

                    <Text>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>

                    <Text>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>


                    <Text>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>


                    <Text>
                        neque ac purus rhoncus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Aenean ultricies maximus urna non rhoncus. Praesent sit amet tristique tellus.
                        Nulla dictum rhoncus felis, quis hendrerit nisi semper volutpat. Nulla facilisi.{'\n'}{'\n'}
                    </Text>

                </ScrollView>

                <View style={styles.boxButton}>
                    <ModHeader
                        title="News"
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
        justifyContent: 'space-between',
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

    boxButton: {
        width: '100%',
        backgroundColor: colors.gray
    }
});