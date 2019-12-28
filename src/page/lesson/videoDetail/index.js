import React, {Component} from 'react';
import {View, Text, Image, Alert, Dimensions, FlatList} from 'react-native';
import Video from 'react-native-video';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationBar from '@/component/common/NavigationBar';
import ListLine from '@/component/common/ListLine';
import NavigationUtil from '@/navigator/NavigationUtil';
import QuestionItem from './components/QuestionItem';
import globalStyles from '@/style/globalStyles';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

export default class VideoDetail extends Component {
  // static navigationOptions = {
  //   title: '视频详情',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  static navigationOptions = {
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      videoUrl:
        'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      videoCover:
        'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png',
      videoWidth: screenWidth,
      videoHeight: (screenWidth * 9) / 16, // 默认16：9的宽高比
    };
  }
  state = {
    currentTime: 0,
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
        <Text style={styles.detailTitle}>视频详情</Text>
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
  onError = () => {
    console.log('无法播放');
    Alert.alert('无法播放');
  };
  onBuffer = () => {
    console.log('onBuffer');
  };
  onLoad = () => {
    console.log('onLoad');
    // 设置视频开始的时间点：单位为秒
    this.player.seek(60);
  };
  onLoadStart = () => {
    console.log('正在加载中');
  };
  onSeek = () => {
    console.log('onSeek');
    console.log('已定位到上次播放位置');
  };
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        {
          AuthorInfo: {
            screen: AuthorInfo,
            navigationOptions: {
              tabBarLabel: '简介',
            },
          },
          Question: {
            screen: Question,
            navigationOptions: {
              tabBarLabel: '问答',
            },
          },
        },
        {
          tabBarOptions: {
            upperCaseLabel: false, //是否使标签大写，默认为true
            pressColor: globalStyles.defaultColor,
            pressOpacity: 0.6,
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
      <View style={{flex: 1}}>
        {this.navBar()}
        <View style={{height: 200}}>
          <Video
            source={{
              uri: this.state.videoUrl,
            }} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.onError} // Callback when video cannot be loaded
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onSeek={this.onSeek}
            controls={true}
            resizeMode="cover"
            style={styles.backgroundVideo}
          />
        </View>
        <TabNavigator />
      </View>
    );
  }
}

class AuthorInfo extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f4f5f6'}}>
        <View style={{padding: 15, marginBottom: 15, backgroundColor: '#fff'}}>
          <Text style={{marginBottom: 6, fontSize: 18, fontWeight: '500'}}>
            网络暴力及相关处罚
          </Text>
          <View style={styles.videoData}>
            <Text style={{flex: 1}}>
              <Text style={styles.subIcon}>&#xe61e;</Text>
              <Text style={styles.iconValue}>2656</Text>
            </Text>
            <Text style={{flex: 1}}>
              <Text style={styles.subIcon}>&#xe6fc;</Text>
              <Text style={styles.iconValue}>226</Text>
            </Text>
            <Text style={{flex: 1}}>
              <Text style={styles.subIcon}>&#xe7eb;</Text>
              <Text style={styles.iconValue}>2019-01-01</Text>
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff', paddingBottom: 25}}>
          <View style={{fontSize: 18, padding: 15}}>
            <Text style={{fontSize: 16}}>作者简介</Text>
          </View>
          <View style={styles.videoDetailBox}>
            <View style={styles.videoDetailItemBox}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.authorPic}
                  source={require('../../../assets/teacher_3.png')}
                />
                <View style={styles.videoAuthorData}>
                  <Text style={{fontSize: 15}}>王华</Text>
                  <Text style={{fontSize: 13, color: '#999'}}>视频数：15</Text>
                  <Text style={{fontSize: 13, color: '#999'}}>
                    播放量：3345
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.videoRecommend}>
              <Text>
                本视频讲解的核心是：什么是网络暴力？有哪些表现形式？有什么危害？有什么防治措施?
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class Question extends Component {
  state = {
    data: [
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王律师',
        time: '2019-01-02',
        question: '什么是网络暴力？',
        answer:
          '网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。',
        count: 122,
      },
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王律师',
        time: '2019-01-02',
        question: '什么是网络暴力？',
        answer:
          '网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。',
        count: 122,
      },
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王律师',
        time: '2019-01-02',
        question: '什么是网络暴力？',
        answer:
          '网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。',
        count: 122,
      },
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王律师',
        time: '2019-01-02',
        question: '什么是网络暴力？',
        answer:
          '网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。',
        count: 122,
      },
      {
        avatar: '../../../../assets/teacher_3.png',
        userName: '王律师',
        time: '2019-01-02',
        question: '什么是网络暴力？',
        answer:
          '网络暴力是指：人在没有监督的时候，肆意挥洒自己的恶意，这恶意聚沙成塔，足以摧毁人的信仰。',
        count: 122,
      },
    ],
  };
  renderItem = data => {
    return <QuestionItem item={data.item} />;
  };
  renderListLine = () => {
    const lineStyle = {
      borderWidth: 0.5,
      borderColor: '#eee',
    };
    return <ListLine lineStyle={lineStyle} />;
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => '' + index}
          ItemSeparatorComponent={this.renderListLine}
        />
      </View>
    );
  }
}
