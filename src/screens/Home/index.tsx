import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from "./styles";

import Pokebola from '../../assets/Pokeball.svg'
import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from '@expo/vector-icons'
import api from "../../services/api";
import IPokeData from "../../services/IPokeData";

export default function Home() {

    const [pokeData, setPokeData] = useState([])

    async function getPokeDataFirstGen() {
        
        const response = await api.get(`pokemon`)
        setPokeData(response.data.results as never)
        //console.log(pokeData)
    }

    const renderItem = (pokemon:any) => {
        const url = pokemon.item.url
        const ID = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

        return(
            <View style={styles.pokemonContainer}>
                    <View style={styles.pokemonCard}>
                        <TouchableOpacity>
                            <View style={styles.pokemon}>
                                <View>
                                    <Image
                                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`}}
                                        style={{width: 100, height: 100}}
                                    />
                                </View>
                                <View style={styles.rectangle}>
                                    <Text style={{color: '#fff', textTransform: 'capitalize'}}>{pokemon.item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }

    useEffect(() => {
        getPokeDataFirstGen()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Pokeball/>
                    <Text style={styles.textLogo}>Pokédex</Text>
                </View>
                <Ionicons name="filter" size={32} color="black" />
            </View>
            <TextInput
            style={styles.search}
            placeholder="Procurar"
            />
            
            <FlatList
                data={pokeData}
                renderItem={renderItem}
                numColumns={3}
                keyExtractor={(pokemon) => pokemon.name}
                contentContainerStyle={{flexDirection: 'column', justifyContent: 'center'}}
            />

        </View>
    )
}