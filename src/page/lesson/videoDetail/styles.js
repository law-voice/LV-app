import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  // 简介版块————标题
  videoData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 16,
  },
  subIcon: {
    fontFamily: 'iconfont',
    fontSize: 16,
    color: '#999',
  },
  iconValue: {
    fontSize: 15,
  },
  // 简介版块————内容
  videoDetailBox: {
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#ccc',
    marginLeft: 15,
    marginRight: 15,
  },
  videoDetailItemBox: {
    position: 'relative',
    width: '70%',
    left: '15%',
    top: -15,
    backgroundColor: '#fff',
    zIndex: 11,
  },
  authorPic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 20,
  },
  videoAuthorData: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    top: -2,
  },
  videoRecommend: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    color: '#777',
  },
  // 问答版块
});
