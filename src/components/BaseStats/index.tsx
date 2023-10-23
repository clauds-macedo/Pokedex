import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import * as Progress from 'react-native-progress';

type BaseStatsProps = {
  name: string
  value: number
  color: string
}

const movesNames: Record<string, string> = {
  "attack": "atk",
  "defense": "def",
  "special-attack": "satk",
  "special-defense": "sdef",
  "speed": "spd",
  "hp": "hp"
}

export default function AttributesStats({ name, value, color }: BaseStatsProps) {
  const [dividend, setDividend] = useState(100)

  useEffect(() => {
    setTimeout(() => {
      console.log("passoui aqui");
      setDividend(200)
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Progress.Bar progress={value / dividend} width={200} color={color} />
      <Text style={styles.value}>{value < 100 ? "0" + value : value}</Text>
      <Text style={[styles.name, { color: color }]}>{movesNames[name]}</Text>
    </View>
  );
}