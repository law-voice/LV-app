import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Video from 'react-native-video';
import NavigationBar from '../../../component/common/NavigationBar';
import NavigationUtil from '../../../navigator/NavigationUtil';
import styles from './styles';

export default class VideoDetail extends Component {
  // static navigationOptions = {
  //   title: '视频详情',
  // };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  constructor(props) {
    super(props);
  }
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
        style={styles.leftIcon}
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
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
          }}>
          视频详情
        </Text>
      </View>
    );
  }
  navBar() {
    let statusBar = {
      backgroundColor: '#269CF3',
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
    return (
      <View style={{flex: 1}}>
        {this.navBar()}
        <Text>VideoDetail</Text>
        {/* <Video
          source={{
            uri:
              'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          }} // Can be a URL or a local file.
          // ref={ref => {
          //   this.player = ref;
          // }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        /> */}
        {/* <Button
          title="Go to MinePage"
          onPress={() => this.toMinePage()}
        /> */}
      </View>
    );
  }
}
