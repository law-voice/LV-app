import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemBox: {
    height: 110,
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  picBox: {
    width: 85,
    height: 110,
    marginRight: 12,
  },
  pic: {
    width: '100%',
    height: '100%',
  },
  conBox: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  other: {
    fontSize: 14,
    height: 20,
    lineHeight: 20,
  },
});
