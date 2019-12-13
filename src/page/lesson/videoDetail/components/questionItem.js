import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

export default class QuestionItem extends Component {
  render() {
    return (
      <View style={styles.questionBox}>
        <View style={styles.titleBox}>
          <Image
            style={styles.avatar}
            source={require('../../../../assets/teacher_3.png')}
          />
          <View style={styles.authorBox}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>星光</Text>
            <Text style={{color: '#999'}}>2019-01-02</Text>
          </View>
          <View style={styles.iconBox}>
            <Text style={styles.questionIcon}>&#xe610;</Text>
            <Text>123</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <Text style={{fontSize: 15}}>
            什么是网络暴力？什么是网络暴力？什么是网络暴力？什么是网络暴力？
          </Text>
          <Text style={styles.answer}>
            网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。
          </Text>
        </View>
      </View>
    );
  }
}
