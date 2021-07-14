import React from 'react';
import {
    View, 
    Text, 
    StyleSheet
    
    
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed (){

    return(
 
        <View style={styles.container}>
         <View>

          <Text style={styles.title}> News </Text>

          <Text style={styles.news}> bla bla bla </Text>
          
         </View>
        </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 60,
        marginTop: getStatusBarHeight(),
        backgroundColor: colors.gray
        
    },

    title: {
        fontSize: 60,
        fontFamily: fonts.heading

    },

    news: {   
        fontSize: 25,
        justifyContent: 'center',
        fontFamily: fonts.heading

    },

})