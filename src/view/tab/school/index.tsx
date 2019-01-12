import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, Animated } from "react-native";
import SchoolCard from "./card";
import { connect } from "react-redux";
import { getDatabase } from "@redux/actions/database";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../../util";
import { Textarea, Button, StyleProvider, Text, Icon } from "native-base";
import { _styles } from "./styles";

interface IState {
  fabs: Animated.Value[];
  animate: Animated.Value;
  open : boolean
}
interface IProps {
  getAllDB: () => {};
  schoolDatas: [Articles];
}
const getTransformStyle = (animation: any) => {
  return {
    transform: [{ translateX: animation }]
  };
};
export class SchoolsPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      fabs: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ],
      animate: new Animated.Value(0),
      open: false
    };
  }

  componentWillMount = () => {
    this.props.getAllDB();
    console.log(this.state);
  };
  renderItem(val: Articles) {
    const { category, description, email, price, title } = val.data;
    return (
      <SchoolCard
        city={title}
        schoolImage="@image/school_d"
        schoolName={description}
        studentCount={price}
        onPress={() => {
          this.onPress(val);
        }}
      />
    );
  }

  handlePressFlyOuts() {
   
    const toValue = this.state.open ? 0 : 1;
    const flyOuts = this.state.fabs.map(
      (value: Animated.Value, index: number) => {
        return Animated.spring(value, {
          toValue: (index + 1) * -90 * toValue,
          friction: 5
        });
      }
    );
    Animated.parallel([
      Animated.timing(this.state.animate, {
        toValue,
        duration: 300
      }),
      Animated.stagger(30, flyOuts)
    ]).start();
    this.setState({
      open : !this.state.open,
    })

  }
  renderAddFeedScool() {
    return (
      <View
        style={{
          backgroundColor: "white",
          marginBottom: 20,
          borderRadius: 10,
          paddingBottom: 5
        }}
      >
        <Textarea
          rowSpan={3}
          placeholder="What do you think?"
          multiline
          blurOnSubmit
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          {this.renderModalButton()}
          <Icon
            name="attach"
            type="Ionicons"
            style={{
              alignSelf: "flex-end",
              borderRadius: 0,
              marginRight: 5,
              width: 30
            }}
            onPress={() => this.handlePressFlyOuts()}
          />
          <Icon
            name="send"
            type="Ionicons"
            style={{
              alignSelf: "flex-end",
              color: "red",
              borderRadius: 0,
              marginRight: 5,
              width: 30
            }}
          />
        </View>
      </View>
    );
  }
  renderModalButton = () => {
    return (
      <View style={[_styles.position,{opacity:this.state.open ? 1 : 0}]}>
        {/* {
          this.state.open ? this.state.fabs.map((animation: Animated.Value, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  _styles.button,
                  _styles.fab,
                  _styles.flyout,
                  getTransformStyle(animation)
                ]}
                onPress={() => { }}
              />
            );
          }) : null
        } */}
        {this.state.fabs.map((animation: Animated.Value, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                _styles.button,
                _styles.fab,
                _styles.flyout,
                getTransformStyle(animation)
              ]}
              onPress={() => {}}
            />
          );
        })}
      </View>
    );
  };
  onPress(val: Articles) {
    Actions.push(PageKey.tabSchoolDetail, {
      article: val,
      image: "https://picsum.photos/200/300"
    });
  }
  renderFlatList() {
    return (
      <FlatList
        style={{ paddingTop: 15 }}
        data={this.props.schoolDatas}
        ListHeaderComponent={() => this.renderAddFeedScool()}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.schoolDatas.length > 0 ? (
          this.renderFlatList()
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    schoolDatas: state.databaseReducer
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    getAllDB: bindActionCreators(getDatabase, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolsPage);
