import react from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image

} from 'react-native';
import colors from '../styles/colors';

export function Header(){
    return(
            
        <View style={style.container}>

          <Text>    
              Teste1
          </Text>

          <Text>    
              Teste
          </Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alingItems: 'center',
        backgroundColor: colors.red
    }
})