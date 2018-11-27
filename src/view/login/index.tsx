import React, { Component } from "react";

import {
  Content,
  Text,
  Grid,
  Row,
  Container,
  Header,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";
import { CustomButton } from "../../components/index";
import { StyleSheet, View } from "react-native";
import ButtonType from "../../components/button/const";

interface IProps {}
interface IState {}
export default class LoginPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <View style={styles.content}>
          <Form>
            <Item
              floatingLabel
              style={{
                borderStyle: "solid",
                borderWidth: 1
              }}
            >
              <Label>Username</Label>
              <Input />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>

            <View >
              <CustomButton type={ButtonType.Facebook} />
              <CustomButton type={ButtonType.Google} />

              <CustomButton type={ButtonType.Twitter} />
              
            </View>
          </Form>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center"
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
  }
});
