import { Animated } from "react-native";

export enum fabName {
  camera = "Camera",
  location = "Location",
  gallery = "Gallery"
}
export interface IFab {
  animation: Animated.Value;
  name: fabName;
  icon: string;
  iconColor: string;
}
