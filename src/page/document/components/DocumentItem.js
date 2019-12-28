import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {PropTypes} from 'prop-types';
import NavigationUtil from '@/navigator/NavigationUtil';
import styles from './styles';

export default class TeacherItem extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    item: PropTypes.object,
  };
  onItemClick() {
    return;
    // NavigationUtil.goPage('TeacherDetail', {
    //   id: '201',
    // });
  }
  render() {
    const {item} = this.props;
    if (!item) {
      return null;
    }
    const {name, cover, frequency, date} = item;
    return (
      <TouchableOpacity onPress={() => this.onItemClick()}>
        <View style={styles.itemBox}>
          <View style={styles.picBox}>
            <Image
              style={styles.pic}
              source={{
                uri: cover,
              }}
            />
          </View>
          <View style={styles.conBox}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.other}>搜索频率：{frequency}次/年</Text>
            <Text style={styles.other}>最后修改日期：{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
