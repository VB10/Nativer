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
  Switch
} from "native-base";
import { bindActionCreators } from "redux";

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
      <View style={{ flex: 0.9, marginTop: 10 }}>
        <View style={{ flex: 0.3 }}>
          <ProfileCard />
        </View>
        <Content style={{ flex: 1 }}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
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

        <View style={{ marginRight: 10, marginLeft: 10 }}>
          <Button danger block rounded icon>
            <Icon name="log-out" />
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
