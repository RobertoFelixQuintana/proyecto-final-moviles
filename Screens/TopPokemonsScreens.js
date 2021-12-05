import { useCardAnimation } from '@react-navigation/stack';
import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PokeContext} from '../context/PokeContext';

export default function TopPokemonsScreen() {
    const {topPokemons}= useContext(PokeContext);

    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'Top 10 Pokemones', style: { color: '#fff'}}}
                containerStyle={{borderBottomColor:'black',borderBottomWidth: 2 }}
            />
            <View style={styles.container}>
            {topPokemons.map((e,i)=>{

                return(
                    <Card key={i} containerStyle={{width:"90%", marginBottom:5}}>
                     <Card.Title>{e.name.toUpperCase()}</Card.Title>
                     <Card.Divider/>
                     <Card.Image source={{
                        uri: e.sprites.front_default
                     }}
                     resizeMode="contain"
                     />
                     <Text style={{marginTop: 5}}>
                            Peso: {e.weight}
                       </Text>
                    </Card>

                    );
                })
            }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
});