import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import ProfileCard from "../../../components/card/profile";
import {
  Button,
  Icon,
  Content,
  ListItem,
  Left,
  Body,
  Right,
  Switch,
  Footer,
  Header
} from "native-base";
import { bindActionCreators } from "redux";
import { styles } from "./styles";
import { SchoolNavBar } from "../school/navBar";

interface IState {}
interface IProps {}
class SettingsPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.profile}>
          <ProfileCard />
        </View>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>Dark Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>

        <View style={{ marginBottom: 20 }}>
          <Button danger block rounded icon>
            {/* <Icon name="log-out" /> */}
            <Text style={{ color: "white", fontSize: 20 }}>Log out</Text>
          </Button>
        </View>
      </View>
    );
  }
}
//fix any
const mapStateToProps = (state: any) => {
  return {};
};

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
