import React, { Component } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Icon } from "native-base";

//TODO FIX IT
export class SchoolNavBar extends Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          padding: 5,
          justifyContent: "center",
          backgroundColor: "#fed000"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
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
              style={{ flex: 1, fontSize: 30, color: "#2d4059" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SchoolNavBar;
