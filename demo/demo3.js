import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from 'react-navigation-switch-transitioner';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './screen/Home';
import HomeDetail from './screen/HomeDetail';
import Mine from './screen/Mine';
import MineDetail from './screen/MineDetail';
import News from './screen/News';
import Login from './screen/Login';
import Drawer1 from './screen/Drawer1';
import Drawer2 from './screen/Drawer2';

const Tabs = createBottomTabNavigator({
  Home: Home,
  News: News,
  Mine: Mine,
})

// const HomeStack = createStackNavigator({
//   Home: Home,
//   HomeDetail: HomeDetail,
// });
// const DrawerNavigator = createDrawerNavigator({
//   HomeStack: HomeStack,
//   Drawer1: Drawer1,
// });
// const AppNavigator = createSwitchNavigator({
//   News: News,
//   DrawerNavigator: DrawerNavigator,
// });
// const MineStack = createStackNavigator({
//   Mine: Mine,
//   MineDetail: MineDetail,
// });
const App = createStackNavigator({
  Tabs: Tabs,
  HomeDetail: HomeDetail,
  MineDetail: MineDetail,
});
// const App2 = createSwitchNavigator({
//   Login: Login,
//   Tabs: Tabs,
// });

export default createAppContainer(App);