import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class SchoolsPage extends Component {

  componentWillMount = () => {
    console.log(this.props)
  };
  
  render() {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    )
  }
}

export default SchoolsPage