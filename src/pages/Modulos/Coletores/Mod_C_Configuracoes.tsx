import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';
import { Button } from '../../../components/Button';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

import { useFocusEffect } from '@react-navigation/native';

import {db} from '../../../firebase/firebase_db'
import { collection, query, where, getDocs } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';



interface UserDb {
    Apelido: string;
    Telefone: number;
    email:  string;
  }

export function Mod_C_Configuracoes(){
     const navegation = useNavigation();

     const [ user,  setUser] = useState<UserDb>({} as UserDb);


     // Navegação
      function touchSalvar(){
          navegation.navigate('Mod_C_Configuracoes')
      }

      function touchVoltar(){
          navegation.navigate('Mod_C_TelaPerfil')
      }

      // Alterar Edit

      function touchApelido(){
        navegation.navigate('Mod_C_AlterarApelido')
    }

    function touchTelefone(){
        navegation.navigate('Mod_C_AlterarTelefone')
    }

    function touchEmail(){
        navegation.navigate('Mod_C_AlterarEmail')
    }


      //**

      useFocusEffect(
        React.useCallback(() => {
    
          dados();
          
            return () => {
                null
            }
    
        }, [])
    );
 
    async function dados(){
        try {
            const uid = await getData();

            const q = query(collection(db, "Cadastro"), where("UID Login", "==", uid));
            const querySnapshot = await getDocs(q);
            const valor = querySnapshot.docs[0].data();
            setUser({
                        Apelido: valor.Apelido,
                        Telefone: valor.Telefone,
                        email:  valor.Email
                    });
            console.log(valor);


            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            //   });

            // const docRef = doc(db, "Cadastro", "Uc9tK8027YZ5Pq2q3JGP");
            // const docSnap = await getDocFromServer(docRef);

            // if (docSnap.exists()) {
            //     const docUser = docSnap.data()
            //     // console.log("Document: ", JSON.parse(JSON.stringify(apelido)).Cidade);
            //     // console.log("Document: ", docUser.Apelido); 
            //     setUser({
            //         Apelido: docUser.Apelido,
            //         Telefone: docUser.Telefone,
            //         email:  docUser.Email
            //     });

            // } else { 
            // // doc.data() will be undefined in this case
            // console.log("No such document!");
            // }
            
        } catch (error) {
            console.log(error);
        }
        
    }

    
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if(value !== null) {
        return value;
      }
    } catch(e) {
        console.log(e)

    }
  }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}> 

            <View style={styles.header}>
                <ModHeader
                    title="Configurações"
                 />
                </View>

                <View style={styles.boxInformation}>
                    <View style={styles.Information}>
                        <Text >Apelido: </Text>
                        <Text >{user.Apelido}</Text>
                        <Button style={styles.edit}
                            title="Editar"
                            onPress={touchApelido}
                        />
                    </View>
                    
                    <View style={styles.Information}>
                        <Text >Telefone:</Text>
                        <Text >{user.Telefone}</Text>
                        <Button style={styles.edit}
                            title="Editar"
                            onPress={touchTelefone}
                        />
                    </View>
                    <View style={styles.Information}>
                        <Text >E-mail:</Text>
                        <Text >{user.email}</Text>
                        <Button style={styles.edit} 
                            title="Editar"
                            onPress={touchEmail}
                        />
                    </View>
                </View>

                <View style={styles.boxButton}>
                    <Button style={styles.button}
                        title="Salvar"
                        onPress={touchSalvar}
                        
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={touchVoltar}
                >

                    <FontAwesome5
                        name="arrow-alt-circle-left"
                        style={styles.buttonIcon}                       
                    />

                </TouchableOpacity>

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
         
    },

    header: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 8,
        backgroundColor: colors.gray,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '10%',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
    },

    boxInformation: {

    },

    Information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2%'
    },

    edit: {
        paddingLeft: '20%',
    },

    boxButton: {
        width: '100%',
        paddingHorizontal: '20%',
    },

    button: {
        backgroundColor: colors.gray,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%', 
    },
    
    buttonIcon: {
        color: colors.black,
        fontSize: 35,
    }
})