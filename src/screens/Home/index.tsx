import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import Pokebola from "../../assets/Pokeball.svg";
import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
import IPokeData from "../../services/IPokeData";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);

  async function getPokeDataFirstGen() {
    const pokeArray: any = [];
    for (var pokemon = 1; pokemon < 151; pokemon++) {
      const response = await api.get(`pokemon/${pokemon}`);
      pokeArray.push(response.data);
    }
    setPokeData(pokeArray);
  }

  useEffect(() => {
    getPokeDataFirstGen();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Pokeball />
          <Text style={styles.textLogo}>Pokédex</Text>
        </View>
        <Ionicons name="filter" size={32} color="black" />
      </View>
      <TextInput style={styles.search} placeholder="Procurar" />
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.pokemonContainer}>
            {pokeData ? (
              pokeData.map((poke: IPokeData, key: number) => {
                  //console.log(poke.sprites['front_default'])
                return (
                  <View style={styles.pokemonCard} key={key}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={styles.pokemon}>
                            <Image source={{uri: poke.sprites['front_default']}}
                            style={{width: 100, height: 100}}/>
                          <View style={styles.rectangle}>
                              <Text style={styles.pokeName}>{poke.name}</Text>
                          </View>
                        </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <Text>Loading</Text>
            )}
          </View>
      </ScrollView>
    </View>
  );
}
