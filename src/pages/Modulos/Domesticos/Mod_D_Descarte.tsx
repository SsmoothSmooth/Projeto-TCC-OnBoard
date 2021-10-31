import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import colors from '../../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { ModHeader } from '../../../components/ModHeader';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Mod_D_Descarte() {
    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>
            <View  style={styles.wrapper}> 
               
               <View style={styles.header}>

                    <ModHeader 
                        title = 'Descarte'
                    />

               </View>

                <View style={styles.boxImageDescarte}>
                <Image
                    source={require('../../../assets/FolhaDescarte.png')}
                    style={styles.image}
                    resizeMode="contain"
                />

                </View>

                <View style={styles.boxImageVolume}>

                    <Text style={styles.subtitle}> 
                        Papel
                    </Text>
                    <Image
                    source={require('../../../assets/FolhaVolume.png')}
                    style={styles.image}
                    resizeMode="contain"
                    />

                    <Text style={styles.subtitle}>
                        Volume
                    </Text>

                </View>

                <View>
                    <Text style={styles.text}>
                        O - Pequena ( Até 2Kg ) 
                    </Text>

                    <Text style={styles.text}>
                        O - Média (De 2 Kg até 5Kg ) 
                    </Text>

                    <Text style={styles.text}>
                        O - Grande ( De 5Kg até 10Kg )
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: '16%'
    },

    header: {
        width: '100%',
        paddingVertical: '2%',
        backgroundColor: colors.gray,
    },

    boxImageDescarte: {
        backgroundColor: 'pink',
    },

    subtitle: {

    },

    boxImageVolume: {
        
    },

    image: {

    },

    text: {

    }

  
})