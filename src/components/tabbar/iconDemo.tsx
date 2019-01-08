import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";

export class IconCustomT extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
                height: "100%",
      
        }}
      >
        <Icon type="Feather" name="bookmark" />
      </View>
    );
  }
}

export default IconCustomT;
const styles = StyleSheet.create({
  buttonCenter: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    height: 50,
    bottom: 10
  },
  iconButton: {
    backgroundColor: "#e9e9ef",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    alignItems: "center"
  },
  footer: {
    backgroundColor: "white",
    flexDirection: "row"
  },
  hr: {
    height: 1,
    backgroundColor: "red"
  },
  tabButton: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
