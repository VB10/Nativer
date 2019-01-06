import React, { Component } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Icon } from "native-base";
import { styles } from "./styles";
//TODO FIX IT
export class SchoolNavBar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.contentView}>
          <Text style={styles.text}>Schools</Text>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon name="sliders" type="Feather" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SchoolNavBar;
