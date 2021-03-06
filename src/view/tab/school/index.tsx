import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  TextInput,
  Image
} from "react-native";
import SchoolCard from "./card";
import { connect } from "react-redux";
import { getDatabase } from "../../../redux/actions/database";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import { PageKey } from "../../../util";
import { Textarea, Button, Text, Icon, List } from "native-base";
import { _styles, _fabs, getTransformStyle, inputStyles } from "./styles";
import { addUserFeed } from "../../../redux/actions/newsfeed";
import { IFab, fabName } from "./baseSchool";
import CommentCard from "./cardComment";
import { changeBarType } from "../../../redux/actions/bar_change";
import ImagePicker, { Imagex } from "react-native-image-crop-picker";

interface IState {
  fabs: IFab[];
  animate: Animated.Value;
  open: boolean;
  yPosition: number;
  hideBars: boolean;
  imageUploadSource: string;
  commment: string;
  textInputs: string[];
}

interface IProps {
  getAllDB: () => {};
  addUserFeed: (val: NewsFeedChild) => {};
  changeBarType: (val: boolean) => {};
  database: [Articles];
}

export class SchoolsPage extends Component<IProps, IState> {
  nativeEventY: Number;
  _txtComment: string;
  constructor(props: IProps) {
    super(props);
    this.nativeEventY = 0;
    this._txtComment = "";
    this.state = {
      fabs: _fabs,
      animate: new Animated.Value(0),
      open: false,
      yPosition: 0,
      hideBars: false,
      imageUploadSource: "",
      commment: "",
      textInputs: []
    };
  }

  componentWillMount = () => {
    this.props.getAllDB();
  };
  renderItem(val: Articles) {
    const {
      category,
      description,
      email,
      price,
      title,
      data,
      image
    } = val.data;

    if (!title) {
      return (
        <CommentCard
          comment={data}
          image={image}
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
    // TODO add animation bar hidden schools
    // this.props.changeBarType(true);
    const toValue = this.state.open ? 0 : 1;
    const flyOuts = this.state.fabs.map((value: IFab, index: number) => {
      return Animated.spring(value.animation, {
        toValue: index * -85 * toValue,
        friction: 4,
        useNativeDriver: true
      });
    });
    Animated.parallel([
      Animated.timing(this.state.animate, {
        toValue,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.stagger(30, flyOuts)
    ]).start();
    this.setState({
      open: !this.state.open
    });
  }
  onChangeText = (val: string) => {
    this.setState({
      commment: val
    });
  };
  renderAddFeedScool = () => {
    const { commment, imageUploadSource } = this.state;
    return (
      <View style={inputStyles.contentView}>
        <TextInput
          style={{ height: 40, flex: 1 }}
          placeholder="Type text for search"
          clearButtonMode="while-editing"
          value={this.state.commment}
          onChangeText={text => {
            let { commment } = this.state;
            var x = text;
            this.setState({
              commment: x
            });
          }}
        />
        {imageUploadSource ? (
          <Image source={{ uri: imageUploadSource, width: 100, height: 200 }} />
        ) : null}
        <Animated.View style={inputStyles.endContainer}>
          {this.renderModalButton()}

          <View style={inputStyles.endRight}>
            <Icon
              name="add-circle"
              type="Ionicons"
              style={inputStyles.addIcon}
              onPress={() => this.handlePressFlyOuts()}
            />
            <Button
              disabled={
                // fix empty push
                commment.length == 0 && imageUploadSource.length == 0
                  ? true
                  : false
              }
              onPress={() => this.onSharePress()}
              rounded
            >
              <Text>SHARE</Text>
            </Button>
          </View>
        </Animated.View>
      </View>
    );
  };

  onSharePress() {
    // postImage({ data: this.state.imageUploadSource });
    this.props.addUserFeed({
      data: this.state.commment,
      image: this.state.imageUploadSource
    });
  }
  renderModalButton = () => {
    return (
      <Animated.View
        style={[{ flexDirection: "row", opacity: this.state.open ? 1 : 0 }]}
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
              onPress={() => {
                this.fabOnPress(fab.name);
              }}
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
      </Animated.View>
    );
  };
  fabOnPress(val: fabName) {
    switch (val) {
      case fabName.camera:
        //TODO ADD TAKE PHOTO
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        })
          .then(image => {
            //fix imagecrop duplicate Image name
            var _image = image as Imagex;
            this.setState({
              imageUploadSource: _image.path
            });
          })
          .catch(() => {
            console.log("error");
          });
        break;

      default:
        break;
    }
  }
  onPress(val: Articles) {
    Actions.push(PageKey.tabSchoolDetail, {
      article: val,
      image: "https://picsum.photos/200/300"
    });
  }
  renderFlatList() {
    return (
      <FlatList
        data={this.props.database}
        ListHeaderComponent={() => this.renderAddFeedScool()}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <View style={_styles.container}>
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
    addUserFeed: bindActionCreators(addUserFeed, dispatch),
    changeBarType: bindActionCreators(changeBarType, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolsPage);
