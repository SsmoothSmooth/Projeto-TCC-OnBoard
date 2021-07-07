import react from 'react';
import {
 View,
 Text,
 StyleSheet,

} from 'react-native';

export function ColetoresOnBoard(){
 return(
     <View style={Styles.container}>
         <Text>Selecionar inicio</Text>
         </View>
       )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor> ColetoresOnBoard.background
    }
});