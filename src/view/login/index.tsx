import React, { Component } from "react";

import { Container, Footer, Text, Button } from "native-base";
import { CustomButton, HRLine } from "../../components/index";
import { StyleSheet, View, Image } from "react-native";
import ButtonType from "../../components/button/const";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import {styles} from './styles'

interface IProps {}
interface IState {}
export default class LoginPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  componentWillMount = () => {
    LoginManager.setLoginBehavior("native");

    //auto user check
    AccessToken.getCurrentAccessToken().then((key: any) => {
      console.log(key);
      //key is empty login expired
    });
  };

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
          //TODO user id save data
          AccessToken.getCurrentAccessToken().then((data: any) => {
            console.log(data.accessToken.toString(), "aaa");
          });
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
            <CustomButton
              type={ButtonType.Twitter}
              onPress={() => {
                alert("It's comming soon");
              }}
            />
            <CustomButton
              type={ButtonType.Google}
              onPress={() => {
                alert("It's comming soon");
              }}
            />
          </View>
        </View>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}> Don’t have an account? </Text>
        </Footer>
      </Container>
    );
  }
}

