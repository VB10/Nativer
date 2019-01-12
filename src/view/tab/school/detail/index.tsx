import React, { Component } from "react";
import { Text, View, ScrollView, Animated, TextStyle } from "react-native";
import { Header, Icon, Button, Left, Right, Body } from "native-base";
import {
  _hideImageInterpolate,
  _hideViewInterpolate,
  _fontSizeInterpolate,
  styles
} from "./style";
import { FontWeightProperty } from "csstype";
import { CustomNavBa2r } from "../../../../components/navbar";
interface IState {
  animated: Animated.Value;
}
interface IProps {
  article: Articles;
  navigation: any;
  image: string;
}

export class SchoolDetailPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      animated: new Animated.Value(0)
    };
  }

  _onBackButtonPress = () => {
    this.props.navigation.pop();
  };
  textRender = (style: TextStyle, text: string) => {
    return <Text style={style}>{text} </Text>;
  };
  render() {
    const hideImageInterpolate = this.state.animated.interpolate(
      _hideImageInterpolate
    );
    const hideViewInterpolate = this.state.animated.interpolate(
      _hideViewInterpolate
    );
    const fontInterpolate = this.state.animated.interpolate(
      _fontSizeInterpolate
    );
    const imageStyle = {
      height: hideImageInterpolate
    };
    const viewStyle = {
      height: hideViewInterpolate
    };
    const titleStyle = {
      fontSize: fontInterpolate
    };
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={[viewStyle]}>
          <CustomNavBa2r
            backgroundColor="#fed000"
            backButtonPress={this._onBackButtonPress}
          />
        </Animated.View>
        <Animated.Image
          source={{ uri: this.props.image }}
          resizeMode="cover"
          style={[imageStyle]}
        />
        <Animated.Text style={titleStyle}>
          {this.props.article.data.title}
        </Animated.Text>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.animated } } }
          ])}
        >
          <Animated.Text>{this.props.article.data.description}</Animated.Text>
        </ScrollView>
      </View>
    );
  }
}

export default SchoolDetailPage;
