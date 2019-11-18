import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
              <MaterialIcons
                name={'whatshot'}
                size={26}
                style={{ color: tintColor }}
              />
              // <Text style={{
              //   fontFamily: "iconfont",
              //   fontSize: 24,
              //   color: tintColor
              // }}>
              //   &#xe61f;
              // </Text>
            ),
          }
        },
        VideoPage: {
          screen: VideoPage,
          navigationOptions: {
            tabBarLabel: "视频",
            tabBarIcon: ({ tintColor, focused }) => (
              <Entypo
                name={'folder-video'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
          }
        },
        DocumentPage: {
          screen: DocumentPage,
          navigationOptions: {
            tabBarLabel: "文献",
            tabBarIcon: ({ tintColor, focused }) => (
              <Entypo
                name={'book'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
          }
        },
        MinePage: {
          screen: MinePage,
          navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                name={'user'}
                size={26}
                style={{ color: tintColor }}
              />
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
