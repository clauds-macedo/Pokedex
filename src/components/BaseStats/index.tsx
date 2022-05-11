import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import * as Progress from 'react-native-progress';

type Props = {
  name: string
  value: number
  color: string
}

export default function BaseStats({ name, value, color }: Props) {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={value / 200}
        width={200}
        color={color}
      />
      <Text style={styles.value}>{value < 100 ? '0' + value : value}</Text>
      <Text style={[styles.name, { color: color }]}>
        {
          name == 'attack' ? 'atk' :
            name == 'defense' ? 'def' :
              name == 'special-attack' ? 'satk' :
                name == 'special-defense' ? 'sdef' :
                  name == 'speed' ? 'spd' : name
        }
      </Text>

    </View>
  )
}