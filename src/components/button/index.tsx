import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon, Button } from "native-base";
import ButtonType from "./const";
interface IProps {
  type: ButtonType;
}
interface IState {
  backgroundColor: string;
  textCompany: string;
  icon : string
}

export class CustomButton extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      backgroundColor: "black",
      textCompany: "",
      icon :"paper-plane"
    };
  }
  componentWillMount = () => {
    switch (this.props.type) {
      case ButtonType.Facebook:
        this.setState({
          backgroundColor: "#3b5998",
          textCompany: "Facebook",
          icon : "logo-facebook"
        });
        break;
      case ButtonType.Google:
        this.setState({
          backgroundColor: "#d34836",
          textCompany: "Google",
          icon: "logo-google"
        });
        break;
      case ButtonType.Twitter:
        this.setState({
          backgroundColor: "#00aced",
          textCompany: "Twitter",
          icon: "logo-twitter"
        });
        break;

      default:
        break;
    }
  };

  returnCustomButton() {
    const { backgroundColor, textCompany , icon } = this.state;
    return (
      <Button block style={[{backgroundColor : backgroundColor}, styles.view]}>
        <Icon name={icon} />
        <View style={styles.textView}>
          <Text style={styles.text}>Log in with</Text>
          <Text style={styles.textCompany}>{textCompany}</Text>
        </View>
      </Button>
    );
  }

  render() {
    return <View>{this.returnCustomButton()}</View>;
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  view: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "white",
    marginTop: 5,
    shadowRadius: 10,
    shadowOpacity: 1
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "500"
  },
  textCompany: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  },
  textView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
