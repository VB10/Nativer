import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated
} from "react-native";
import { Icon } from "native-base";
import { styles } from "./styles";
import { bindActionCreators } from "redux";
import { getDatabase } from "../../../../redux/actions/database";
import { addUserFeed } from "../../../../redux/actions/newsfeed";
import { connect } from "react-redux";
import { changeBarType } from "../../../../redux/actions/bar_change";
//TODO FIX IT reducersand props...
export class SchoolNavBar extends Component {
  componentWillMount() {
    console.log(this.props.barVisibility, "AAAA");
  }

  render() {
    return <SafeAreaView style={styles.safeView}>
        {/* {this.props.barVisibility ? <Text>oldu</Text> : <Text>OLMADI</Text>} */}
        <View style={[styles.contentView]}>
          <Text style={styles.text}>Schools</Text>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon name="sliders" type="Feather" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>;
  }
}
const mapStateToProps = (state: any) => {
  console.log(state,"AAAAZZ")
  return { barVisibility: state.barReducer };
};

function mapDispatchToProps(dispatch: any) {
  return { changeBarType: bindActionCreators(changeBarType, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolNavBar);
