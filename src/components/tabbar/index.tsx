import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
} from "react-native";
import { Icon, Thumbnail, Button } from "native-base";
import { styles,_styles } from "./styles";
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
      open: false
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
          toValue: (index + 1) * -60 * toValue,
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
    });
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
                  {
                    backgroundColor: this.state.open ? "#9549FF" : "transparent"
                  },
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
    const { currentTab1, currentTab2 } = this.state;

    return (
      <SafeAreaView style={styles.footer}>
        <Animated.View style={[{ flexDirection: "row", flex: 1 }]}>
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
