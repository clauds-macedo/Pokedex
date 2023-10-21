import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
