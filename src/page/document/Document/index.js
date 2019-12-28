import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationUtil from '@/navigator/NavigationUtil';
import styles from './styles';

export default class Document extends Component {
  state = {
    bannerUrls: [
      {
        uri: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      },
      {
        uri: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      },
      {
        uri: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      },
    ],
    documentTypes: [
      {
        name: '中华人民共和国立法体系示意图',
      },
      {
        name: '中华人民共和国国家机构体系示意图',
      },
      {
        name: '国家法编',
      },
      {
        name: '民商法编',
      },
      {
        name: '行政法编',
      },
      {
        name: '经济法编',
      },
      {
        name: '社会法编',
      },
      {
        name: '刑法编',
      },
      {
        name: '诉讼法编',
      },
    ],
  };
  renderBannerImg = () => {
    return this.state.bannerUrls.map((item, i) => (
      <View key={i} style={{width: '100%', height: 200}}>
        <Image
          style={{width: '100%', height: 200}}
          resizeMode="stretch"
          source={item}
        />
      </View>
    ));
  };
  renderTypes = () => {
    return this.state.documentTypes.map((item, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => {
          NavigationUtil.goPage('DocumentList');
        }}>
        <View style={styles.type}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width: '100%', height: 200}}>
            <Swiper
              key={this.state.bannerUrls.length}
              loop={true}
              autoplay={true}
              autoplayTimeout={3}
              keyExtractor={(item, index) => index + ''}
              index={0}
              horizontal={true}
              onMomentumScrollEnd={(e, state, context) => {}}
              dotStyle={{width: 5, height: 5, backgroundColor: 'red'}}
              paginationStyle={{
                bottom: 10,
              }}>
              {this.renderBannerImg()}
            </Swiper>
            <View style={styles.searchBox}>
              <View style={styles.searchInput} />
              <Text style={styles.searchIcon}>&#xe62b;</Text>
            </View>
          </View>
          <View>
            <View style={styles.block}>
              <View style={styles.boxLine}>
                <View style={styles.titleBox}>
                  <Text style={styles.currentTitle}>最近浏览</Text>
                  <Text style={styles.moreBox}>更多></Text>
                </View>
              </View>
              <View style={styles.picBox}>
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/minFaTongZe.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/minFaTongZe.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/minFaTongZe.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/minFaTongZe.jpg')}
                />
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.boxLine}>
                <View style={styles.titleBox}>
                  <Text style={styles.currentTitle}>高频文献</Text>
                  <Text style={styles.moreBox}>更多></Text>
                </View>
              </View>
              <View style={styles.picBox}>
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/liFaFa.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/liFaFa.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/liFaFa.jpg')}
                />
                <Image
                  style={styles.pic}
                  source={require('../../../assets/lawCover/liFaFa.jpg')}
                />
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.boxLine}>
                <View style={styles.titleBox}>
                  <Text style={styles.currentTitle}>行政法规</Text>
                </View>
              </View>
              <View style={styles.typeBox}>{this.renderTypes()}</View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
