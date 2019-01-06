import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
  Text
} from "react-native";
import { Icon, Left } from "native-base";
import { styles, _styles } from "./styles";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../util";
interface IProps {
  text: string;
  color: string;
  navigation: Actions;
}
interface IState {
  fabs: Animated.Value[];
  animate: Animated.Value;
  open: boolean;
  selected: string;
}

export class CustomTabBar extends Component<IProps, IState> {
  isCenterIcon: boolean;
  centerButtonNumber: Number;
  componentWillMount = () => {
    this.centerButtonNumber =
      Number((this.props.navigation.state.routes.length / 2).toFixed()) - 1;
  };

  constructor(props: IProps) {
    super(props);
    this.centerButtonNumber = 1;
    this.isCenterIcon = false;
    this.state = {
      selected: PageKey.tabSchool,
      fabs: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ],
      animate: new Animated.Value(0),
      open: false
    };
  }

  buttonTab = (data: string, tab: string) => {
    return (
      <TouchableOpacity
        key={tab}
        style={styles.tabButton}
        onPress={() => {
          this.setState({
            selected: tab
          });
          console.log(tab);
          this.props.navigation.navigate(tab);
          if (this.state.open) this.handlePressFlyOuts(0);
        }}
      >
        <Icon
          type="Feather"
          name={data}
          style={{
            color: this.state.selected === tab ? "red" : "black"
          }}
        />
      </TouchableOpacity>
    );
  };

  handlePressFlyOuts(toValue: number) {
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
  }
  handlePress = () => {
    this.handlePressFlyOuts(this.state.open ? 0 : 1);
    console.log(this.state.open);
    this.setState({
      open: !this.state.open
    });
  };

  getRouterPage = () => {
    return (
      <Animated.View style={[{ flexDirection: "row", flex: 1 }]}>
        {this.props.navigation.state.routes.map(
          (element: any, index: number) => {
            //center icon
            if (index === this.centerButtonNumber) return this.buttonCenter();

            return this.buttonTab(
              element.routes[0].params.iconName,
              element.key
            );
          }
        )}
      </Animated.View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.footer}>{this.getRouterPage()}</SafeAreaView>
    );
  }

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
      <View style={styles.buttonCenter} key="centerButton">
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
}

export default CustomTabBar;
