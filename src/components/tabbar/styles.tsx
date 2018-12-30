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
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "center"
  },
  footer: {
    backgroundColor: "transparent",
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
