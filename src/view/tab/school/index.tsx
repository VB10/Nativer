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
import { getDatabase } from "../../../redux/actions/database";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../../util";
import { Textarea, Button, StyleProvider, Text, Icon } from "native-base";
import {
  _styles,
  _fabs,
  cardStyles,
  getTransformStyle,
  inputStyles
} from "./styles";
import { addUserFeed } from "../../../redux/actions/newsfeed";
import { IFab } from "./baseSchool";
import CommentCard from "./cardComment";

export interface IState {
  fabs: IFab[];
  animate: Animated.Value;
  open: boolean;
}
export interface IProps {
  getAllDB: () => {};
  addUserFeed: (val: NewsFeedChild) => {};
  database: [Articles];
}
export class SchoolsPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      fabs: _fabs,
      animate: new Animated.Value(0),
      open: false
    };
  }

  componentWillMount = () => {
    this.props.getAllDB();
  };
  renderItem(val: Articles) {
    const { category, description, email, price, title, data } = val.data;

    if (!title) {
      return (
        <CommentCard
          comment={data}
          profile={{ image: "", name: "", title: "" }}
        />
      );
    }
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
        toValue: index * -85 * toValue,
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
      <View style={inputStyles.contentView}>
        <TextInput multiline />
        <Textarea
          rowSpan={3}
          placeholder="What do you think?"
          placeholderTextColor="gray"
          multiline
          blurOnSubmit
          style={inputStyles.placeHolderStyle}
        />

        <View style={inputStyles.endContainer}>
          {this.renderModalButton()}

          <View style={inputStyles.endRight}>
            <Icon
              name="add-circle"
              type="Ionicons"
              style={inputStyles.addIcon}
              onPress={() => this.handlePressFlyOuts()}
            />

            <Button
              onPress={() => this.onSharePress()}
              rounded
              style={{ backgroundColor: "#00adb5" }}
            >
              <Text>SHARE</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }

  onSharePress() {
    this.props.addUserFeed({ data: "veli" });
  }
  renderModalButton = () => {
    return (
      <View
        style={[
          {
            flexDirection: "row",
            opacity: this.state.open ? 1 : 0
          }
        ]}
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
              <Text style={inputStyles.fabText}>{fab.name}</Text>
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
        data={this.props.database}
        ListHeaderComponent={() => this.renderAddFeedScool()}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.database.length > 0 ? (
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
    database: state.databaseReducer
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    getAllDB: bindActionCreators(getDatabase, dispatch),
    addUserFeed: bindActionCreators(addUserFeed, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolsPage);
