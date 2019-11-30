import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../../../navigator/NavigationUtil';
import VideoItem from './components/VideoItem';
import styles from './styles';

export default class Teacher extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    type: 0,
  };
  render() {
    // const TabNavigatorTeacher = createAppContainer(
    //   createMaterialTopTabNavigator(
    //     {
    //       TopTab1: {
    //         screen: TopTab,
    //         navigationOptions: {
    //           tabBarLabel: 'pageTeacher1',
    //           title: 'tab1',
    //         },
    //       },
    //       TopTab2: {
    //         screen: TopTab,
    //         navigationOptions: {
    //           tabBarLabel: 'pageTeacher2',
    //           title: 'tab2',
    //         },
    //       },
    //       TopTab3: {
    //         screen: TopTab,
    //         navigationOptions: {
    //           tabBarLabel: 'pageTeacher3',
    //           title: 'tab3',
    //         },
    //       },
    //       TopTab4: {
    //         screen: TopTab,
    //         navigationOptions: {
    //           tabBarLabel: 'pageTeacher4',
    //           title: 'tab4',
    //         },
    //       },
    //       TopTab5: {
    //         screen: TopTab,
    //         navigationOptions: {
    //           tabBarLabel: 'pageTeacher5',
    //           title: 'tab5',
    //         },
    //       },
    //     },
    //     {
    //       tabBarOptions: {
    //         tabStyle: {
    //           width: 'auto',
    //         },
    //         scrollEnabled: true,
    //       },
    //     },
    //   ),
    // );
    return (
      <View style={styles.container}>
        <Text>Teacher</Text>
      </View>
    );
  }
}
