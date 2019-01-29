import { StyleSheet, Animated } from "react-native";
import { fabName } from "./baseSchool";

export const getTransformStyle = (animation: any) => {
  return {
    transform: [{ translateX: animation }]
  };
};
export const _fabs = [
  {
    animation: new Animated.Value(0),
    name: fabName.location,
    icon: "locate",
    iconColor: "red"
  },
  {
    animation: new Animated.Value(0),
    name: fabName.camera,
    icon: "camera",
    iconColor: "blue"
  },
  {
    animation: new Animated.Value(0),
    name: fabName.gallery,
    icon: "photos",
    iconColor: "green"
  }
];
export const inputStyles = StyleSheet.create({
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
    color: "#393e46"
  },
  fabText: {
    fontFamily: "Roboto",
    fontSize: 15
  }
});
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
export const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  position: {
    position: "absolute",
   
  },
  fab: {
    position: "absolute",
    alignSelf: 'center',
    right: 0,
  },
  button: {

    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    
  },
  flyout: {
    // backgroundColor: "#9439FF"
    opacity: 0.55,
   
  },
  plus: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#00768f"
  }
});

