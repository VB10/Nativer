import React, { Component } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { cardStyles } from "./styles";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../../util";
interface IProps {
  city: string;
  schoolName: string;
  studentCount: number;
  schoolImage: string;
  onPress :()=>void
}

export const  SchoolCard = (val : IProps) => {
    return (
        <TouchableOpacity
        style={cardStyles.container}
        activeOpacity={1}
        onPress={val.onPress}
        >
        <View style={cardStyles.subView} />
        <View style={cardStyles.contentView}>
          <ImageBackground
            style={cardStyles.imageBackground}
            source={require("@image/school_d.jpg")}
          >
            <View style={cardStyles.rightTopItem}>
              <Text style={cardStyles.rightTopTextStyle}>
                {val.city} 
              </Text>
            </View>
            <View style={cardStyles.bottomItem}>
              <Text style={cardStyles.bottomLeftText}>
                {val.schoolName}
              </Text>
              {renderStudentCount(val.studentCount)}
            </View>
            <View />
          </ImageBackground>
        </View>
        <View style={cardStyles.subView} />
      </TouchableOpacity>
    );
  }

  const renderStudentCount = (val: number)=> {
    return (
      <View style={cardStyles.rightBottomItem}>
        <Icon name="users" type="Feather" style={cardStyles.rightBottomIcon} />
        <Text style={cardStyles.rightBottomText}>{val}+</Text>
      </View>
    );
  }


export default SchoolCard;
