import React, {createContext, useState, useEffect} from 'react';
import { Alert } from 'react-native';

export const PokeContext = createContext();


const PokeProvider = (props)=>{
    const [allPokemons,setallPokemons]= useState([]);
    const [pokemonEncontrado,setPokemonEncontrado]=useState(false);
    const [pokemon,setPokemon]=useState([]);
    const nombreTopPokemons = ['kyogre','dialga','rayquaza','mewtwo','kyurem','diancie','zygarde','palkia','lugia','necrozma'];
    const topPokemons=[];
    

    const searchPokemon = async (pokemon)=>{
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res= await fetch (url);
            const data = await res.json()
            Alert.alert('Se encontro al pokemon')
            setPokemonEncontrado(true)
            return data;
            
        }catch(e){
            setPokemonEncontrado(false)
            Alert.alert('No se encontro al pokemon')
        }
    }
    const topPokemonsSearch = async (pokemon) =>{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(async(res)=> await res.json()
        .then(async(data)=> {
            topPokemons.push(data);
        })
        )
    } 
    const configurarTopPokemons = ()=>{
        nombreTopPokemons.map( async (element) => {
            await topPokemonsSearch(element);   
        }); 
        console.log('setPokemons',topPokemons);
    }
    configurarTopPokemons();
    
    /*
    useEffect(()=>{
        getAllPokemons();
    },[])*/


  return(
    <PokeContext.Provider
    value={{
        searchPokemon,
        allPokemons,
        topPokemonsSearch,
        nombreTopPokemons,
        topPokemons,
        pokemonEncontrado,
        pokemon,
        setPokemon
    }}>
    {props.children}
    </PokeContext.Provider>
  );
}

export default PokeProvider;