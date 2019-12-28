import {StyleSheet} from 'react-native';
import globalStyles from '@/style/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.defaultBgColor,
  },
  // 搜索
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 30,
    width: '60%',
    position: 'absolute',
    left: '20%',
    bottom: 40,
  },
  searchIcon: {
    fontFamily: 'iconfont',
    fontSize: 24,
    color: '#aaa',
    position: 'absolute',
    right: 10,
    top: 2,
  },
  // 最近浏览和高频文献
  block: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  boxLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  titleBox: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  currentTitle: {
    paddingTop: 12,
    paddingBottom: 8,
    fontSize: 16,
    flex: 1,
  },
  moreBox: {
    paddingTop: 14,
    color: globalStyles.defaultColor,
  },
  picBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 140,
    paddingTop: 13,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  pic: {
    width: '23.5%',
    height: '100%',
  },
  // 行政法规
  typeBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  type: {
    paddingLeft: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
  },
});
