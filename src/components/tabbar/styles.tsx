import { StyleSheet, PixelRatio, Platform } from "react-native";

export const styles = StyleSheet.create({
  buttonCenter: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    height: 50,
    width: 20 * PixelRatio.get(),
    bottom: 10
  },
  iconButton: {
    backgroundColor: "#e9e9ef",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    alignItems: "center"
  },
  footer: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  hr: {
    height: 1,
    backgroundColor: "red"
  },
  tabButton: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
