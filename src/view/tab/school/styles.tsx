import { StyleSheet, Animated } from "react-native";

export const styles = StyleSheet.create({});
export const _fabs = [
  {
    animation: new Animated.Value(0),
    name: "Location",
    icon: "locate",
    iconColor: "red"
  },
  {
    animation: new Animated.Value(0),
    name: "Camera",
    icon: "camera",
    iconColor: "blue"
  },
  {
    animation: new Animated.Value(0),
    name: "Gallery",
    icon: "photos",
    iconColor: "green"
  }
];
export const getTransformStyle = (animation: any) => {
  return {
    transform: [{ translateX: animation }]
  };
};
export const cardStyles = StyleSheet.create({
  contentView: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 10,
    paddingBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.3
  },
  placeHolderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    fontFamily: "Roboto"
  },
  endContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  endRight: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  addIcon: {
    margin: 5,
    fontSize: 30,
    fontColor: "red",
    color: "#393e46"
  },
  container: {
    height: 150,
    marginBottom: 20,
    flexDirection: "row"
  },
  fabText: {
    fontFamily: "Roboto",
    fontSize: 15
  }
});
export const _styles = StyleSheet.create({
  position: {
    position: "absolute"
  },
  fab: {
    position: "absolute",
    alignSelf: "center",
    right: 0
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  flyout: {
    // backgroundColor: "#9439FF"
    opacity: 0.55
  },
  plus: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#00768f"
  }
});
