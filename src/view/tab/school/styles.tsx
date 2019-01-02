import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({});

export const cardStyles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row"
  },
  imageBackground: {
    flex: 1
  },
  rightTopItem: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    bottom: 10
  },
  rightTopTextStyle: {
    backgroundColor: "#fed000",
    color: "rgba(48,56,65,0.7)",
    padding: 10
  },
  bottomItem: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 0.25,
    alignItems: "center",
    paddingLeft: 5,
    flexDirection: "row"
  },
  bottomLeftText: {
    color: "white",
    fontWeight: "500"
  },
  subView: {
    flex: 0.1
  },
  rightBottomItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 5,
    justifyContent: "flex-end"
  },
  rightBottomIcon: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 20,
    marginRight: 2
  },
  rightBottomText: {
    color: "rgba(255,255,255,0.7)"
  },
  container: {
    height: 150,
    marginBottom: 20,
    flexDirection: "row"
  }
});
