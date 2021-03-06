import { StyleSheet, PixelRatio, Platform } from "react-native";

export const styles = StyleSheet.create({
  buttonCenter: {
    flex: 1,
    backgroundColor: "white"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    paddingBottom: 10,
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
  
  },
  fab: {
    position: "absolute",
    top: 100,
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

