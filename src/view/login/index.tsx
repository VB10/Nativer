import React, { Component } from "react";

import { Container, Footer, Text, Button } from "native-base";
import { CustomButton, HRLine } from "../../components/index";
import { StyleSheet, View, Image, AsyncStorage } from "react-native";
import ButtonType from "../../components/button/const";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { styles } from "./styles";
import LottieViev from "lottie-react-native";
import { BaseEnum } from "../const";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../util";

interface IProps {}
interface IState {}
export default class LoginPage extends Component<IProps, IState> {
  public loginAnimation: LottieViev | null;

  constructor(props: IProps) {
    super(props);
    this.loginAnimation = null;
    this.state = {};
  }
  componentWillMount = () => {
    //auto user check
    AsyncStorage.getItem(BaseEnum.UserID).then(value => {
      Actions.reset(PageKey.tab);
    });
    AccessToken.getCurrentAccessToken().then((key: any) => {
      console.log(key);
      //key is empty login expired
    });
  };

  checkUser() {
    AsyncStorage.getItem(BaseEnum.UserID).then(value => {
      console.log(value);
      Actions.reset(PageKey.tab);
    });
    // AccessToken.getCurrentAccessToken().then((key: any) => {
    //   console.log(key);
    //   //key is empty login expired
    // });
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
          //TODO user id save data
          AccessToken.getCurrentAccessToken().then(
            (data: AccessToken | null) => {
              AsyncStorage.setItem(BaseEnum.UserID, data!.userID.toString());
              this.checkUser();

              // console.log(data.accessToken.toString(), "aaa");
            }
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
            <LottieViev
              source={require("../../images/happy.json")}
              autoPlay
              loop
              autoSize
              ref={(animation: LottieViev) => {
                this.loginAnimation = animation;
              }}
            />
          </View>
          <View style={styles.buttonView}>
            <HRLine text="Sign up using" color="gray" />
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
                this.loginAnimation!.reset();
                // alert("It's comming soon");
              }}
            />
          </View>
        </View>
        <Footer
          style={[
            {
              backgroundColor: "white",
              borderColor: "white",
              alignItems: "center"
            }
          ]}
        >
          <Text style={styles.footerText}> Don’t have an account? </Text>
        </Footer>
      </Container>
    );
  }
}
