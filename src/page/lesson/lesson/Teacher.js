import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../../../navigator/NavigationUtil';
import TeacherItem from './components/TeacherItem';
import globalStyles from '../../../style/globalStyles';
import styles from './styles';

export default class Teacher extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const TabNavigatorTeacher = createAppContainer(
      createMaterialTopTabNavigator(
        {
          TeacherTab: {
            screen: TeacherTab,
            navigationOptions: {
              tabBarLabel: '全部',
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
            scrollEnabled: true,
            pressColor: globalStyles.defaultColor,
            pressOpacity: 0.6,
            tabStyle: {
              width: 'auto',
              // padding: 0,
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
      <View style={styles.container}>
        <TabNavigatorTeacher />
      </View>
    );
  }
}

class TeacherTab extends Component {
  state = {
    data: [
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
      {
        title: '知识产权、民商事、婚姻家庭等案件',
        author: '王律师',
        count: 2335,
        time: '2005年-至今',
      },
      {
        title: '刑事辩护、人身损害纠纷、合同纠纷',
        author: '张律师',
        count: 2310,
        time: '十余年执业经验',
      },
    ],
  };
  renderItem = data => {
    return (
      <TeacherItem
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TeacherItem</Text>
      </View>
    );
  }
}
