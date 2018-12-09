import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  buttonCenter: {
    backgroundColor: "#ff8364",
    flex: 1,
    height: "100%",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 10 * PixelRatio.get(),
    color: "white"
  },
  footer: {
    backgroundColor: "white",
    flex: 1
  },
  hr: {
    height: 1,
    backgroundColor: "red"
  }
});
