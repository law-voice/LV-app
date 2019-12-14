import React, {Component} from 'react';
import {View, Button, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '@/navigator/NavigationUtil';
import VideoItem from './components/VideoItem';
import globalStyles from '@/style/globalStyles';
import styles from './styles';

export default class Video extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const TabNavigatorVideo = createAppContainer(
      createMaterialTopTabNavigator(
        {
          VideoTab: {
            screen: VideoTab,
            navigationOptions: {
              tabBarLabel: '全部',
              title: 'tab1',
            },
          },
          TopTab2: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageVideo2',
              title: 'tab2',
            },
          },
          TopTab3: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageVideo3',
              title: 'tab3',
            },
          },
          TopTab4: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageVideo4',
              title: 'tab4',
            },
          },
          TopTab5: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageVideo5',
              title: 'tab5',
            },
          },
        },
        {
          tabBarOptions: {
            scrollEnabled: true,
            pressColor: globalStyles.defaultColor,
            pressOpacity: 0.6,
            tabStyle: {
              width: 'auto',
            },
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
        },
      ),
    );
    return (
      <View style={styles.videoContainer}>
        <TabNavigatorVideo />
      </View>
    );
  }
}

class VideoTab extends Component {
  state = {
    data: [
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
      {
        title: '关于提前退休，什么年龄退休算作提前，应遵循哪些规章制度？',
        author: '王律师',
        count: 2335,
        time: '2019-05-06',
      },
    ],
  };
  renderItem = data => {
    return (
      <VideoItem
        style={{color: '#fff'}}
        item={data.item}
        // onSelect={callback => {
        //   NavigationUtil.goPage('DetailPage', {
        //     callback,
        //   });
        // }}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => '' + index}
          // refreshControl={
          //   <RefreshControl
          //     title={'Loading'}
          //     titleColor={theme.themeColor}
          //     colors={[theme.themeColor]}
          //     refreshing={store.isLoading}
          //     onRefresh={() => this.loadData()}
          //     tintColor={theme.themeColor}
          //   />
          // }
          // ListFooterComponent={() => this.genIndicator()}
          // onEndReached={() => {
          //   console.log('---onEndReached----');
          //   setTimeout(() => {
          //     if (this.canLoadMore) {
          //       //fix 滚动时两次调用onEndReached https://github.com/facebook/react-native/issues/14015
          //       this.loadData(true);
          //       this.canLoadMore = false;
          //     }
          //   }, 100);
          // }}
          // onEndReachedThreshold={0.5}
          // onMomentumScrollBegin={() => {
          //   this.canLoadMore = true; //fix 初始化时页调用onEndReached的问题
          //   console.log('---onMomentumScrollBegin-----');
          // }}
        />
        {/* <Toast ref={'toast'} position={'center'} /> */}
      </View>
    );
  }
}

class TopTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={{height: 200}}>
        <Button
          title="video bottom啊a"
          onPress={() => {
            NavigationUtil.goPage('lessonDetail', {
              // navigation: this.props.navigation
              tabLabel,
            });
          }}
        />
      </View>
    );
  }
}
