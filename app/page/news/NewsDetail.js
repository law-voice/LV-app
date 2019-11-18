import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationUtil from "../../navigator/NavigationUtil";

export default class NewsDetail extends Component {
  static navigationOptions = {
    title: '新闻详情',
  };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  toMinePage() {
    // this.props.navigation.setParams({ homeName: '新首页' })
    // this.props.navigation.push('Mine', {
    //   itemId: 86,
    //   otherParam: 'anything you want here',
    //   homeName: '首页'
    // })
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NewsDetail</Text>
        <Button
          title="返回"
          onPress={() => {
            NavigationUtil.goBack(this.props.navigation);
          }}
        />
      </View>
    );
  }
};