import { Text, View } from "react-native";

import { StreakDayProps } from "./types";
import StreakGraphic from "../../atoms/StreakGraphic/StreakGraphic";
import styles from "./streakDay.styles";

export default ({ day, streak }: StreakDayProps) => (
  <View>
    <Text style={styles.text}>{day}</Text>
    <StreakGraphic {...streak} />
  </View>
);
