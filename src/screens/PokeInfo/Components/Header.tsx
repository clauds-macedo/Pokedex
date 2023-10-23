import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../../global/theme";
import Pokebola from "../../../assets/Pokebola";

interface HeaderProps {
  onPress: () => void;
  name: string;
  id: number;
}

export default function Header({ onPress, id, name }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={theme.colors.background}
            size={32}
            onPress={onPress}
          />
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <Text style={styles.headerId}>
          #{id < 10 ? "00" + id : id < 100 ? "0" + id : id}
        </Text>
      </View>

      <Pokebola
        width={250}
        height={250}
        fill={theme.colors.Pokeball}
        styles={styles.pokeball}
      />
    </View>
  );
}
