import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {PropTypes} from 'prop-types';
import NavigationUtil from '@/navigator/NavigationUtil';
import globalStyles from '@/style/globalStyles';

export default class GoBackBtn extends Component {
  static propTypes = {
    routeName: PropTypes.object,
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          NavigationUtil.goBack(this.props.routeName);
        }}>
        <Text style={globalStyles.goBackIcon}>&#xe60e;</Text>
      </TouchableOpacity>
    );
  }
}
