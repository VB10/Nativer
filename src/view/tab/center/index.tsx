import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Lightbox from "./baselightBox";

interface IProps {
  data: string;
  children: any;
}
const DemoLightbox = (val: IProps) => (
  <Lightbox verticalPercent={0.5} horizontalPercent={0.9}>
    <Text>Demo Lightbox: {val.data}</Text>
    <Text>Allows transparency for background</Text>
  </Lightbox>
);

export default DemoLightbox;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});
