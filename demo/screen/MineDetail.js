import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '我的详情页',
  };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Detail</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go Login"
          onPress={() => this.props.navigation.push('Login')}
        />
      </View>
    );
  }
}
