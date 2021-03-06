import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import NavigationUtil from '../../navigator/NavigationUtil';

export default class NewsDetail extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>NewsDetail</Text>
        <Button
          title="返回"
          onPress={() => {
            NavigationUtil.goBack(this.props.navigation);
          }}
        />
        <Button
          title="视频详情"
          onPress={() => {
            this.props.navigation.navigate('VideoDetail');
          }}
        />
      </View>
    );
  }
}
