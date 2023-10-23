import React from "react";
import AttributesStats from "../../../components/BaseStats";
import { View, Text } from "react-native";
import { styles } from "../styles";

interface BaseStatsProps {
  bgColor: string;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }>;
}

export default function BaseStats({ bgColor, stats }: BaseStatsProps) {
  return (
    //   {/* style={styles.statsContainer} */}
    <View>
      <Text style={[styles.title, { color: bgColor }]}>Base Stats</Text>
      {stats.map((poke, key: number) => (
        <AttributesStats
          name={poke.stat.name}
          value={poke.base_stat}
          color={bgColor}
          key={key}
        />
      ))}
    </View>
  );
}
