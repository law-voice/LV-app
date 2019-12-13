import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  questionBox: {
    borderWidth: 0.5,
    borderColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  titleBox: {
    flexDirection: 'row',
    position: 'relative',
  },
  // 头像
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginRight: 10,
  },
  // 昵称和日期
  authorBox: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  // 追问图标
  iconBox: {
    backgroundColor: '#eee',
    paddingVertical: 5,
    paddingHorizontal: 8,
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
    borderRadius: 15,
  },
  questionIcon: {
    fontFamily: 'iconfont',
    fontSize: 18,
    marginRight: 5,
  },
  // main 部分
  mainBox: {
    marginTop: 8,
  },
  answer: {
    marginTop: 5,
    backgroundColor: '#f2f2f2',
    fontSize: 14,
    padding: 6,
  },
});
