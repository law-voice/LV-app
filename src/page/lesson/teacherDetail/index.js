import React, {Component} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import NavigationBar from '@/component/common/NavigationBar';
import NavigationUtil from '@/navigator/NavigationUtil';
import TabList from '@/component/common/TabList';
import ListItem from '@/page/lesson/lesson/components/VideoItem';
import globalStyles from '@/style/globalStyles';
import styles from './styles';

export default class TeacherDetail extends Component {
  static navigationOptions = {
    title: '视频详情',
  };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  state = {
    detailInfo: {
      avatar: '../../../../assets/teacher_3.png',
      userName: '王华',
      userType: '金牌律师',
      teacherData: {
        videoCount: 66,
        playCount: 8354,
        goodCount: 990,
        rank: 88,
      },
      workTime: '2005年-至今',
      goodAtField: '知识产权、民商事、婚姻家庭等案件',
      personal: '法学学士，擅长民商事及知识产权类案件',
      experience:
        '先后办理过合同纠纷、劳动纠纷、婚姻家庭继承纠纷、侵权纠纷、借款纠纷、不正当竞争纠纷、企业治理、投融资、并购、债权债务等案件，以办案专业、高效深受委托人好评。',
    },
    scrollData: [
      '全部',
      'pageVideo2',
      'pageVideo3',
      'pageVideo4',
      'pageVideo5',
    ],
    ListData: [
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王华',
        userType: '金牌律师',
        teacherData: {
          videoCount: 66,
          playCount: 8354,
          goodCount: 990,
          rank: 88,
        },
        workTime: '2005年-至今',
        goodAtField: '知识产权、民商事、婚姻家庭等案件',
        personal: '法学学士，擅长民商事及知识产权类案件',
        experience:
          '先后办理过合同纠纷、劳动纠纷、婚姻家庭继承纠纷、侵权纠纷、借款纠纷、不正当竞争纠纷、企业治理、投融资、并购、债权债务等案件，以办案专业、高效深受委托人好评。',
      },
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王华',
        userType: '金牌律师',
        teacherData: {
          videoCount: 66,
          playCount: 8354,
          goodCount: 990,
          rank: 88,
        },
        workTime: '2005年-至今',
        goodAtField: '知识产权、民商事、婚姻家庭等案件',
        personal: '法学学士，擅长民商事及知识产权类案件',
        experience:
          '先后办理过合同纠纷、劳动纠纷、婚姻家庭继承纠纷、侵权纠纷、借款纠纷、不正当竞争纠纷、企业治理、投融资、并购、债权债务等案件，以办案专业、高效深受委托人好评。',
      },
    ],
  };
  toMinePage() {
    // this.props.navigation.setParams({ homeName: '新首页' })
    // this.props.navigation.push('Mine', {
    //   itemId: 86,
    //   otherParam: 'anything you want here',
    //   homeName: '新首页'
    // })
  }
  renderLeftButton() {
    return (
      <Text
        style={globalStyles.goBackIcon}
        onPress={() => {
          NavigationUtil.goBack(this.props.navigation);
        }}>
        &#xe60e;
      </Text>
    );
  }
  renderTitleView() {
    return (
      <View>
        <Text style={globalStyles.detailTitle}>视频详情</Text>
      </View>
    );
  }
  navBar() {
    let statusBar = {
      backgroundColor: globalStyles.defaultColor,
      barStyle: 'light-content',
    };
    return (
      <NavigationBar
        leftButton={this.renderLeftButton()}
        titleView={this.renderTitleView()}
        statusBar={statusBar}
      />
    );
  }
  render() {
    const {
      avatar,
      userName,
      userType,
      teacherData,
      workTime,
      goodAtField,
      personal,
      experience,
    } = this.state.detailInfo;
    return (
      <View style={styles.pageContainer}>
        {this.navBar()}
        <ScrollView style={{flex: 1}}>
          <View style={styles.infoBox}>
            <View style={styles.titleBox}>
              <Image
                style={styles.avatar}
                source={require('../../../assets/teacher_3.png')}
              />
              <View style={styles.authorBox}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  {userName}
                </Text>
                <Text style={{color: '#666'}}>{userType}</Text>
              </View>
              <View style={styles.iconBox}>
                <Text style={styles.addIcon}>&#xe620;</Text>
                <Text style={{color: '#fff'}}>关注</Text>
              </View>
            </View>
            <View style={styles.countBox}>
              <View style={styles.countItem}>
                <Text style={styles.count}>{teacherData.videoCount}</Text>
                <Text style={styles.countLabel}>总发布</Text>
              </View>
              <View style={styles.countItem}>
                <Text style={styles.count}>{teacherData.playCount}</Text>
                <Text style={styles.countLabel}>播放次数</Text>
              </View>
              <View style={styles.countItem}>
                <Text style={styles.count}>{teacherData.goodCount}</Text>
                <Text style={styles.countLabel}>获赞</Text>
              </View>
              <View style={styles.countItem}>
                <Text style={styles.count}>{teacherData.rank}</Text>
                <Text style={styles.countLabel}>排名</Text>
              </View>
            </View>
            <View style={styles.moreInfo}>
              <Text style={styles.moreItem}>
                <Text>执业年限：</Text>
                {workTime}
              </Text>
              <Text style={styles.moreItem}>
                <Text>擅长领域：</Text>
                {goodAtField}
              </Text>
              <Text style={styles.moreItem}>
                <Text>个人简介：</Text>
                {personal}
              </Text>
              <Text style={styles.moreItem}>
                <Text>办案经历：</Text>
                {experience}
              </Text>
            </View>
          </View>
          {/* <View style={styles.listBox}></View> */}
          <TabList
            scrollData={this.state.scrollData}
            ListItem={ListItem}
            ListData={this.state.ListData}
          />
        </ScrollView>
      </View>
    );
  }
}
