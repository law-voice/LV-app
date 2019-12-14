import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import NavigationUtil from '../../navigator/NavigationUtil';

export default class SearchPage extends Component {
  static navigationOptions = {
    title: '搜索',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>搜索 Screen</Text>
        <Button
          title="返回"
          onPress={() => {
            NavigationUtil.goBack(this.props.navigation);
          }}
        />
      </View>
    );
  }
}
