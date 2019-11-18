import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Mine extends Component {
  static navigationOptions = {
    title: '我的',
  };
  changePage() {
    this.props.navigation.push('MineDetail')
  };
  render() {
    const { navigation } = this.props;
    console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text ref='pagename'>这是 Mine</Text>
        <Button
          title="去详情页"
          onPress={() => navigation.push('MineDetail')}
        />
      </View>
    );
  }
};