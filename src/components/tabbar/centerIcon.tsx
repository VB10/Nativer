import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

interface IProps {}
interface IState {
  animate: Animated.Value;
  isRotate: boolean;
}

export class IconCustomCenterT extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      animate: new Animated.Value(0),
      isRotate: false
    };
  }

  iconAnimatePress = () => {
    Animated.timing(this.state.animate, {
      toValue: this.state.isRotate ? 1 : 0,
      duration: 300
    }).start(() => {
        Actions.customLight1();

    });
  };
  render() {
    const buttonRotate = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    const buttonStyle = {
      transform: [{ rotate: buttonRotate }]
    };
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }}
        onPress={() => {
          this.setState(
            {
              isRotate: !this.state.isRotate
            },
            () => {
              this.iconAnimatePress();
            }
          );
        }}
      >
        <Animated.Image
          source={require("../../images/a1.png")}
          resizeMode="contain"
          style={[styles.image, buttonStyle]}
        />
      </TouchableOpacity>
    );
  }
}

export default IconCustomCenterT;
const styles = StyleSheet.create({
  buttonCenter: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    width: "100%",
    flex: 1,
    bottom: 20
  },
  iconButton: {
    backgroundColor: "#e9e9ef"
  },
  footer: {
    backgroundColor: "white",
    flexDirection: "row"
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
