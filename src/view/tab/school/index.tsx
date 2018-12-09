import React, { Component } from "react";
import { Text, View, FlatList, Image, ImageBackground } from "react-native";
import { Card, CardItem, Grid, Col, Icon } from "native-base";
import { styles } from "../../login/styles";
import Svg, { Polygon, Rect, Path } from "react-native-svg";
//TODO : check internet connection
//TODO : add crash manager
//TODO : add firebase
//TODO : add design scholl

export class SchoolsPage extends Component {
  componentWillMount = () => {
    console.log(this.props);
  };
  renderItem(val: string) {
    const json = require("../../../images/airplay.svg");
    return (
      <View
        key={val}
        style={{ height: 150, marginBottom: 20, flexDirection: "row" }}
      >
        <View style={{ flex: 0.1 }} />
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 10,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 0.05,
              backgroundColor: "#fed000",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10
            }}
          />
          <ImageBackground
            style={{ flex: 1, }}
            source={require("../../../images/school_d.jpg")}
          >
            <View style={{flex : 1,justifyContent:"flex-start",alignItems:"flex-end",bottom:10}}>
            <Text style={{backgroundColor:"#fed000",color:"rgba(48,56,65,0.7)",padding:10}}>Pendik</Text>
            </View>
            <View
              style={{
                
                backgroundColor: "rgba(0,0,0,0.4)",
                flex: 0.25,
                alignItems: "center",
                paddingLeft: 5,
                flexDirection: "row",
                
              }}
            >
              <Text  style={{ color: "white", fontWeight: "500" }}>{val}</Text>
              {this.renderStudentCount(50)}
            </View>
            <View />
          </ImageBackground>
        </View>

        <View style={{ flex: 0.1 }} />
      </View>
    );
  }

  renderStudentCount(val: number) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginRight:5,
          justifyContent: "flex-end"
        }}
      >
        <Icon name="users" type="Feather" style={{ color: "rgba(255,255,255,0.7)" ,fontSize: 20,marginRight: 2,}} />
        <Text style={{ color: "rgba(255,255,255,0.7)", }}>{val}+</Text>

      </View>
    );
  }

  render() {
    var items = [
      "Kurt Doğmuş İlk Okulu",
      "Bükdere Ana Okulu",
      "Abdullah Ömür İlk Okulu "
    ];

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ paddingTop:15 }}
          data={items}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default SchoolsPage;
