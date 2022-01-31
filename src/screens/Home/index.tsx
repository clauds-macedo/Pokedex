import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

import IPokeData from "../../services/IPokeData";
import PokeBox from "../../components/PokeBox";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/theme";
import SplashScreen from "../Splash";
import api from "../../services/api";
import Loading from "../Loading";
import FAB from "../../components/FAB";

export default function Home() {
  const [initialPokeData, setInitialPokeData] = useState([]);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const [search, setSearch] = useState<string>("");
  
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeData, setPokeData] = useState([]);
  
  const [ordered, setOrdered] = useState(false)
  
  const [starterNum, setStarterNum] = useState(1);
  const [endNum, setEndNum] = useState(21);
  const [gen, setGen] = useState(1);
  const gens = [1, 2, 3, 4, 5, 6, 7];

  const generationIDS = [
    { start: 1, end: 151, id: 0 },
    { start: 152, end: 251, id: 1 },
    { start: 252, end: 386, id: 2 },
    { start: 387, end: 493, id: 3 },
    { start: 494, end: 649, id: 4 },
    { start: 650, end: 720, id: 5 },
    { start: 722, end: 807, id: 6 },
  ];

  async function getPokeData(start: number, end: number) {
    for (var pokemon = start; pokemon <= end; pokemon++) {
      const response = await api.get(`pokemon/${pokemon}`);
      pokeData.push(response.data as never);
    }
    setIsLoaded(!isLoaded);
  }

  // const changeModalVisibility = () => {
  //   setIsModalVisible(!isModalVisible);
  // };

  const splicePokemons = () => {
    setPokeData([]);
  };

  const loadPrevious = () => {
    if (starterNum !== generationIDS[gen - 1].start) {
      splicePokemons();
      setStarterNum(starterNum - 20);
      setEndNum(endNum - 20);
      setIsLoaded(false);
      setOrdered(false);
    }
  };

  const loadNext = () => {
    if (
      endNum <= generationIDS[gen - 1].end &&
      endNum !== generationIDS[gen - 1].end
    ) {
      splicePokemons();
      setStarterNum(starterNum + 20);
      starterNum + 41 < generationIDS[gen - 1].end
        ? setEndNum(starterNum + 40)
        : setEndNum(generationIDS[gen - 1].end);
      setIsLoaded(false);
      setOrdered(false);
    }
  };

  // const handleChangeGen = () => {
  //   splicePokemons();
  //   // setIsModalVisible(!isModalVisible);
  //   setIsLoaded(false);
  //   setStarterNum(generationIDS[gen - 1].start);
  //   setEndNum(generationIDS[gen - 1].start + 20);
  // };

  useEffect(() => {
    if (isLoaded === false) {
      getPokeData(starterNum, endNum);
      setIsFirstLoad(false);
      setGen(gen);
    }
  }, [isLoaded, starterNum, endNum, setGen]);

  const sortPokemons = () => {
    setInitialPokeData(pokeData); // nessessário pra quando desordenar
    let newData = [...pokeData];
    newData.sort((a: { name: string; }, b: { name: string; }) => a.name < b.name ? -1 : 1);

    return newData;
  }

  const handleSortByNameButton = () => {
    if(!ordered) {
      setOrdered(true);
      setPokeData(sortPokemons);
    } else {
      setPokeData(initialPokeData);
      setOrdered(false);
    }
    
  }

  return (
    <>
      {isLoaded ? (
        <View style={styles.container}>
          <Header 
            function={() => {handleSortByNameButton()}} 
            ordered={ordered}
          />
          <View style={styles.searchBox}>
            <TextInput
              style={styles.search}
              placeholder="Procurar"
              onChangeText={(textFromEvent) => setSearch(textFromEvent)}
            />
          </View>

          <View style={styles.changePage}>
            <TouchableOpacity>
              <Ionicons
                name="arrow-back-outline"
                size={32}
                color={
                  generationIDS[gen - 1].start === starterNum
                    ? "#e0e0e0"
                    : "black"
                }
                onPress={() => {
                  loadPrevious();
                }}
              />
            </TouchableOpacity>
            <Ionicons
              name="arrow-forward-outline"
              size={32}
              color={
                generationIDS[gen - 1].end === endNum ? "#e0e0e0" : "black"
              }
              onPress={() => {
                loadNext();
              }}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.pokemonContainer}>
              {pokeData.map((poke: IPokeData, key: number) => {
                const pokeColor = theme.types[poke.types[0]["type"].name];
                if (poke.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <PokeBox
                      key={key}
                      img={`https://cdn.traction.one/pokedex/pokemon/${poke.id}.png`}
                      bgColor={pokeColor}
                      name={poke.name}
                      id={poke.id}
                    />
                  );
                }
              })}
            </View>

            {/* <Modal
              isVisible={isModalVisible}
              style={{ display: "flex", alignItems: "center" }}
              onBackdropPress={() => setIsModalVisible(!isModalVisible)}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Filter</Text>
                <View style={styles.genChoose}>
                  {gens.map((uGen, key) => {
                    return (
                      <TouchableOpacity
                        style={styles.genButton}
                        key={key}
                        onPress={() => {
                          setGen(uGen);
                        }}
                      >
                        <Text>{uGen}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    handleChangeGen();
                  }}
                >
                  <Text>Apply</Text>
                </TouchableOpacity>
              </View>
            </Modal> */}
          </ScrollView>
          <FAB 
          style={{bottom: 50, right: 30}} // valores que ficam legai no meu celular, default b: 15 r:20
          />
        </View>
      ) : !isLoaded ? (
        <Loading />
      ) : (
        <SplashScreen />
      )}
    </>
  );
}
