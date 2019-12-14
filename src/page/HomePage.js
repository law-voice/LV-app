import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text} from 'react-native';

import NewsPage from './news/List';
import LessonPage from './lesson/lesson';
import DocumentPage from './document/DocumentPage';
import MinePage from './mine/MinePage';
import NavigationUtil from '../navigator/NavigationUtil';

const NewsPageName = 'NewsPage';
const LessonPageName = 'LessonPage';
const DocumentPageName = 'DocumentPage';
const MinePageName = 'MinePage';

const TABS = [
  {
    name: NewsPageName,
    label: '新闻',
    icon: '\ue7ef',
  },
  {
    name: LessonPageName,
    label: '课堂',
    icon: '\ue7ee',
  },
  {
    name: DocumentPageName,
    label: '文献',
    icon: '\ue7f1',
  },
  {
    name: MinePageName,
    label: '我的',
    icon: '\ue7f0',
  },
];

const TabNavigator = createBottomTabNavigator(
  {
    [NewsPageName]: NewsPage,
    [LessonPageName]: LessonPage,
    [DocumentPageName]: DocumentPage,
    [MinePageName]: MinePage,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {label, icon} = TABS.find(
        ({name}) => name === navigation.state.routeName,
      );
      return {
        tabBarLabel: label,
        tabBarIcon: ({tintColor, focused}) => (
          <Text
            style={{
              fontFamily: 'iconfont',
              fontSize: 24,
              color: tintColor,
            }}>
            {icon}
          </Text>
        ),
      };
    },
  },
);

export default props => {
  NavigationUtil.navigation = props.navigation;
  let TabNavigatorComponent = createAppContainer(TabNavigator);
  return <TabNavigatorComponent />;
};
