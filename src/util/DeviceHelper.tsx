import { Dimensions } from "react-native";
import { number } from "prop-types";

export class DeviceHelper {
  // values
  static width: number = Dimensions.get("screen").width;
  static height: number = Dimensions.get("screen").height;
}
