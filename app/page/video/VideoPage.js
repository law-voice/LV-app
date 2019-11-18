import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class VideoPage extends Component {
  // static navigationOptions = {
  //   title: '视频',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  constructor(props) {
    super(props);
    // console.log(NavigationUtil.navigation);
  }
  toMinePage() {
    // this.props.navigation.setParams({ homeName: '新首页' })
    // this.props.navigation.push('Mine', {
    //   itemId: 86,
    //   otherParam: 'anything you want here',
    //   homeName: '新首页'
    // })
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>VideoPage Screen 啊a</Text>
        <Button
          title="Go to MinePage"
          onPress={() => this.toMinePage()}
        />
      </View>
    );
  }
};