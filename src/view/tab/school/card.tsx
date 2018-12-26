import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { Icon } from "native-base";
import { cardStyles } from "./styles";
interface IState {}
interface IProps {
  city: string;
  schoolName: string;
  studentCount: number;
  schoolImage: string;
}

export class SchoolCard extends Component<IProps, IState> {

    componentWillMount = () => {
        this.checkProps();
    }
    
    checkProps() {
        //TODO CHECK DATA 
    }
  render() {
    return (
        <View
        style={{ height: 150, marginBottom: 20, flexDirection: "row" }}
        >
        <View style={cardStyles.subView} />
        <View style={cardStyles.contentView}>
          <ImageBackground
            style={cardStyles.imageBackground}
            source={require("@image/school_d.jpg")}
          >
            <View style={cardStyles.rightTopItem}>
              <Text style={cardStyles.rightTopTextStyle}>
                {this.props.city}
              </Text>
            </View>
            <View style={cardStyles.bottomItem}>
              <Text style={cardStyles.bottomLeftText}>
                {this.props.schoolName}
              </Text>
              {this.renderStudentCount(this.props.studentCount)}
            </View>
            <View />
          </ImageBackground>
        </View>
        <View style={cardStyles.subView} />
      </View>
    );
  }

  renderStudentCount(val: number) {
    return (
      <View style={cardStyles.rightBottomItem}>
        <Icon name="users" type="Feather" style={cardStyles.rightBottomIcon} />
        <Text style={cardStyles.rightBottomText}>{val}+</Text>
      </View>
    );
  }
}

export default SchoolCard;
