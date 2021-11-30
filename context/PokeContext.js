import React, {createContext, useState, useEffect} from 'react';
import { Alert } from 'react-native';

export const PokeContext = createContext();


const PokeProvider = (props)=>{
    const [search,setSearch]=useState("");
    const [allPokemons,setallPokemons]= useState([]);

    const searchPokemon = async (pokemon)=>{
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res= await fetch (url);
            const data = await res.json()
            return data;
            
        }catch(e){
            console.log(e);
            Alert.alert('No se encontro al pokemon')
        }
        
    }
    /*
    useEffect(()=>{
        getAllPokemons();
    },[])*/

  return(
    <PokeContext.Provider
    value={{
        searchPokemon,
        allPokemons
    }}>
    {props.children}
    </PokeContext.Provider>
  );
}

export default PokeProvider;