import React, { Component } from "react";
import { Text, View, ScrollView, Animated, TextStyle } from "react-native";
import { Header, Icon, Button } from "native-base";
import {
  _hideImageInterpolate,
  _hideViewInterpolate,
  _fontSizeInterpolate,
  styles
} from "./style";
import { FontWeightProperty } from "csstype";
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
          <Header transparent style={{ backgroundColor: "#fed000" }}>
            <Button
              dark
              iconRight
              transparent
              onPress={this._onBackButtonPress}
            >
              <Icon name="chevron-left" type="Feather" style={styles.icon} />
            </Button>

            <View style={styles.contentView}>
              {this.textRender(
                { fontSize: 18, fontWeight: "bold", color: "#d22780" },
                "Kodu"
              )}
              {this.textRender(
                { fontSize: 18, fontWeight: "500", color: "#5e227f" },
                "Geliştir"
              )}
              {this.textRender(
                { fontSize: 18, fontWeight: "bold", color: "#41a7b3" },
                "Dünyayı"
              )}
              {this.textRender(
                { fontSize: 18, fontWeight: "500", color: "#1fe5bd" },
                "Değiştir"
              )}
            </View>
            {/* <H3 style={{alignSelf:"center",fontWeight:"bold",color:"black",opacity:0.7}}>Kodu Geliştir Hayatı Değiştir!</H3> */}
          </Header>
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
