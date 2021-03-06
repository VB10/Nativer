import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
  safeView: {
    height: 50 * PixelRatio.get(),
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#fed000"
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "rgba(48,56,65,0.7)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15 * PixelRatio.get(),
    position: "absolute",
    left: 10
  },
  icon: {
    flex: 1,
    fontSize: 30,
    color: "#2d4059"
  },
  touchableOpacity: {
    right: 5,
    position: "absolute"
  }
});
