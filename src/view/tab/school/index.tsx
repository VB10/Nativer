import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Card, CardItem } from "native-base";
import { styles } from "../../login/styles";

export class SchoolsPage extends Component {
  componentWillMount = () => {
    console.log(this.props);
  };
  renderItem(val: string) {
    return (
      <Card>
        <CardItem header bordered>
          <Text style={{color :'red'}}>Player</Text>
        </CardItem>
        <CardItem>
          <Text>{val}</Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    var items = [
      "Simon Mignolet",
      "Nathaniel Clyne",
      "Dejan Lovren",
      "Mama Sakho",
      "Emre Can"
    ];

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default SchoolsPage;
