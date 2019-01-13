import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  TextInput
} from "react-native";
import SchoolCard from "./card";
import { connect } from "react-redux";
import { getDatabase } from "@redux/actions/database";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../../util";
import { Textarea, Button, StyleProvider, Text, Icon } from "native-base";
import { _styles } from "./styles";

interface IFab {
  animation: Animated.Value;
  name: string;
  icon: string;
  iconColor: string;
}
interface IState {
  fabs: IFab[];
  animate: Animated.Value;
  open: boolean;
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
        {
          animation: new Animated.Value(0),
          name: "Location",
          icon: "locate",
          iconColor: "red"
        },
        {
          animation: new Animated.Value(0),
          name: "Camera",
          icon: "camera",
          iconColor: "blue"
        },
        {
          animation: new Animated.Value(0),
          name: "Gallery",
          icon: "photos",
          iconColor: "green"
        }
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
    const flyOuts = this.state.fabs.map((value: IFab, index: number) => {
      return Animated.spring(value.animation, {
        toValue: index * -90 * toValue,
        friction: 4
      });
    });
    Animated.parallel([
      Animated.timing(this.state.animate, {
        toValue,
        duration: 300
      }),
      Animated.stagger(30, flyOuts)
    ]).start();
    this.setState({
      open: !this.state.open
    });
  }
  renderAddFeedScool() {
    return (
      <View
        style={{
          backgroundColor: "white",
          marginBottom: 20,
          borderRadius: 10,
          paddingBottom: 5,
          marginRight: 5,
          marginLeft: 5
        }}
      >
        <TextInput multiline />
        <Textarea
          rowSpan={3}
          placeholder="What do you think?"
          placeholderTextColor="gray"
          multiline
          blurOnSubmit
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.1)",
            fontFamily: "Roboto"
          }}
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          {this.renderModalButton()}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5
            }}
          >
            <Icon
              name="attach"
              type="Ionicons"
              style={{
                margin: 5,
                fontSize: 30
              }}
              onPress={() => this.handlePressFlyOuts()}
            />

            <Button rounded info>
              <Text>SHARE</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
  renderModalButton = () => {
    return (
      <View
        style={[{ flexDirection: "row",opacity: this.state.open ? 1 : 0 }]}
      >
        {this.state.fabs.map((fab: IFab, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                _styles.button,
                _styles.fab,
                _styles.flyout,
                getTransformStyle(fab.animation)
              ]}
              onPress={() => {}}
            >
              <Icon
                name={fab.icon}
                type="Ionicons"
                style={{ color: fab.iconColor }}
              />
              <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>
                {fab.name}
              </Text>
            </TouchableOpacity>
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
