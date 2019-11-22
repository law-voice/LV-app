import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationUtil from "../../navigator/NavigationUtil";

export default class VideoPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>VideoPage Screen 啊a</Text>
        <Button
          title="Go to DetailPage"
          onPress={() => {
            NavigationUtil.goPage('VideoDetail', {
              navigation: this.props.navigation
            })
          }}
        />
      </View>
    );
  }
};