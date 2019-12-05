import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {PropTypes} from 'prop-types';
import NavigationUtil from '../../../../navigator/NavigationUtil';
import styles from './styles';

export default class TeacherItem extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    item: PropTypes.object,
  };
  onItemClick() {
    NavigationUtil.goPage('TeacherDetail', {
      id: '201',
    });
  }
  render() {
    const {item} = this.props;
    if (!item) {
      return null;
    }
    const {title, author, count, time} = item;
    return (
      <TouchableOpacity onPress={() => this.onItemClick()}>
        <View style={styles.tItem}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 80, paddingTop: 7, paddingBottom: 5}}>
              <Image
                style={{width: 80, height: 80, borderRadius: 80, marginTop: 5}}
                source={require('../../../../assets/teacher_3.png')}
              />
            </View>
            <View style={{flex: 1, paddingLeft: 10, flexDirection: 'column'}}>
              <View style={{height: 25, marginTop: 3}}>
                <Text style={{color: '#000', fontWeight: '600', fontSize: 15}}>
                  {author}
                </Text>
              </View>
              <View style={{height: 60}}>
                <Text>{title}</Text>
              </View>
              <View style={{flexDirection: 'row', height: 20}}>
                <Text style={{flex: 1}}>{time}</Text>
                <Text style={{flex: 1, textAlign: 'right'}}>{count}关注</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
