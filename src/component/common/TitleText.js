import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';
import globalStyles from '@/style/globalStyles';

export default class TitleText extends Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <View>
        <Text style={globalStyles.detailTitle}>{this.props.title}</Text>
      </View>
    );
  }
}
