import {StyleSheet} from 'react-native';
import globalStyles from '@/style/globalStyles';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: globalStyles.defaultBgColor,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 12,
  },
  titleBox: {
    flexDirection: 'row',
    position: 'relative',
  },
  // 头像
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55,
    marginRight: 15,
  },
  // 昵称
  authorBox: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  // 关注图标
  iconBox: {
    backgroundColor: globalStyles.defaultColor,
    paddingVertical: 5,
    paddingHorizontal: 8,
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
    borderRadius: 3,
  },
  addIcon: {
    fontFamily: 'iconfont',
    fontSize: 14,
    marginRight: 5,
    position: 'relative',
    top: 3,
    color: '#fff',
  },
  // 4项数据
  countBox: {
    flexDirection: 'row',
    marginTop: 5,
  },
  countItem: {
    flex: 1,
  },
  count: {
    textAlign: 'center',
  },
  countLabel: {
    textAlign: 'center',
  },
  moreInfo: {
    marginTop: 4,
  },
  moreItem: {
    marginTop: 7,
  },
});
