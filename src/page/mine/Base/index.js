import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  SectionList,
} from 'react-native';
import GoBackBtn from '@/component/common/GoBackBtn';
import TitleText from '@/component/common/TitleText';
import NavigationBar from '@/component/common/NavigationBar';
import globalStyles from '@/style/globalStyles';
import styles from './styles';

export default class Base extends Component {
  state = {
    data: {
      avatar:
        'http://a.hiphotos.baidu.com/zhidao/wh=600,800/sign=00e7551d347adab43d851345bbe49f24/c2cec3fdfc0392452e76073a8594a4c27c1e25c0.jpg',
      education: ['博士', '硕士', '本科', '专科', '中学', '小学'],
      nations: [
        '汉族',
        '蒙古族',
        '回族',
        '藏族',
        '维吾尔族',
        '苗族',
        '彝族',
        '壮族',
        '布依族',
        '朝鲜族',
        '满族',
        '侗族',
        '瑶族',
        '白族',
        '土家族',
        '白族',
        '土家族',
        '哈尼族',
        '哈萨克族',
        '傣族',
        '黎族',
        '傈僳族',
        '佤族',
        '畲族',
        '高山族',
        '拉祜族',
        '水族',
        '东乡族',
        '纳西族',
        '景颇族',
        '柯尔克孜族',
        '土族',
        '达斡尔族',
        '仫佬族',
        '羌族',
        '布朗族',
        '撒拉族',
        '毛南族',
        '仡佬族',
        '锡伯族',
        '阿昌族',
        '普米族',
        '塔吉克族',
        '怒族',
        '乌孜别克族',
        '俄罗斯族',
        '鄂温克族',
        '德昂族',
        '保安族',
        '裕固族',
        '京族',
        '塔塔尔族',
        '独龙族',
        '鄂伦春族',
        '赫哲族',
        '门巴族',
        '珞巴族',
        '基诺族',
      ],
    },
    userInfo: {
      nation: '',
      education: '',
    },
  };
  navBar = () => {
    let statusBar = {
      backgroundColor: globalStyles.defaultColor,
      barStyle: 'light-content',
    };
    return (
      <NavigationBar
        leftButton={<GoBackBtn routeName={this.props.navigation} />}
        titleView={<TitleText title="基本信息" />}
        statusBar={statusBar}
      />
    );
  };
  pickerNation = () => {
    return this.state.data.nations.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    ));
  };
  pickerEducation = () => {
    return this.state.data.education.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    ));
  };
  setUserInfo = (itemValue, type) => {
    this.setState({
      ...this.state.userInfo,
      userInfo: {
        [type]: itemValue,
      },
    });
  };
  save = () => {
    return;
  };
  render() {
    const {avatar} = this.state.data;
    return (
      <View style={styles.container}>
        {this.navBar()}
        <View>
          <View style={[styles.item, styles.avatarItem]}>
            <Text style={styles.label}>头像</Text>
            <View style={styles.rightBox}>
              <Image style={styles.avatar} source={{uri: avatar}} />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>真实姓名</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>身份证号码</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>手机号码</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>邮箱</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>民族</Text>
            <View style={[styles.rightBox, styles.pickerBox]}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.userInfo.nation}
                onValueChange={(itemValue, itemPosition) =>
                  this.setUserInfo(itemValue, 'nation')
                }>
                {this.pickerNation()}
              </Picker>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>学历</Text>
            <View style={[styles.rightBox, styles.pickerBox]}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.userInfo.education}
                onValueChange={(itemValue, itemPosition) =>
                  this.setUserInfo(itemValue, 'education')
                }>
                {this.pickerEducation()}
              </Picker>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>专业</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>行业</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>职业</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={[styles.label, styles.inputLabel]}>现居城市</Text>
            <View style={styles.rightBox}>
              <TextInput style={styles.TextInput} placeholder="请输入" />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.save()}>
          <View style={styles.btnBox}>
            <Text style={styles.btn}>保存</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
