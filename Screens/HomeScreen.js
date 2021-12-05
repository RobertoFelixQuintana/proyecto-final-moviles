import React, {useContext,useState,useEffect} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, Card} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PokeContext} from '../context/PokeContext';

export default function HomeScreen() {
    const {searchPokemon,setPokemon,pokemon,pokemonEncontrado} = useContext(PokeContext);
    
    const [search,setSearch]=useState("");

    const onChange =(palabra)=>{
        let temporal = palabra.toLowerCase();
        setSearch(temporal);
    }
    const onClick = async () =>{
        const data= await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
    
            <View style={styles.containerButton}>
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
            </View>
            {pokemonEncontrado==true ?
                
                <View>
                    <Card key="1" containerStyle={{width:"90%", marginBottom:5}}>
                     <Card.Title>{pokemon.name}</Card.Title>
                     <Card.Divider/>
                     <Card.Image source={{
                        uri: pokemon.sprites?.front_default
                     }}
                     resizeMode="contain"
                     />
                     <Text style={{marginTop: 5}}>
                            Peso: {pokemon.weight}
                       </Text>
                    </Card>
                </View>

                :
                <View>
                    <Text>No se ha encontrado al pokemon</Text>
                </View>
                
            }
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
    containerButton:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        minWidth:80,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });