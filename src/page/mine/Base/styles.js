import {StyleSheet} from 'react-native';
import globalStyles from '@/style/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.defaultBgColor,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  avatarItem: {
    paddingVertical: 25,
  },
  label: {
    width: 100,
  },
  inputLabel: {
    position: 'relative',
    top: 4,
  },
  rightBox: {
    flex: 1,
    position: 'relative',
  },
  pickerBox: {
    paddingBottom: 30,
  },
  picker: {
    height: 30,
    width: 140,
    position: 'absolute',
    right: -19,
  },
  avatar: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    top: -15,
    borderRadius: 50,
  },
  TextInput: {
    padding: 0,
    textAlign: 'right',
  },
  btnBox: {
    width: '80%',
    marginTop: 20,
    marginLeft: '10%',
    backgroundColor: '#269CF3',
    height: 40,
    borderRadius: 5,
  },
  btn: {
    lineHeight: 40,
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 1,
  },
});
