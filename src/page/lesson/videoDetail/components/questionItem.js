import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {PropTypes} from 'prop-types';
import styles from './styles';

export default class QuestionItem extends Component {
  static propTypes = {
    item: PropTypes.object,
  };
  render() {
    console.log('QuestionItem');
    const {item} = this.props;
    if (!item) {
      return null;
    }
    const {avatar, userName, time, question, answer, count} = item;
    return (
      <View style={styles.questionBox}>
        <View style={styles.titleBox}>
          <Image
            style={styles.avatar}
            source={require('../../../../assets/teacher_3.png')}
          />
          <View style={styles.authorBox}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>{userName}</Text>
            <Text style={{color: '#999'}}>{time}</Text>
          </View>
          <View style={styles.iconBox}>
            <Text style={styles.questionIcon}>&#xe610;</Text>
            <Text>{count}</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <Text style={{fontSize: 15}}>{question}</Text>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      </View>
    );
  }
}
