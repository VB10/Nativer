import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
  StyleSheet
} from "react-native";
import { Icon, Thumbnail, Button } from "native-base";
import { styles } from "./styles";
import { Actions } from "react-native-router-flux";
interface IProps {
  text: string;
  color: string;
}
interface IState {
  currentTab1: boolean;
  currentTab2: boolean;
  current: CurrentTab;
  fabs: Animated.Value[];
  animate: Animated.Value;
  open: boolean;
}
enum CurrentTab {
  tab1,
  tab2
}


export class CustomTabBar extends Component<IProps, IState> {
  componentWillMount = () => {};

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentTab1: true,
      currentTab2: false,
      current: CurrentTab.tab1,
      fabs: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ],
      animate: new Animated.Value(0),
      open:false
    };
  }

  buttonTab = (data: string, bool: boolean, tab: CurrentTab) => (
    <TouchableOpacity
      style={styles.tabButton}
      onPress={() => {
        this.onPress(bool, tab);
      }}
    >
      <Icon
        type="Feather"
        name={data}
        style={{
          color: bool ? "red" : "black"
        }}
      />
    </TouchableOpacity>
  );

  handlePress = () => {
    const toValue = this.state.open ? 0 : 1;
    const flyouts = this.state.fabs.map(
      (value: Animated.Value, index: number) => {
        return Animated.spring(value, {
          toValue: (index + 1) * -90 * toValue,
          friction: 5
        });
      }
    );
    Animated.parallel([
      Animated.timing(this.state.animate, {
        toValue,
        duration: 300
      }),
      Animated.stagger(30, flyouts)
    ]).start();
    this.setState({
        open: !this.state.open
    })
    
  };
  buttonCenter = () => {
    const getTransfromStyle = (animation: any) => {
      return {
        transform: [{ translateY: animation }]
      };
    };
    const buttonRotate = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    const buttonStyle = {
      transform: [{ rotate: buttonRotate }]
    };
    return (
      <View style={styles.buttonCenter}>
        <View style={_styles.position}>
          {this.state.fabs.map((animation: Animated.Value, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  _styles.button,
                  _styles.fab,
                  {backgroundColor:this.state.open? "#9549FF":"transparent"},
                  getTransfromStyle(animation)
                ]}
              />
            );
          })}
        </View>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={[styles.iconButton]}>
            <Animated.Image
              source={require("../../images/a1.png")}
              resizeMode="contain"
              style={[styles.image, buttonStyle]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    // const backgroundInterpolate = this.state.animate.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['rgb(90, 34, 153)', 'rgb(36, 11, 63)']
    // });
    // const backgroundStyle = {
    //   backgroundColor: backgroundInterpolate
    // }

    const { currentTab1, currentTab2 } = this.state;

    return (
      <SafeAreaView style={styles.footer}>
        <Animated.View
          style={[{ flexDirection: "row", flex: 1 }]}
        >
          {this.buttonTab("bookmark", currentTab1, CurrentTab.tab1)}
          {this.buttonCenter()}
          {this.buttonTab("cpu", currentTab2, CurrentTab.tab2)}
        </Animated.View>
      </SafeAreaView>
    );
  }
  onPress(bool: boolean, tab: CurrentTab) {
    const { current, currentTab1, currentTab2 } = this.state;
    if (current === tab) return;

    switch (tab) {
      case CurrentTab.tab2:
        Actions.tab2();
        break;
      default:
        Actions.pop();
        break;
    }

    //if press current tab return but other tab change color
    this.setState({
      current: tab,
      currentTab1: !currentTab1,
      currentTab2: !currentTab2
    });
  }
}

export default CustomTabBar;

const _styles = StyleSheet.create({
  position: {
    position: "absolute",
    right: 30,
    bottom: 30,
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,

  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  flyout: {
    backgroundColor: "#9549FF"
  },
});
