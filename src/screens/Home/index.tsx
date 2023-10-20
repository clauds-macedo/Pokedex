import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";
import LoadingAnimation from "./components/LoadingAnimation";
import SearchBox from "./components/SearchBox";
import PokeBox from "../../components/PokeBox";
import Header from "./components/Header";
import Error from "./components/Error";
import api from "../../services/api";

import IPokeData from "../../services/IPokeData";
import { styles } from "./styles";

export default function Home() {
  const [error, setError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState<IPokeData[]>([]);
  const [search, setSearch] = useState<string>("");

  // const ctx = useContext(context);

  const navigation = useNavigation();

  async function getPokeData() {
    let data;
    const promisesArray = new Array(5)
      .fill(null)
      .map(async (_, index) => {
        return api.get(`/asas${index + 1}`)
      })
    try {
      data = await Promise.all(promisesArray)
      const aux = data?.map((e) => e.data) 
      setPokeData(aux);
      setIsLoaded(!isLoaded)
    } catch (error) {
      setError(true)
      console.warn(error)
    }
  }

  useEffect(() => {
    getPokeData();
  }, []);

  // const sortPokemons = () => {
  //   setInitialPokeData(pokeData);
  //   let newData = [...pokeData];
  //   newData.sort((a: { name: string }, b: { name: string }) => a.name < b.name ? -1 : 1);
  //   return newData;
  // }

  // const handleSortByNameButton = () => {
  //   if (!ordered) {
  //     setPokeData(sortPokemons);
  //     setOrdered(true);
  //     return
  //   }
  //   setPokeData(initialPokeData);
  //   setOrdered(false);

  // }

  const handleChangeScreen = () => {
    navigation.navigate("PokeInfo" as never);
  };

  return (
    <View style={styles.container}>
      {isLoaded && !error ? (
        <>
          <Header />
          <SearchBox
            onChangeText={async (textFromEvent) => setSearch(textFromEvent)}
          />
          <View style={{flex: 1}}>
            <FlatList
              style={styles.listContainer}
              numColumns={3}
              data={pokeData}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => <PokeBox {...item} /* onPress */ />}
            />
          </View>
        </>
      ) : error ? <Error /> : <LoadingAnimation />}
    </View>
  );
}
