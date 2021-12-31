import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Modal from 'react-native-modal'
import { LinearGradient } from 'expo-linear-gradient'


import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
import IPokeData from "../../services/IPokeData";
import SplashScreen from "../Splash";
import PokeBox from "../../components/PokeBox";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [starterNum, setStarterNum] = useState(1);
  const [endNum, setEndNum] = useState(20);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const gens = [1,2,3,4,5,6,7,8]

  async function getPokeData(start:number, end:number) {
    for (var pokemon = start; pokemon <= end; pokemon++) {
      const response = await api.get(`pokemon/${pokemon}`);
      pokeData.push(response.data as never);
    }
    setIsLoaded(!isLoaded)
  }

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible)
  }

  const splicePokemons = () => {
    pokeData.splice(0,endNum)
  }

  useEffect(() => {
    if (isLoaded === false){  
      getPokeData(starterNum, endNum);
      setIsFirstLoad(false)
    }

  }, [isLoaded, starterNum, endNum]);

  return (
    <View style={styles.container}>
      {isLoaded ?
        <>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Pokeball />
              <Text style={styles.textLogo}>Pokédex</Text>
            </View>
            <Ionicons name="filter" size={32} color="black" 
            onPress={() => setIsModalVisible(!isModalVisible)}/>
          </View>

          <TextInput style={styles.search} placeholder="Procurar" />
          <View style={styles.changePage}>
            <Ionicons name="arrow-back-outline" size={32} color="black"
            onPress={() => {
              if(starterNum > 20) {
                setStarterNum(starterNum - 20)
                setEndNum(endNum-20)
                setIsLoaded(false)
                splicePokemons()
              }
            }}
            />
            <Ionicons name="arrow-forward-outline" size={32} color="black"
            onPress={() => {
              setStarterNum(starterNum+20)
              setEndNum(endNum+20)
              setIsLoaded(false)
              splicePokemons()
            }}
            />
          </View>
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
            <Modal isVisible={isModalVisible}
            style={{display: 'flex', alignItems: 'center'}}
            onBackdropPress={() => setIsModalVisible(!isModalVisible)}
            >
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>Filter</Text>
                  <View style={styles.genChoose}>
                    {gens.map((gen, key) => {
                      return(
                      <TouchableOpacity style={styles.genButton}>
                        <Text>{gen}</Text>
                      </TouchableOpacity>)
                    })}
                  </View>
              </View>  
            </Modal>
          </ScrollView>
          <View>

          </View>
        </>
      : !isLoaded && isFirstLoad ?
      <SplashScreen/> : null
      }
    </View>
  );
}
