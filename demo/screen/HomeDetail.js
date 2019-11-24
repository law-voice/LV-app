import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '首页详情页',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Detail</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="去我的详情页"
          onPress={() => this.props.navigation.push('MineDetail')}
        />
      </View>
    );
  }
}
