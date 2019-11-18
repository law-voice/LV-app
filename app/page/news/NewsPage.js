import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NavigationUtil from "../../navigator/NavigationUtil";

export default class NewsPage extends Component {
  // static navigationOptions = {
  //   title: '首页',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      TopTab1: {
        screen: TopTab,
        navigationOptions: {
          tabBarLabel: 'Page1',
          title: 'tab1'
        }
      },
      TopTab2: {
        screen: TopTab,
        navigationOptions: {
          tabBarLabel: 'Page2',
          title: 'tab2'
        }
      },
      TopTab3: {
        screen: TopTab,
        navigationOptions: {
          tabBarLabel: 'Page3',
          title: 'tab3'
        }
      },
      TopTab4: {
        screen: TopTab,
        navigationOptions: {
          tabBarLabel: 'Page4Page4',
          title: 'tab4'
        }
      },
      TopTab5: {
        screen: TopTab,
        navigationOptions: {
          tabBarLabel: 'Page5Page5',
          title: 'tab5'
        }
      }
    }, {
      tabBarOptions: {
        tabStyle: {
          width: 'auto',
        },
        scrollEnabled: true
      }
    }));
    return (
      <View style={{ flex: 1 }}>
        {TabNavigator && <TabNavigator />}
      </View>
    );
  }
};

class TopTab extends Component {
  toNextPage() {
    // this.props.navigation.setParams({ homeName: '新首页' })
    // this.props.navigation.push('Mine', {
    //   itemId: 86,
    //   otherParam: 'anything you want here',
    //   homeName: '首页'
    // })
    console.log(1)
    NavigationUtil.goPage('NewsDetail', '1111');
  };
  render() {
    // const { tabLabel } = this.props;
    return (
      <View style={{ height: 200 }}>
        {/* <Text onPress={() => this.toNextPage()}>top tab</Text> */}
        <Button
          title="NewsPage bottom啊a"
          onPress={() => {
            NavigationUtil.goPage('NewsDetail', {
              navigation: this.props.navigation
            })
            // this.props.navigation.navigate('NewsDetail')
          }} />
      </View>
    )
  }
}