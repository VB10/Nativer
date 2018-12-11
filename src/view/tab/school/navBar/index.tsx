import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export class SchoolNavBar extends Component {
  render() {
    return (
      <View
        style={{
          height: 80,
          flex: 1,
          backgroundColor: "#fed000"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <Text
            style={{
              color: "rgba(48,56,65,0.7)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              position: "absolute",
              right: 0,
              left: 0
            }}
          >
            Schools
          </Text>
          <TouchableOpacity style={{ right: 5, position: "absolute" }}>
            <Icon
              name="sliders"
              type="Feather"
              style={{ flex: 1, color: "#2d4059" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SchoolNavBar;
