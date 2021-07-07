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
<<<<<<< HEAD
            
        <View style={style.container}>
=======
        <View style={styles.container}>
>>>>>>> ea70c276e4576cc24bd8e173eefde40d9f93459e

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