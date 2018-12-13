import React, { Component } from "react";
import { Text, View } from "react-native";
import { Svg, Rect, Polygon } from "react-native-svg";
import { connect } from "react-redux";

 class SettingsPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Svg height="200" width="200">
          <Polygon
            points="200,100 0,100 100,00"
            fill="lime"
            stroke="purple"
            strokeWidth="1"
            onResponderMove={() => {
              alert("ok");
            }}
          />
          <Rect
            x="00"
            y="100"
            width="200"
            height="100"
            fill="rgb(0,0,255)"
            strokeWidth="0.5"
            stroke="rgb(0,0,0)"
          />
        </Svg>

        {/* <Svg
    height="200"
    width="300"
>
    <Defs>
        <RadialGradient id="grad" cx="100" cy="50" rx="85" ry="55" fx="100" fy="75" gradientUnits="userSpaceOnUse">
            <Stop
                offset="0"
                stopColor="#ff0"
                stopOpacity="1"
            />
            <Stop
                offset="1"
                stopColor="#83a"
                stopOpacity="1"
            />
        </RadialGradient>
          </Defs>
          
          <Polygon
            points="200,100 0,100 100,00"
            fill="url(#grad)"
            stroke="purple"
            strokeWidth="1"
            onResponderMove={() => {
              alert("ok")
            }}
          />
            <Rect
            x="00"
            y="100"
            width="200"
            height="100"
            fill="rgb(0,0,255)"
            strokeWidth="0.5"
            stroke="rgb(0,0,0)"
          />
        </Svg>
         */}
      </View>
    );
  }
}
//fix any
const mapStateToProps = (state: any) => {
  console.log(state,"aaaaa")
  return {

  }
}

const mapDispatchToProps = {
  
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
