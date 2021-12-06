import React, {createContext, useState, useEffect} from 'react';
import { Alert } from 'react-native';

export const PokeContext = createContext();


const PokeProvider = (props)=>{
    const [allPokemons,setallPokemons]= useState([]);
    const [pokemonEncontrado,setPokemonEncontrado]=useState(false);
    const [pokemon,setPokemon]=useState([]);
    const [topPokemons]=useState([]);
    const nombreTopPokemons = ['kyogre','dialga','rayquaza','mewtwo','kyurem','diancie','zygarde','palkia','lugia','necrozma'];
    

    const searchPokemon = async (pokemon)=>{
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res= await fetch (url);
            const data = await res.json();
            console.log('data',data);
            const temporal={
                nombre:data.name,
                img:data.sprites.front_default,
                peso: data.weight,
                tipo: data.types[0].type.name,
                experiencia: data.base_experience,
                ataque:data.stats[1].base_stat,
                especial:data.stats[3].base_stat,
                defensa:data.stats[2].base_stat
            }
            setPokemon(temporal);
            setPokemonEncontrado(true);
            Alert.alert('Se encontro al pokemon');
            
        }catch(e){
            setPokemonEncontrado(false);
            Alert.alert('No se encontro al pokemon');
        }
    }
    const topPokemonsSearch = async (pokemon) =>{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(async(res)=> await res.json()
        .then(async(data)=> {
            const temporal={
                nombre:data.name,
                img:data.sprites.front_default,
                peso: data.weight,
                tipo: data.types[0].type.name,
                experiencia: data.base_experience,
                ataque:data.stats[1].base_stat,
                especial:data.stats[3].base_stat,
                defensa:data.stats[2].base_stat
            }
            topPokemons.push(temporal);
        })
        )
    } 
    const configurarTopPokemons = ()=>{
        nombreTopPokemons.map((element) => {
            topPokemonsSearch(element);   
        }); 
        
    }
    useEffect(() => {
        configurarTopPokemons();
      });


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
        setPokemon,
        configurarTopPokemons
    }}>
    {props.children}
    </PokeContext.Provider>
  );
}

export default PokeProvider;