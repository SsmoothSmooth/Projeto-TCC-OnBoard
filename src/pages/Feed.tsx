import React from 'react';
import {
    View, 
    Text, 
    StyleSheet
    
    
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Feed (){

    return(
 
        <View style={styles.container}> 

        <View><Text style={styles.title}> News </Text></View>

        <View><Text style={styles.news}>  </Text></View>

        </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        
        paddingVertical: 60,
        backgroundColor: colors.gray
        
    },

    title: {
        fontSize: 60,
        alignItems:'center',
        fontFamily: fonts.heading

    },

    news: {   
        
        

    },

})