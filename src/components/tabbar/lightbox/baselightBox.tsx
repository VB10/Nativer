import * as React from "react";
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    Button
} from "react-native";
import { Actions } from "react-native-router-flux";

export interface BaseLightBoxProps {
    children: any;
    horizontalPercent: number;
    verticalPercent: number;
}

export interface BaseLightBoxState {
    opacity: Animated.Value;
}

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

export default class BaseLightBoxComponent extends React.Component<
    BaseLightBoxProps,
    BaseLightBoxState
    > {
    constructor(props: BaseLightBoxProps) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0)
        };
    }
    componentDidMount = () => {
        alert("a")
        Animated.timing(this.state.opacity, {
            duration: 500,
            toValue: 1
        }).start();
    };
    closeModal = () => {
        Animated.timing(this.state.opacity, {
            duration: 500,
            toValue: 0
        }).start(Actions.pop);
    };

    _renderLightBox = () => {
        const { children, horizontalPercent = 1, verticalPercent = 1 } = this.props;
        const height = verticalPercent
            ? deviceHeight * verticalPercent
            : deviceHeight;
        const width = horizontalPercent
            ? deviceWidth * horizontalPercent
            : deviceWidth;
        return (
            <View
                style={{
                    width,
                    height,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.9)"
                }}
            >
                {children}
                <Button title="Close" onPress={this.closeModal} />
            </View>
        );
    };
    render() {
        return (
            <Animated.View
                style={[styles.container, { opacity: this.state.opacity }]}
            >
                {this._renderLightBox()}
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(52,52,52,0.5)",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});