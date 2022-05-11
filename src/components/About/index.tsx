import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  weight: number
  height: number
  abilities: Array<string>
}


export default function About({ weight, height, abilities }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.info}>
        <View style={[styles.rowInfo, styles.row]}>
          <MaterialCommunityIcons
            name="scale"
            size={20}
            fill={theme.colors.darkGray}
          />
          <Text style={styles.text}>{weight / 10} kg</Text>
        </View>
        <Text style={[styles.text, styles.description]}>Weight</Text>
      </View>



      <View style={styles.info}>
        <View style={[styles.rowInfo, styles.row]}>
          <MaterialCommunityIcons
            name="ruler"
            size={20}
            fill={theme.colors.darkGray}
          />
          <Text style={styles.text}>{height / 10} m</Text>
        </View>
        <Text style={[styles.text, styles.description]}>Height</Text>
      </View>

      <View style={styles.abilities}>
        <View style={styles.abilitiesInfo}>
          <Text style={[styles.text, { textTransform: 'capitalize' }]}>{abilities[0]}</Text>
          <Text style={[styles.text, { textTransform: 'capitalize' }]}>{abilities[1]}</Text>
        </View>
        <Text style={[styles.text, styles.description, { alignSelf: 'center' }]}>Moves</Text>
      </View>



    </View>
  )
}