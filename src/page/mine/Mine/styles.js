import {StyleSheet} from 'react-native';
import globalStyles from '@/style/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.defaultBgColor,
  },
  topBox: {
    backgroundColor: '#fff',
  },
  img: {
    height: 200,
    position: 'relative',
  },
  pressBox: {
    position: 'absolute',
    top: 60,
    left: '50%',
    marginLeft: -40,
  },
  imgIn: {
    width: 80,
    height: 80,
    borderRadius: 80,
    zIndex: 99,
    backgroundColor: '#eee',
  },
  avatar: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 1,
    borderRadius: 80,
    overflow: 'hidden',
  },
  pic: {
    width: '100%',
    height: '100%',
  },
  // waveOne: {
  //   position: 'relative',
  //   top: 1,
  //   width: 80,
  //   height: 80,
  //   borderRadius: 80,
  //   overflow: 'hidden',
  //   zIndex: 100,
  // },
  // edit: {
  //   fontFamily: 'iconfont',
  //   fontSize: 15,
  //   color: '#999',
  // },
  // 下半部分
  bot: {
    marginTop: 10,
  },
  comm: {
    height: 45,
    paddingRight: 10,
    backgroundColor: '#fff',
    paddingLeft: 12,
    flexDirection: 'row',
  },
  commL: {
    width: 20,
    marginRight: 5,
  },
  commM: {
    flex: 1,
  },
  commR: {
    width: 20,
  },
  itemIcon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: '#4f8cee',
    lineHeight: 45,
  },
  itemName: {
    lineHeight: 45,
  },
  itemRightIcon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: '#999',
    lineHeight: 45,
  },
  itemMar: {
    marginTop: 10,
  },
  btnBox: {
    marginTop: 10,
    backgroundColor: '#fff',
    height: 45,
  },
  btn: {
    lineHeight: 45,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
