import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 40,
  },
  inactive: {
    width: 32,
    height: 32,
    borderRadius: 40,
    backgroundColor: "#f7f7f7",
    opacity: 0.24,
  },
  background: {
    height: 32,
    borderRadius: 40,
  },
  current: {
    borderWidth: 2,
    borderColor: "#fff",
  },
});
