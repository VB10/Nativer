import { StyleSheet, PixelRatio, Platform } from "react-native";

export const styles = StyleSheet.create({
  buttonCenter: {
    flex: 0.8,
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
    marginBottom: Platform.OS === "ios" ? 13:0,
    height: 50
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
