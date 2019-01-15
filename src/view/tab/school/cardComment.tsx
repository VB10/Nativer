import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Icon,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Right
} from "native-base";
import { cardStyles } from "./styles";
import SchoolCard from "./card";
interface IProps {
  comment: string;
  profile: IProfile;
}

interface IProfile {
  name: string;
  image: string;
  title: string;
}

export const CommentCard = (val: IProps) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/12079060_1657571751157264_5168511753502382720_n.jpg?_nc_cat=102&_nc_ht=scontent-mxp1-1.xx&oh=1b4fa89cea2968db18220db29704a78c&oe=5CA4B1F8"
            }}
          />
          <Body>
            <Text>NativeBase</Text>
            <Text> note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: "https://picsum.photos/200/300" }} />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
  );
};


export default CommentCard;
