import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image

} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return(
            
        <View style={styles.container}>

          <Text>    
              Teste1
          </Text>

          <Text>    
              Teste
          </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})