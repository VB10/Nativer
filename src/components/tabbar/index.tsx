import React, { Component } from "react";
import { Text, View, Image, PixelRatio } from "react-native";
import { Tab, Footer, FooterTab, Button, Icon, Thumbnail } from "native-base";
import { styles } from "./styles";
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
  componentWillMount = () => {
    console.log(this.props, "Retry");
    console.log(PixelRatio.get(), "font");
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      currentTab1: true,
      currentTab2: false,
      current: CurrentTab.tab1
    };
  }

  buttonTab = (data: string, bool: boolean, tab: CurrentTab) => {
    return (
      <Button onPress={() => this.onPress(bool, tab)}>
        <View>
          <Text>{data}</Text>
          {bool ? <View style={styles.hr} /> : null}
        </View>
      </Button>
    );
  };
  buttonCenter = () => {
    return (
      <Button rounded block style={styles.buttonCenter}>
        <Icon name="feather" type="Feather" style={styles.icon} />
      </Button>
    );
  };

  render() {
    const { currentTab1, currentTab2 } = this.state;

    return (
      <Footer>
        <FooterTab style={styles.footer}>
          {this.buttonTab("Schools", currentTab1, CurrentTab.tab1)}
          {this.buttonCenter()}
          {this.buttonTab("Settings", currentTab2, CurrentTab.tab2)}
        </FooterTab>
      </Footer>
    );
  }
  onPress(bool: boolean, tab: CurrentTab) {
    const { current, currentTab1, currentTab2 } = this.state;
    if (current === tab) return;

    //if press current tab return but other tab change color
    this.setState({
      current: tab,
      currentTab1: !currentTab1,
      currentTab2: !currentTab2
    });
  }
}

export default CustomTabBar;
