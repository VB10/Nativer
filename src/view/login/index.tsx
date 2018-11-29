import React, { Component } from "react";

import { Container, Footer, Text, Button } from "native-base";
import { CustomButton, HRLine } from "../../components/index";
import { StyleSheet, View, Image } from "react-native";
import ButtonType from "../../components/button/const";
import { LoginManager } from "react-native-fbsdk";

interface IProps {}
interface IState {}
export default class LoginPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  facebookLogin() {
    LoginManager.logInWithReadPermissions(["public_profile"])
      .then((result: any) => {
        if (result.isCancelled) {
          alert("Login was cancelled");
        } else {
          alert(
            "Login was successful with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      })
      .catch((error: any) => {
        alert("Login failed with error: " + error);
      });
  }

  render() {
    return (
      <Container>
        <View style={styles.content}>
          <View style={styles.image}>
            <Image
              source={require("../../images/coffe.png")}
              resizeMode="contain"
              style={{ width: "100%" }}
            />
          </View>
          <View style={styles.buttonView}>
            <HRLine text="Sign up using" color="#8c746a" />
            <CustomButton
              type={ButtonType.Facebook}
              onPress={this.facebookLogin}
            />
            <CustomButton type={ButtonType.Twitter} onPress={() => {}} />
            <CustomButton type={ButtonType.Google} onPress={() => {}} />
          </View>
        </View>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}> Don’t have an account? </Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  button: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: "rgb(232,121,117)"
  },
  label: {
    fontSize: 17.5,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  input: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    borderColor: "#dbdfe2"
  },
  buttonView: {
    marginBottom: 10,
    justifyContent: "flex-end"
  },
  footer: {
    backgroundColor: "white",
    borderColor: "white",
    alignItems: "center"
  },
  footerText: {
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(62, 74, 89, 0.45)"
  }
});
