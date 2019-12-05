import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import NavigationBar from '../../../component/common/NavigationBar';
import Video from './Video';
import Teacher from './Teacher';
import styles from './styles';

export default class LessonPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    type: 0,
  };
  selectType(val) {
    this.setState({
      type: val,
    });
  }
  renderTitleView() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flex: 1}}
          underlayColor="transparent"
          onPress={() => this.selectType(0)}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              textAlign: 'center',
              position: 'relative',
              left: 30,
            }}>
            视频
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          underlayColor="transparent"
          onPress={() => this.selectType(1)}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              textAlign: 'center',
              position: 'relative',
              right: 30,
            }}>
            名师
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  navBar() {
    let statusBar = {
      backgroundColor: '#269CF3',
      barStyle: 'light-content',
    };
    return (
      <NavigationBar titleView={this.renderTitleView()} statusBar={statusBar} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.navBar()}
        {this.state.type === 0 ? <Video /> : <Teacher />}
      </View>
    );
  }
}
