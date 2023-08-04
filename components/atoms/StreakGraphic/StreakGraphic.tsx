import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./streakGraphic.style";
import { StreakGraphicProps } from "./types";
import Tick from "../../../svg/Tick";
import Flame from "../../../svg/Flame";

export default ({ inactive, current, perfectWeek }: StreakGraphicProps) => {
  return inactive ? (
    <View style={styles.container}>
      <View style={styles.inactive} />
    </View>
  ) : (
    <LinearGradient colors={["#E32EED", "#F76938"]} style={styles.background}>
      <View style={[styles.container, current && styles.current]}>
        {perfectWeek ? <Flame /> : <Tick />}
      </View>
    </LinearGradient>
  );
};
