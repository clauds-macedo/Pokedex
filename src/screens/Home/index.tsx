import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles";


import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
import IPokeData from "../../services/IPokeData";
import SplashScreen from "../Splash";
import PokeBox from "../../components/PokeBox";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPokeDataFirstGen() {
    for (var pokemon = 1; pokemon <= 10; pokemon++) {
      const response = await api.get(`pokemon/${pokemon}`);
      pokeData.push(response.data as never);
    }
    setIsLoading(!isLoading);
  }

  useEffect(() => {
    getPokeDataFirstGen();
  }, []);

  return (
    <View style={styles.container}>
      {!isLoading ?
        <>
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
              {pokeData.map((poke: IPokeData, key: number) => {
                const pokeColor = theme.types[poke.types[0]["type"].name];
                return (
                  <PokeBox 
                    key={key}
                    img={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`}
                    bgColor={pokeColor}
                    name={poke.name}
                    id={poke.id}
                  />
                );
              })}
            </View>
          </ScrollView>
        </>
      :
      <SplashScreen/>
      }
    </View>
  );
}
