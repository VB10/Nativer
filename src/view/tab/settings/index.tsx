import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import ProfileCard from "../../../components/card/profile";
import { Button, Icon } from "native-base";

class SettingsPage extends Component {
  render() {
    return (
      <View style={{ flex: 0.9 }}>
        <View style={{ flex: 0.3 }}>
          <ProfileCard />
        </View>
        <ScrollView style={{ flex: 1 }} />

        <Button danger block rounded icon >
          <Icon name="x-square" type="Feather" />
          <Text style={{ color: "white" ,fontSize:20}}>Exit</Text>
        </Button>
      </View>
    );
  }
}
//fix any
const mapStateToProps = (state: any) => {
  console.log(state, "aaaaa");
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
