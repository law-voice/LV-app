import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {PropTypes} from 'prop-types';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '@/navigator/NavigationUtil';
import globalStyles from '@/style/globalStyles';

export default class TabList extends Component {
  static propTypes = {
    scrollData: PropTypes.array.isRequired,
    ListData: PropTypes.array.isRequired,
    ListItem: PropTypes.node.isRequired,
  };

  _genTabs() {
    const tabs = {};
    const {scrollData, ListData, ListItem} = this.props;
    console.log('ListData');
    console.log(ListData);
    scrollData.forEach((item, index) => {
      tabs[`${item}`] = {
        screen: props => <TabFlat ListItem={ListItem} ListData={ListData} />,
        navigationOptions: {
          tabBarLabel: item.name,
          title: item.name,
        },
      };
    });
    return tabs;
  }

  render() {
    const TabNavList = createAppContainer(
      createMaterialTopTabNavigator(this._genTabs(), {
        tabBarOptions: {
          scrollEnabled: true,
          pressColor: globalStyles.defaultColor,
          pressOpacity: 0.6,
          // tabStyle: {
          //   width: 'auto',
          // },
          labelStyle: {
            color: '#333',
          },
          style: {
            backgroundColor: '#fff',
          },
          indicatorStyle: {
            backgroundColor: globalStyles.defaultColor,
          },
        },
      }),
    );
    return (
      <View style={styles.container}>
        <TabNavList />
      </View>
    );
  }
}

class TabFlat extends Component {
  static propTypes = {
    ListData: PropTypes.array.isRequired,
    ListItem: PropTypes.node.isRequired,
  };
  renderItem = ListItem => {
    return;
  };

  render() {
    const {ListData, ListItem} = this.props;
    console.log('ListData');
    console.log(ListData);
    return (
      <View style={styles.container}>
        <FlatList
          data={ListData}
          renderItem={data => {
            <ListItem item={data.item} />;
          }}
          keyExtractor={(item, index) => '' + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.defaultColor,
  },
});
