import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PropTypes} from 'prop-types';
import styles from './styles';

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
  }
  onItemClick() {
    console.log('89-0');
  }
  render() {
    const {item} = this.props;
    if (!item) {
      return null;
    }
    const {title, author, count, time} = item;
    return (
      <TouchableOpacity onPress={() => this.onItemClick()}>
        <View style={styles.vItem}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{flex: 0.33, borderRadius: 4}}
              source={require('../../../../assets/video_1.png')}
            />
            <View style={{flex: 0.67, paddingLeft: 5, paddingRight: 5}}>
              <Text>{title}</Text>
            </View>
          </View>
          <View style={styles.btmBox}>
            <View style={{flex: 1}}>
              <Text>{author}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                <Text style={styles.icon}>&#xe61e;</Text>
                {count}
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text>
                <Text style={styles.icon}>&#xe7eb;</Text>
                {time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
