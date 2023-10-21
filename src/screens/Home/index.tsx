import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

import LoadingAnimation from "./components/LoadingAnimation";
import ListLoading from "./components/ListLoading";
import SearchBox from "./components/SearchBox";
import PokeBox from "../../components/PokeBox";
import Header from "./components/Header";
import Error from "./components/Error";

import IPokeData from "../../services/IPokeData";
import { theme } from "../../global/theme";
import { styles } from "./styles";
import api from "../../services/api";

export default function Home() {
  const [hasMoreData, setHasMoreData] = useState(true);
  const [pokeId, setPokeId] = useState(1);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState<IPokeData[]>([]);
  const [search, setSearch] = useState("");

  const LIMIT_POKEMON_ID = 100;

  // const ctx = useContext(context);
  const navigation = useNavigation();

  /* 

    Se o numero de requisições pré-estabelecido na função for maior
    que o limite de pokemons, então a funcão calcula a diferença até o limite e retorna esse valor.
    Caso contrário, retorna o número de requsições padrão.
  
    */

  function verifyIfCanDoMoreRequests() {
    let numberOfRequests = 30;
    if (pokeId + numberOfRequests < LIMIT_POKEMON_ID) {
      return numberOfRequests;
    }
    setHasMoreData(false)
    return (numberOfRequests = LIMIT_POKEMON_ID - pokeId);
  }

  async function createPromisesArray(numberOfRequests: number) {
    // console.log("estado do pokeId ===>", pokeId);
    // console.log("numero de requests ===>", numberOfRequests);
    const promisesArray = new Array(numberOfRequests)
      .fill(null)
      .map(async (_, index) => {
        return api.get(`/${index + pokeId}`);
      });
    return promisesArray;
  }

  async function getPokeData() {
    if(!hasMoreData) return

    let apiResponse;
    const promisesArray = await createPromisesArray(verifyIfCanDoMoreRequests());

    try {
      apiResponse = await Promise.all(promisesArray);

      const pokeInfo = apiResponse.map((pokemon) => pokemon.data);
      setPokeData((prev) => [...prev, ...pokeInfo]);
    } catch (error) {
      setError(true);
      console.warn(error);
    }
    setPokeId((prev) => prev + 31);
    setIsLoaded(true);
  }

  useEffect(() => {
    getPokeData();
  }, []);

  const handleChangeScreen = () => {
    navigation.navigate("PokeInfo" as never);
  };

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <>
          <Header />
          <SearchBox
            onChangeText={async (textFromEvent) => setSearch(textFromEvent)}
          />
          <View style={styles.pokemonsContainer}>
            <FlashList
              onEndReached={getPokeData}
              ListFooterComponent={
                hasMoreData ? <ListLoading /> : null
              }
              onEndReachedThreshold={0.2}
              estimatedItemSize={132}
              numColumns={3}
              data={pokeData}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <PokeBox {...item} theme={theme} onPress={handleChangeScreen} />
              )}
            />
          </View>
        </>
      ) : (
        <LoadingAnimation />
      )}
    </View>
  );
}
