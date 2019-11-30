import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class TeacherDetail extends Component {
  static navigationOptions = {
    title: '视频详情',
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
    //   homeName: '新首页'
    // })
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>TeacherDetail</Text>
        {/* <Button
          title="Go to MinePage"
          onPress={() => this.toMinePage()}
        /> */}
      </View>
    );
  }
}
