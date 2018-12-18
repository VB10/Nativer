import React, { Component } from "react";
import { Text, View, AsyncStorage, StyleSheet } from "react-native";
import { UserID } from "../const";
import LottieViev from "lottie-react-native";
import { Actions } from "react-native-router-flux";
import { tab, login } from "../../util";
import { getDatabase } from "../../redux/actions/database";


interface IProps {}
interface IState {}
export class AppControl extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    console.log(getDatabase())
    //check user data
    this.controlClient();
  }
  controlClient() {
    AsyncStorage.getItem(UserID).then(value => {
      if (value) {
        Actions.reset(tab);
      } else {
        Actions.reset(login);
      }
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <LottieViev
          source={require("../../images/happy.json")}
          autoPlay
          loop
          autoSize
        />
      </View>
    );
  }
}

export default AppControl;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  text: {
    color: "white"
  }
});
