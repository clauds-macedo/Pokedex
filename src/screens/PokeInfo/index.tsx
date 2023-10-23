import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StatusBar } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/theme";

import { usePokeInfoStore } from "../../hooks/useStore";
import IPokeData from "../../services/IPokeData";
import BaseStats from "./Components/BaseStats";
import About from "../../components/About";
import Header from "./Components/Header";
import Types from "./Components/Types";
import { ScrollView } from "react-native-gesture-handler";

export default function PokeInfo() {
  const navigation = useNavigation();

  const pokeInfo: IPokeData = usePokeInfoStore((state) => state.pokeInfo);
  const { id, name, types, abilities, sprites, stats } = pokeInfo;
  const bgColor = (theme.types as Record<string, string>)[types[0].type.name];
  const pokeImage = sprites.other["official-artwork"].front_default;

  const getAbilites = () => {
    let moves: string[] = [];
    abilities.map((item) => {
      moves.push(item.ability.name);
    });
    return moves;
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Header id={id} name={name} onPress={() => navigation.goBack()} />

        <Image source={{ uri: pokeImage }} style={styles.pokeImage} />

        <View style={styles.square}>
          <Types types={types} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.title, { color: bgColor }]}>About</Text>

            <About
              weight={pokeInfo.weight}
              height={pokeInfo.height}
              abilities={getAbilites()}
            />
            <BaseStats bgColor={bgColor} stats={stats} />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
