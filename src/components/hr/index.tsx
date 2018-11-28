import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon, Button } from "native-base";
interface IProps {
  text: string;
  color : string
}
interface IState {}

export class HRLine extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  componentWillMount = () => {};

  returnCustomButton() {
    const {color} = this.props
    return (
      <View style={styles.content}>
        <View style={[styles.line,{borderColor:color}]} />
        <Text style={[styles.text,{color : color}]}>{this.props.text}</Text>
        <View style={[styles.line,{borderColor:color}]} />
      </View>
    );
  }

  render() {
    return <View>{this.returnCustomButton()}</View>;
  }
}

export default HRLine;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row"
  },
  line: {
    height: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#9c9c9c",
    flex: 1,
    alignSelf: "center",
    marginRight: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 17.5,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#9c9c9c"
  }
});
