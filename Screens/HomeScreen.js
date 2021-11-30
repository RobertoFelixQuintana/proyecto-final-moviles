import React, {useContext,useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PokeContext} from '../context/PokeContext';

export default function HomeScreen() {
    const {searchPokemon,allPokemons} = useContext(PokeContext);
    
    const [search,setSearch]=useState('');

    const onChange =(e)=>{
        const temporal = e.target.value;
        setSearch(temporal.toLowerCase());
    }
    const onClick = async (e) =>{
        const data= await searchPokemon(search);
        console.log(data);
    }
    return (

                <SafeAreaView>
                    <TextInput
                    style={styles.input}
                    onChange={onChange}
                    maxLength={40}
                    placeholder="busca pokemon"
                    />
                
                    <Text>{search}</Text>
                    <Button
                    onPress={onClick}
                    title="Buscar"
                    />
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
    containerInput:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        minWidth:90,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });