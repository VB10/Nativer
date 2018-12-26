import React, { Component } from "react";
import { View, FlatList,Text } from "react-native";
import SchoolCard from "./card";
import { connect } from "react-redux";
import { getDatabase } from "@redux/actions/database";
import { bindActionCreators } from "redux";
interface IState {}
interface IProps {
  getAllDB: () => {};
  schoolDatas: [Articles];
}

export class SchoolsPage extends Component<IProps, IState> {
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
      />
    );
  }

  renderFlatList() {
    return (
      <FlatList
        style={{ paddingTop: 15 }}
        data={this.props.schoolDatas}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
    {this.props.schoolDatas.length > 0 ? this.renderFlatList() : <Text>Loading</Text> }
    </View>
    )
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
