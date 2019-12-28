import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import NavigationUtil from '@/navigator/NavigationUtil';
import styles from './styles';

export default class SearchPage extends Component {
  static navigationOptions = {
    title: '搜索',
  };
  render() {
    return (
      <View style={styles.container}>
        {this.navBar()}
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
