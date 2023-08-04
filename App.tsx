import { View } from "react-native";

import mainStyle from "./styles/app.styles";
import Streak from "./components/organisms/Streak/Streak";

export default function App() {
  return (
    <View style={mainStyle.container}>
      <Streak streak={{ streak: ["2018-04-04T16:00:00.000Z", '2018-04-05'] }} />
    </View>
  );
}
