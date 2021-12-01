import React, {useContext,useState,useEffect} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PokeContext} from '../context/PokeContext';

export default function HomeScreen() {
    const {searchPokemon,allPokemons} = useContext(PokeContext);
    const [search,setSearch]=useState("");

    const onChange =(palabra)=>{
        let temporal = palabra.toLowerCase();
        setSearch(temporal);
    }
    const onClick = async () =>{
        const data= await searchPokemon(search);
        
    }

    return (
        <SafeAreaView>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>{onChange(text)}}
            maxLength={40}
            placeholder="Buscar pokemon"
            />
            
            <Button
            onPress={onClick}
            title="Buscar"
            />
            <Text>Busqueda: {search}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        minWidth:90,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });