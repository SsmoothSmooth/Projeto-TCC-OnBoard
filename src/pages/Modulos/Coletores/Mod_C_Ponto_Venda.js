import React, { useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { ModHeader } from '../../../components/ModHeader';
import { NavBar } from '../../../components/NavBar';
import { useNavigation } from '@react-navigation/core';
import colors from '../../../styles/colors';

// const GOOGLE_MAPS_APIKEY = '...';


// Pegar a regiao inicia do mapa e o tamanho
  const local01 = {
    latitude:  -22.8001246,
    longitude: -47.1890825,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014    
  }

  const local02 = {
    latitude: -22.790703572336124,
    longitude: -47.19209014882285,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014   
  }

  const local03 = {
    
    latitude: -22.791795111181333,
    longitude:  -47.18888164619908,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014   
  }


export default function Mod_C_Ponto_Venda() {
    const navigation = useNavigation();

    const [ coordenadas,  setCoordenadas] = useState() 
    const [isLoading, setisLoading] = useState(true)

    useFocusEffect(
        React.useCallback(() => {
    
          map ();
          
            return () => {
                null
            }
    
        }, [])
    );
    
    async function map (){
      try {
        
        // Permissão de uso para o usuario
      const permission = await Location.requestForegroundPermissionsAsync();
      var local = await Location.getCurrentPositionAsync({});
        // console.log(local.coords);
      setCoordenadas({
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
      })
      setisLoading(false)
    
    } catch (error) {
        console.log(error);
    
    }  
    }
  
const mapRef = useRef(null)

    if(isLoading) {
      return (<View></View>)
    }
    else {



      return (

        <View style={styles.container}>
          <ModHeader
            title = 'Mapas'
          />

          <MapView  style={{width:'100%', height: '100%'}} 
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            // região inicial
            initialRegion = {coordenadas} 
            //showsUserLocation
            // userLocationFastestInterval = {5000}
    
            // Valoor maximo e mínimo do zoom
            // maxZoomLevel = {1}
            // minZoomLevel = {2}
          >
           
           <Marker coordinate = {local01}
             pinColor = "yellow"
            
            />
    
            <Marker coordinate = {local02}
             pinColor = "yellow"
            
            />

            <Marker coordinate = {local03}
             pinColor = "yellow"
            
            />
     
    
          </MapView>
        </View>
      );
    }
    
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },

});
