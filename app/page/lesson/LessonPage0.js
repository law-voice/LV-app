import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Toast,
  RefreshControl,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../../navigator/NavigationUtil';
import NavigationBar from '../../common/NavigationBar';
import VideoItem from './lesson/components/VideoItem';

export default class LessonPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    type: 0,
  };

  // _genTabs() {
  //   const tabs = {};
  //   const {keys, theme} = this.props;
  //   this.preKeys = keys;
  //   keys.forEach((item, index) => {
  //     if (item.checked) {
  //       tabs[`tab${index}`] = {
  //         screen: props => (
  //           <TrendingTabPage
  //             {...props}
  //             timeSpan={this.state.timeSpan}
  //             tabLabel={item.name}
  //             theme={theme}
  //           />
  //         ), //初始化Component时携带默认参数 @https://github.com/react-navigation/react-navigation/issues/2392
  //         navigationOptions: {
  //           title: item.name,
  //         },
  //       };
  //     }
  //   });
  //   return tabs;
  // }

  // _tabNav() {
  //   //优化效率：根据需要选择是否重新创建建TabNavigator，通常tab改变后才重新创建
  //   this.tabNav = createAppContainer(
  //     createMaterialTopTabNavigator(this._genTabs(), {
  //       tabBarOptions: {
  //         tabStyle: styles.tabStyle,
  //         upperCaseLabel: false, //是否使标签大写，默认为true
  //         scrollEnabled: true, //是否支持 选项卡滚动，默认false
  //         style: {
  //           backgroundColor: '#249CF2', //TabBar 的背景颜色
  //           height: 30, //fix 开启scrollEnabled后再Android上初次加载时闪烁问题
  //         },
  //         indicatorStyle: styles.indicatorStyle, //标签指示器的样式
  //         labelStyle: styles.labelStyle, //文字的样式
  //       },
  //       lazy: true,
  //     }),
  //   );
  //   return this.tabNav;
  // }
  selectType(val) {
    console.log(this.state);
    this.setState({
      type: val,
    });
  }
  renderTitleView() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flex: 1}}
          underlayColor="transparent"
          onPress={() => this.selectType(0)}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              textAlign: 'center',
              position: 'relative',
              left: 30,
            }}>
            视频
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          underlayColor="transparent"
          onPress={() => this.selectType(1)}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              textAlign: 'center',
              position: 'relative',
              right: 30,
            }}>
            名师
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    let statusBar = {
      backgroundColor: '#249CF2',
      barStyle: 'light-content',
    };
    let navigationBar = (
      <NavigationBar titleView={this.renderTitleView()} statusBar={statusBar} />
    );
    const TabNavigatorVideo = createAppContainer(
      createMaterialTopTabNavigator(
        {
          VideoTab: {
            screen: VideoTab,
            navigationOptions: {
              tabBarLabel: 'VideoTab',
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
            tabStyle: {
              width: 'auto',
            },
            scrollEnabled: true,
          },
        },
      ),
    );
    const TabNavigatorTeacher = createAppContainer(
      createMaterialTopTabNavigator(
        {
          TopTab1: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageTeacher1',
              title: 'tab1',
            },
          },
          TopTab2: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageTeacher2',
              title: 'tab2',
            },
          },
          TopTab3: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageTeacher3',
              title: 'tab3',
            },
          },
          TopTab4: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageTeacher4',
              title: 'tab4',
            },
          },
          TopTab5: {
            screen: TopTab,
            navigationOptions: {
              tabBarLabel: 'pageTeacher5',
              title: 'tab5',
            },
          },
        },
        {
          tabBarOptions: {
            tabStyle: {
              width: 'auto',
            },
            scrollEnabled: true,
          },
        },
      ),
    );
    return (
      <View style={styles.container}>
        {navigationBar}
        {this.state.type === 0 ? (
          <TabNavigatorVideo />
        ) : (
          <TabNavigatorTeacher />
        )}
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
  renderItem(data) {
    console.log(data);
    const {item} = data;
    const {title, author, count, time} = item;
    return (
      <VideoItem
        item={item}
        // title={title}
        // author={author}
        // count={count}
        // time={time}
        // onSelect={callback => {
        //   NavigationUtil.goPage('DetailPage', {
        //     callback,
        //   });
        // }}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={data => this.renderItem(data)}
          // keyExtractor={item => '' + item.item.id}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
