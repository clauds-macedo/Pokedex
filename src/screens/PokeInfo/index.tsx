import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/theme";

import Pokebola from "../../assets/Pokebola";
import { context } from "../../context";
import IPokeData from "../../services/IPokeData";
import PokeType from "../../components/PokeType";
import About from "../../components/About";
import BaseStats from "../../components/BaseStats";


export default function PokeInfo() {

  const navigation = useNavigation()

  const ctx = useContext(context)
  const pokeInfo = ctx.pokeInfo
  const id = pokeInfo.id
  const name = pokeInfo.forms[0].name

  const BgColor = ctx.bgColor

  let moves = new Array

  const getAbilites = () => {
    pokeInfo.abilities.map((item: string) => {
      moves.push(item.ability.name)
    })
    return moves
  }



  // console.log('================================================')
  // ctx.pokeInfo.stats.map((poke: IPokeData) => (
  //   console.log('name: ', poke.stat.name, 'value: ', poke.base_stat)
  // ))


  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={BgColor} // pegar a cor do contexto
        animated
      />
      <View style={{ flex: 1, marginTop: 33, backgroundColor: BgColor }}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={theme.colors.background}
            size={32}
            onPress={() => navigation.goBack() as never}
          />
          <Text style={styles.headerTitle}>{name}</Text>
          <Text style={styles.headerId}>#{id < 10 ? '00' + id : id < 100 ? '0' + id : id}</Text>
        </View>

        <Pokebola
          width={250}
          height={250}
          fill={theme.colors.Pokeball}
          styles={styles.pokeball}
        />

        <Image
          source={{ uri: `https://cdn.traction.one/pokedex/pokemon/${id}.png` }}
          style={styles.pokeImage}
        />

        <View style={styles.squareContainer}>
          <View style={styles.square}>


            <View style={styles.pokeTypeContainer}>
              {pokeInfo.types.map((poke: IPokeData, key: number) =>
                <PokeType
                  key={key}
                  type={poke.type.name}
                />
              )}
            </View>

            <Text style={[styles.title, { color: BgColor }]}>About</Text>

            <About
              weight={pokeInfo.weight}
              height={pokeInfo.height}
              abilities={getAbilites()}
            />

            <Text style={[styles.title, { color: BgColor }]}>Base Stats</Text>

            <View style={styles.statsContainer}>
              {pokeInfo.stats.map((poke: IPokeData, key: number) => (
                <BaseStats
                  name={poke.stat.name}
                  value={poke.base_stat}
                  color={BgColor}
                  key={key}
                />))
              }
            </View>


          </View>
        </View>
      </View>

    </>
  )
}