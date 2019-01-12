import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated
} from "react-native";
import { Icon, Left, Button, Label, Text } from "native-base";
import { styles, _styles } from "./styles";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../util";
import Modal from "react-native-modal";
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
  showModal: boolean;
}

export class CustomTabBar extends Component<IProps, IState> {
  componentWillMount = () => {};

  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: PageKey.tabSchool,
      fabs: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ],
      animate: new Animated.Value(0),
      open: false,
      showModal: false
    };
  }

  buttonTab = (data: string, tab: PageKey) => {
    const iconFocus = {
      color: this.state.selected === tab ? "red" : "black"
    };
    return (
      <TouchableOpacity
        key={tab}
        style={styles.tabButton}
        onPress={() => this.handleButtonTab(tab)}
      >
        <Icon type="Feather" name={data} style={iconFocus} />
      </TouchableOpacity>
    );
  };

  handleButtonTab = (_pageKey: PageKey) => {
    //case button and navigate page
    switch (_pageKey) {
      case PageKey.tabSettings:
        Actions.tabSettings();
        break;
      case PageKey.tabSchool:
        Actions.tabSchool();
        break;
      default:
        break;
    }
    this.setState({ selected: _pageKey });
    if (this.state.open) this.handlePressFlyOuts(0);
  };
  handlePressFlyOuts(toValue: number) {
    const flyouts = this.state.fabs.map(
      (value: Animated.Value, index: number) => {
        return Animated.spring(value, {
          toValue: index * 10 * toValue,
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
    this.changeModal();
  };

  renderModalButton = () => {
    const getTransfromStyle = (animation: any) => {
      return {
        transform: [{ translateY: animation }]
      };
    };
    return (
      <View style={_styles.position}>
        {this.state.fabs.map((animation: Animated.Value, index: number) => {
          return (
            <Animated.View
              style={[
                {
                  flexDirection: "row",
                  width: 200,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "white",
                },
                getTransfromStyle(animation)
              ]}
              key={index}
            >
              <TouchableOpacity
                key={index}
                style={[
                  _styles.button,
                  { backgroundColor: this.state.open ? "#9549FF" : "purple" }
                ]}
                onPress={() => {
                  alert("s")
                }}
              />
              <Text style={{ color: "white" }}>asdasd</Text>
            </Animated.View>
          );
        })}
      </View>
    );
  };
  callButtonView = () => {
    this.setState(
      {
        open: !this.state.open
      },
      () => {
        this.handlePressFlyOuts(this.state.open ? 0 : 1);
      }
    );
  };
  startViewAnimation = () => {
    //open animation 1
    this.handlePressFlyOuts(1);
  };
  stopViewAnimation = () => {
    this.state.animate.setValue(0);
  };
  changeModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    return (
      <View>
        <Modal
          backdropOpacity={0.8}
          presentationStyle="overFullScreen"
          isVisible={this.state.showModal}
          onModalHide={this.stopViewAnimation}
          onShow={this.startViewAnimation}
        >
          <TouchableOpacity onPress={this.changeModal} style={styles.modal}>
            {this.renderModalButton()}
          </TouchableOpacity>
        </Modal>
        <SafeAreaView style={styles.footer}>
          {this.buttonTab("bookmark", PageKey.tabSchool)}
          {this.buttonCenter()}
          {this.buttonTab("cpu", PageKey.tabSettings)}
        </SafeAreaView>
      </View>
    );
  }

  buttonCenter = () => {
    const buttonRotate = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    const buttonStyle = {
      transform: [{ rotate: buttonRotate }]
    };
    //TODO fab button add?
    return (
      <View style={styles.buttonCenter} key="centerButton">
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
