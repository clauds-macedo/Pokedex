import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from 'react-native'
import { styles } from "./styles";

import Pokebola from '../../assets/Pokeball.svg'
import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from '@expo/vector-icons'
import api from "../../services/api";
import IPokeData from "../../services/IPokeData";

export default function Home() {

    const [pokeData, setPokeData] = useState([])
    const pokeArray = [pokeData]

    async function getPokeDataFirstGen() {
        for (var pokemon = 1; pokemon < 152; pokemon++){
            const response = await api.get(`pokemon/${pokemon}`)
            setPokeData(response.data)
        }
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
            <View style={styles.pokemonContainer}>
                    <View style={styles.pokemonCard}>
                        <View style={styles.pokemon}>
                            <View style={styles.rectangle}>
                            
                            </View>
                        </View>
                </View>
            </View>
            {/* {

                pokeArray 
                ? 
                pokeArray.map((poke:IPokeData, key: number) => {
                    return(
                        null
                    )
                })
                : <Text>Loading</Text>
            } */}
        </View>
    )
}