import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { Icon, Thumbnail } from "native-base";
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
      current: CurrentTab.tab1
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
  buttonCenter = () => {
    return (
      <View style={styles.buttonCenter}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.iconButton}>
            <Image
              source={require("../../images/a1.png")}
              resizeMode="contain"
              style={styles.image}
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
        {this.buttonTab("bookmark", currentTab1, CurrentTab.tab1)}
        {this.buttonCenter()}
        {this.buttonTab("cpu", currentTab2, CurrentTab.tab2)}
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
