import React, {Component} from 'react';
import {View, ViewPropTypes} from 'react-native';

export default class NavigationBar extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
  };
  render() {
    return <View style={this.props.lineStyle} />;
  }
}
