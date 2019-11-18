import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DocumentDetail extends Component {
  static navigationOptions = {
    title: '文献详情',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DocumentDetail</Text>
      </View>
    );
  }
};