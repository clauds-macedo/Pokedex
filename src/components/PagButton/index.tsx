import React from "react";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { styles } from "./styles";


type Props = {
  onPress?: () => void
  page?: number | string
}

export default function PagButton({ onPress, page }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{page == 'RIGHT' || page == 'LEFT' ? '...' : page}</Text>
      </View>
    </TouchableOpacity>
  );
}