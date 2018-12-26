import React, { Component } from "react";
import { Text, View ,Image} from "react-native";
interface IState {}
interface IProps {
  article: Articles;
  navigation: any,
  image: string
}

export class SchoolDetailPage extends Component<IProps, IState> {
  componentWillMount = () => {
    console.log(this.props.navigation, "a");
  };

  render() {
    return (
      <View>
        <Text>{this.props.article.data.title}</Text>
        <Image source={{ uri: this.props.image }} resizeMode="cover" style={{height:300,}}/>
        <Text> {this.props.article.data.description} </Text>
      </View>
    );
  }
}

export default SchoolDetailPage;
