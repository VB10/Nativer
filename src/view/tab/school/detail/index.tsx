import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  SafeAreaView
} from "react-native";
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

  componentWillMount = () => {
    console.log(this.props.navigation, "a");
  };

  render() {
    const hideImageInterpolate = this.state.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [300, 100],
      extrapolate: "clamp"
    });
    const fontInterpolate = this.state.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [24, 40]
    });
    const imageStyle = {
      height: hideImageInterpolate
    };
    const titleStyle = {
      fontSize: fontInterpolate
    };
    return (
      <View style={{flex:1}}>
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
