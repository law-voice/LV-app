import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from 'react-navigation-switch-transitioner';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './screen/Home';
import HomeDetail from './screen/HomeDetail';
import Mine from './screen/Mine';
import MineDetail from './screen/MineDetail';
import News from './screen/News';
import Login from './screen/Login';
import Drawer1 from './screen/Drawer1';
import Drawer2 from './screen/Drawer2';

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
const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        // <Ionicons name={'md-home'} size={30} color={tintColor} />
        // <Icon.Button name='wpforms' size={30} color={tintColor} />
        <MaterialCommunityIcons name='face' size={30} color={tintColor} />
      )
    }
  },
  Mine,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
const App = createStackNavigator({
  Tabs: {
    screen: Tabs,
    // navigationOptions: {
    //   header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    // }
  },
  HomeDetail: HomeDetail,
  MineDetail: MineDetail
});
// const App2 = createSwitchNavigator({
//   Login: Login,
//   Tabs: Tabs,
// });

export default createAppContainer(App);