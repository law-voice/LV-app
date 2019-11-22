import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, Text, Button } from 'react-native';

// import Tabs from '../navigator/TabNavigator';

import NewsPage from './news/NewsPage';
import VideoPage from './video/VideoPage';
import DocumentPage from './document/DocumentPage';
import MinePage from './mine/MinePage';
import NavigationUtil from '../navigator/NavigationUtil';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.backPress = new BackPressComponent({backPress: this.onBackPress});
  }
  _tabNavigator() {
    return (
      createBottomTabNavigator({       //在这里配置页面的路由
        NewsPage: {
          screen: NewsPage,
          navigationOptions: {
            tabBarLabel: "新闻",
            tabBarIcon: ({ tintColor, focused }) => (
              <Text style={{
                fontFamily: "iconfont",
                fontSize: 24,
                color: tintColor
              }}>
                &#xe7ef;
              </Text>
            ),
          }
        },
        VideoPage: {
          screen: VideoPage,
          navigationOptions: {
            tabBarLabel: "视频",
            tabBarIcon: ({ tintColor, focused }) => (
              <Text style={{
                fontFamily: "iconfont",
                fontSize: 24,
                color: tintColor
              }}>
                &#xe7ee;
              </Text>
            ),
          }
        },
        DocumentPage: {
          screen: DocumentPage,
          navigationOptions: {
            tabBarLabel: "文献",
            tabBarIcon: ({ tintColor, focused }) => (
              <Text style={{
                fontFamily: "iconfont",
                fontSize: 24,
                color: tintColor
              }}>
                &#xe7f1;
              </Text>
            ),
          }
        },
        MinePage: {
          screen: MinePage,
          navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ tintColor, focused }) => (
              <Text style={{
                fontFamily: "iconfont",
                fontSize: 24,
                color: tintColor
              }}>
                &#xe7f0;
              </Text>
            ),
          }
        }
      })
    )
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = createAppContainer(this._tabNavigator());
    return (
      <Tab />
    )
  }
}
