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
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){

    return(
 
        <View style={styles.container}>
         <View>

          <Text style={styles.title}> News </Text>
          
         </View>
        </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        fontSize: 50,
        width: '100%',
        flexDirection:'row',
        justifyContent: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding: 30
        
    },

    title: {
        fontSize: 50,
        fontFamily: fonts.heading

    },

})