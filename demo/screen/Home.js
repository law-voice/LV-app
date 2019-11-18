import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Home extends Component {
  // static navigationOptions = {
  //   title: '首页',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  changePage() {
    this.props.navigation.navigate('HomeDetail')
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen 啊a</Text>
        {/* <FontAwesome name={'home'} size={30} color={'#f00'} /> */}
        {/* <Ionicons name={'ios-home'} size={30} color={'#f00'} /> */}
        <AntDesign name={'user'} size={30} color={'#f00'} />
        <Text style={{
          fontFamily: "iconfont",
          fontSize: 24
        }}>
          &#xe61f;
        </Text>
        <Button
          title="Go to DetailPage"
          onPress={() => this.changePage()}
        />
        <Button
          title="Toggle"
          onPress={() => this.props.navigation.navigate('Drawer1')}
        />
      </View>
    );
  }
};