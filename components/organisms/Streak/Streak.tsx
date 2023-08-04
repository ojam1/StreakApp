import { View } from "react-native";
import { StreakProps } from "./types";
import { getDay } from "./utils";
import StreakDay from "../../molecules/StreakDay/StreakDay";
import styles from "./streak.styles";
export default ({ streak }: StreakProps) => {
  const { streak: streakArray } = streak;

  const newArray =
    streakArray.length < 7
      ? [...streakArray, ...new Array(7 - streakArray.length)]
      : streakArray;

  return (
    <View style={styles.container}>
      {newArray.map((item, index) => {
        const day = getDay(item);

        return (
          <View style={styles.item}>
            <StreakDay
              key={`${index}-${day}`}
              day={day}
              streak={{
                inactive: item === undefined,
                perfectWeek: false,
                current: index === streakArray.length - 1,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};
