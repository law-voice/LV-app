import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchIconContainer: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 30,
    bottom: 60,
  },
  searchIconBox: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#ddd',
    opacity: 0.7,
  },
  searchIcon: {
    fontFamily: 'iconfont',
    fontSize: 36,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 50,
  },
});
