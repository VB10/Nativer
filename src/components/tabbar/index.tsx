import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
  Text
} from "react-native";
import { Icon, Thumbnail, Button } from "native-base";
import { styles, _styles } from "./styles";
import {
  Actions,
  Router,
  RouterStatic,
  RouterProps
} from "react-native-router-flux";
import { Action } from "redux";
interface IProps {
  text: string;
  color: string;
  navigation: Actions;
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
  isCenterIcon: boolean;
  componentWillMount = () => {
    console.log(this.props, "where");
    console.log(this.props.navigation, "where2");
  };

  constructor(props: IProps) {
    super(props);

    this.isCenterIcon = false;
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

  buttonTab = (data: string, bool: boolean, tab: string) => (
    
      <TouchableOpacity
      style={styles.tabButton}
      onPress={() => {
        this.props.navigation.navigate(tab);
        this.handlePressFlyOuts(0);
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

  handlePressFlyOuts(toValue : number) {
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
    const toValue = this.state.open ? 0 : 1;
    this.handlePressFlyOuts(toValue);
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

  getRouterPage = () => {
    const centerButtonNumber =
      Number((this.props.navigation.state.routes.length / 2).toFixed())
    console.log(centerButtonNumber, "a");

    return (
      <Animated.View style={[{ flexDirection: "row", flex: 1 }]}>
        {this.props.navigation.state.routes.map(
          (element: any, index: number) => {
            console.log(element)
            
            if (index === centerButtonNumber -1)
              return this.buttonCenter();
            return this.buttonTab("bookmark", false, element.key);

            // <TouchableOpacity
            //   key={element.key}
            //   onPress={() => console.log(element.key)}
            // >
            //   <Text>{element.key} {index}</Text>
            // </TouchableOpacity>
          }
        )}
        {}
      </Animated.View>
    );
  };
  render() {
    const { currentTab1, currentTab2 } = this.state;

    return (
      <SafeAreaView style={styles.footer}>{this.getRouterPage()}</SafeAreaView>
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
