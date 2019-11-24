import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation-switch-transitioner';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './screen/Home';
import News from './screen/News';
import Message from './screen/Message';
import Mine from './screen/Mine';
import Login from './screen/Login';

const RouteConfigs = {
  Home: {
    screen: Home,
  },
  News: {
    screen: News,
  },
  Message: {
    screen: Message,
  },
  Mine: {
    screen: Mine,
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  mode: 'card',
};

// stack 路由
// const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
// const AppContainer = createAppContainer(AppNavigator);

// tab 路由
const TabNavigator = createBottomTabNavigator({
  Home: Home,
  News: News,
  Message: Message,
  Mine: Mine,
});
const LoginNavigator = createStackNavigator({
  Login: Login,
});
const SwitchNavigator = createSwitchNavigator({
  Tabs: TabNavigator,
  Login: LoginNavigator,
});
const AppContainer = createAppContainer(SwitchNavigator, {
  initialRouteName: 'Login',
});

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
