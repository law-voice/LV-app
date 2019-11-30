import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../../../navigator/NavigationUtil';

import style from './style';

export default class NewsPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        {
          TopTab1: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: '关注',
              title: 'tab1',
            },
          },
          TopTab2: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: '热点',
              title: 'tab2',
            },
          },
        },
        {
          tabBarOptions: {
            tabStyle: {
              width: 'auto',
            },
            scrollEnabled: true,
          },
        },
      ),
    );
    return <View style={{flex: 1}}>{TabNavigator && <TabNavigator />}</View>;
  }
}

class TopTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={style.body}>
        <Button
          title="跳转到新闻详情页"
          onPress={() => {
            NavigationUtil.goPage('NewsDetail', {
              // navigation: this.props.navigation
              tabLabel,
            });
          }}
        />
      </View>
    );
  }
}
