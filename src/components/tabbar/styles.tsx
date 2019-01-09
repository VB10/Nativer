import { StyleSheet, PixelRatio, Platform } from "react-native";

export const styles = StyleSheet.create({
  buttonCenter: {
    flex: 1,
    backgroundColor: "white"
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "flex-end",
    justifyContent: "flex-end"
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

export const _styles = StyleSheet.create({
  position: {
    alignItems: "center",
    alignSelf: 'center',
    bottom:80
  },
  fab: {
    position: "absolute",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  flyout: {
    backgroundColor: "#9549FF"
  }
});

