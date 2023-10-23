import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import PokeType from "../../../components/PokeType";

interface TypesProps {
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}

export default function Types({types}: TypesProps) {
  return (
    <View style={styles.pokeTypeContainer}>
      {types.map((poke, key: number) => {
        return <PokeType key={key} type={poke.type.name} />;
      })}
    </View>
  );
}
