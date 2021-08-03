import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import sacola from '../../assets/sacola.png';
import { FontAwesome5 } from '@expo/vector-icons';



export function CadastroColetor() {
    const navigation = useNavigation();

    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const [name2, setName2] = useState<string>();

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleInputChange2(value2: string) {
        setIsFilled(!!value2);
        setName2(value2);

    }


    function touchInit() {

        if (!name)
            return Alert.alert('Preenchimento obrigatório do Nome');

        if (!name2)
            return Alert.alert('Preenchimento obrigatório do Email');

        navigation.navigate('CadastroColetor2')
    }

    function touchModalityOptions() {
        navigation.navigate('ModalityOptions')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.boxHeader}>

                    <Text style={styles.title}>
                        Coletores OnBoard
                    </Text>

                    <Image
                        source={sacola}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                
                <View style={styles.boxInput}>
                    <Text style={styles.subtitle}>
                        Nome Completo: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        onChangeText={handleInputChange}
                    />

                    <Text style={styles.subtitle}>
                        Email: {'\n'}

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        onChangeText={handleInputChange2}
                    />
                </View>

                <View style={styles.boxButton}>
                        <Button
                            title="Confirmar"
                            onPress={touchInit}

                        />
                </View>

                <View style={styles.boxBackButton}>
                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.5}
                        onPress={touchModalityOptions}
                    >
                    <FontAwesome5
                        name="arrow-alt-circle-left"
                        style={styles.backButtonIcon}
                        
                    />

                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: '2%'
    },

    boxHeader:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15%'
    },
    
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 38,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34
        
    },
    
    image: {
        margin: '8%',
    },

    boxInput: {
        width: '100%',
        paddingHorizontal: '15%',
    },

    subtitle: {
        textAlign: 'left',        
        fontSize: 20,
        paddingTop: '2%',
        color: colors.heading,
        fontFamily: fonts.text
    },

    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#52665A',
        color: colors.heading,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '15%'

    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    boxBackButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: '10%',
    },

    backButton: {
        backgroundColor: colors.green,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    backButtonIcon: {
        color: colors.green_cyan,
        fontSize: 35,
    }

})