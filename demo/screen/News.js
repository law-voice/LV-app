import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class News extends Component {
  render() {
    return (
      <View>
        <Text>这是 News</Text>
        <Button
          title="Go DrawerNavigator"
          onPress={() => this.props.navigation.navigate('DrawerNavigator')}
        />
      </View>
    );
  }
}
