import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: '登录',
  };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  changePage() {
    // this.props.navigation.setParams({ homeName: '新首页' })
    this.props.navigation.push('Home', {
      itemId: 86,
      otherParam: 'anything you want here',
      homeName: '新首页'
    })
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen 啊a</Text>
        <Button
          title="Go to HomePage"
          onPress={() => this.changePage()}
        />
      </View>
    );
  }
};