import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";

import Header from "../../components/Header";
import IPokeData from "../../services/IPokeData";
import PokeBox from "../../components/PokeBox";
import api from "../../services/api";

import LottieView from 'lottie-react-native';
import squirtle from '../../assets/lotties/splash-screen.json'
import { context } from "../../context";
import Pagination from "../../components/Pagination";

const START = 1
const END = 151
const ITEMS_PER_PAGE = 30


export default function Home() {
  const [currentPokeData, setCurrentPokeData] = useState([]);
  const [initialPokeData, setInitialPokeData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState([]);
  const [ordered, setOrdered] = useState(false)
  const [search, setSearch] = useState<string>("");

  const ctx = useContext(context)

  const navigation = useNavigation()

  async function getPokeData() {
    const data: any = new Array
    for (var pokemon = START; pokemon <= END; pokemon++) {
      await api.get(`pokemon/${pokemon}`)
        .then((response) => {
          data.push(response.data)
        })
        .catch(err => {
          console.log('Opa, deu um erro ' + err)
        })
    }
    setPokeData(data)
    setIsLoaded(!isLoaded);
  }

  useEffect(() => {
    if (isLoaded === false) {
      getPokeData();
    }
  }, [isLoaded]);

  const sortPokemons = () => {
    setInitialPokeData(pokeData);
    let newData = [...pokeData];
    newData.sort((a: { name: string }, b: { name: string }) => a.name < b.name ? -1 : 1);
    return newData;
  }

  const handleSortByNameButton = () => {
    if (!ordered) {
      setPokeData(sortPokemons);
      setOrdered(true);
      return
    }
    setPokeData(initialPokeData);
    setOrdered(false);

  }

  const handleChangeScreen = () => {
    navigation.navigate('PokeInfo' as never)
  }

  const onPageChanged = ({ currentPage }) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    setCurrentPokeData(pokeData.slice(offset, offset + ITEMS_PER_PAGE))
  }

  return (
    <View style={styles.container}>
      <Header
        function={() => { handleSortByNameButton() }}
        ordered={ordered}
      />
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          placeholder="Procurar"
          onChangeText={(textFromEvent) => setSearch(textFromEvent)}
        />
      </View>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.pokemonContainer}>
            {currentPokeData.map((poke: IPokeData, key: number) => {
              const pokeColor = theme.types[poke.types[0]["type"].name];
              if (poke.name.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <PokeBox
                    key={key}
                    img={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`}
                    bgColor={pokeColor}
                    name={poke.name}
                    id={poke.id}
                    onPress={() => {
                      handleChangeScreen()
                      ctx.setPokeInfo(poke)
                      ctx.setBgColor(pokeColor)
                    }}
                  />
                );
              }
            })}
          </View>

          <Pagination
            limit={ITEMS_PER_PAGE}
            total={END}
            onPageChanged={onPageChanged}
          />

        </ScrollView>

      ) : (

        <View style={styles.containerAnimation}>
          <LottieView
            style={styles.animation}
            source={squirtle}
            autoPlay
            loop
          />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>

      )}

    </View>
  );
}
