import { StyleSheet, Animated } from "react-native";
export const _hideImageInterpolate: Animated.InterpolationConfigType = {
  inputRange: [0, 250],
  outputRange: [300, 100],
  extrapolate: "clamp"
};
export const _hideViewInterpolate: Animated.InterpolationConfigType = {
  inputRange: [0, 250],
  outputRange: [100, 0],
  extrapolate: "clamp"
};
export const _fontSizeInterpolate: Animated.InterpolationConfigType = {
  inputRange: [0, 250],
  outputRange: [24, 40]
};

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fed000"
  },
  view: {
    flex: 1
  },
  image: {
    backgroundColor: "red"
  }
});
