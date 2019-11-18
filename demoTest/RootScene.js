import React, { PureComponent } from 'react'
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomePage from './scene/welcome/WelcomePage'

import NewsPage from './scene/news/NewsPage'
import VideoPage from './scene/video/VideoPage'
import DocumentPage from './scene/document/DocumentPage'
import MinePage from './scene/mine/MinePage'

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

class RootScene extends PureComponent {
  constructor() {
    super()

    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <AppContainer
        onNavigationStateChange={
          (prevState, currentState) => {
            const currentScene = getCurrentRouteName(currentState)
            const previousScene = getCurrentRouteName(prevState)
            if (previousScene !== currentScene) {
              if (lightContentScenes.indexOf(currentScene) >= 0) {
                StatusBar.setBarStyle('light-content')
              } else {
                StatusBar.setBarStyle('dark-content')
              }
            }
          }
        }
      />
    )
  }
}

const Tab = createBottomTabNavigator(
  {
    NewsPage: {
      screen: createStackNavigator({ NewsPage: NewsPage }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '新闻',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_homepage.png')}
            selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
          />
        )
      }),
    },
    VideoPage: {
      screen: createStackNavigator({ VideoPage: VideoPage }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '视频',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_merchant.png')}
            selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
          />
        )
      }),
    },
    DocumentPage: {
      screen: createStackNavigator({ DocumentPage: DocumentPage }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '文献',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_order.png')}
            selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
          />
        )
      }),
    },
    MinePage: {
      screen: createStackNavigator({ MinePage: MinePage }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_mine.png')}
            selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: { backgroundColor: '#ffffff' },
    },
  }
)

Tab.navigationOptions = {
  header: null,
};

const AppNavigator = createStackNavigator(
  {
    Tab: { screen: Tab },
    Welcome: { screen: WelcomePage },
    // GroupPurchase: { screen: GroupPurchaseScene },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default RootScene