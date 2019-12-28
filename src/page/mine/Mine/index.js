import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NavigationUtil from '@/navigator/NavigationUtil';
import globalStyles from '@/style/globalStyles';
import styles from './styles';

export default class MinePage extends Component {
  loginOut = () => {
    console.log('loginOut');
    return;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <View style={styles.img}>
            <TouchableOpacity
              style={styles.pressBox}
              onPress={() => {
                NavigationUtil.goPage('Base');
              }}>
              <View style={styles.imgIn}>
                {/* <View style={styles.waveOne} />
                <Text style={styles.edit}>&#xe649;</Text> */}
                <View style={styles.avatar}>
                  <Image
                    style={styles.pic}
                    source={{
                      uri:
                        'http://a.hiphotos.baidu.com/zhidao/wh=600,800/sign=00e7551d347adab43d851345bbe49f24/c2cec3fdfc0392452e76073a8594a4c27c1e25c0.jpg',
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bot}>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe600;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的关注</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe600;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的求学</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe6fc;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的收藏</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe641;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的评论</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT, styles.itemMar]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe6a4;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的点赞</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe673;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的投票</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT, styles.itemMar]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe658;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>我的发布</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toBase()}>
            <View style={[styles.comm, globalStyles.borT]}>
              <View style={styles.commL}>
                <Text style={styles.itemIcon}>&#xe601;</Text>
              </View>
              <View style={styles.commM}>
                <Text style={styles.itemName}>认证信息</Text>
              </View>
              <View style={styles.commR}>
                <Text style={styles.itemRightIcon}>&#xe735;</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.loginOut()}>
          <View style={styles.btnBox}>
            <Text style={styles.btn}>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
