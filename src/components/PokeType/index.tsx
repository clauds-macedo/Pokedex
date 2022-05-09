import React from "react";
import { View, Text } from 'react-native'
import { theme } from "../../global/theme";

type Props = {
  type: string
}

export default function PokeType({ type }: Props) {

  const pokeColor = theme.types[type];
  return (
    <View style={{
      width: '20%',
      height: 30,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 70,
      marginRight: 8,
      marginLeft: 8,
      backgroundColor: pokeColor,
    }}>
      <Text style={{
        color: '#ffffff',
        fontFamily: theme.fonts.title700,
        textTransform: "capitalize"
      }}>
        {type}
      </Text>
    </View >
  )
}