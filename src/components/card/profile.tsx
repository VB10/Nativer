import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Label, Thumbnail, StyleProvider } from "native-base";

interface IState {}
interface IProps {}

export class ProfileCard extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <Thumbnail
          source={{
            uri:
              "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/12079060_1657571751157264_5168511753502382720_n.jpg?_nc_cat=102&_nc_ht=scontent-mxp1-1.xx&oh=1b4fa89cea2968db18220db29704a78c&oe=5CA4B1F8"
          }}
        />
        <Text style={styles.text}>Veli Bacık</Text>
      </View>
    );
  }
}

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(179, 179, 179, 0.68)",
    margin: 2,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "Feather",
  }
});
