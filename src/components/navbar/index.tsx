import * as React from "react";
import { View, Text, TextStyle } from "react-native";
import { Header, Left, Icon, Right, Button, Body } from "native-base";
import { styles } from "./styles";
interface CustomNavBarProps {
  text?: string;
  backButtonPress: () => void;
  backgroundColor: string;
}

export const CustomNavBa2r = (props: CustomNavBarProps) => {
  const textRender = (style: TextStyle, text: string) => {
    return <Text style={style}>{text} </Text>;
  };
  return (
    <Header
      transparent
      style={{
        backgroundColor: props.backgroundColor
      }}
    >
      <Left>
        <Button dark iconRight transparent onPress={props.backButtonPress}>
          <Icon name="chevron-left" type="Feather" style={styles.icon} />
        </Button>
      </Left>
      <Body style={styles.contentView}>
        {textRender(
          { fontSize: 18, fontWeight: "bold", color: "#d22780" },
          "Kodu"
        )}
        {textRender(
          { fontSize: 18, fontWeight: "500", color: "#5e227f" },
          "Geliştir"
        )}
        {textRender(
          { fontSize: 18, fontWeight: "bold", color: "#41a7b3" },
          "Dünyayı"
        )}
        {textRender(
          { fontSize: 18, fontWeight: "500", color: "#1fe5bd" },
          "Değiştir"
        )}
      </Body>

      <Right />
    </Header>
  );
};
