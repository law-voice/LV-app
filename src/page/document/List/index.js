import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import GoBackBtn from '@/component/common/GoBackBtn';
import TitleText from '@/component/common/TitleText';
import NavigationBar from '@/component/common/NavigationBar';
import ListLine from '@/component/common/ListLine';
import NavigationUtil from '@/navigator/NavigationUtil';
import DocumentItem from '../components/DocumentItem';
import globalStyles from '../../../style/globalStyles';
import styles from './styles';

export default class DocumentList extends Component {
  state = {
    data: [
      {
        name: '中华人民共和国立法法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国全国人民代表大会组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国全国人民代表大会和地方各级人民代表大会选举法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国地方各级人民代表大会和地方各级人民政府组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国各级人民代表大会常务委员会监督法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国全国人民代表大会和地方各级人民代表大会代表法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国城市居民委员会组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国村民委员会组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国人民法院组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国人民检察院组织法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国法官法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国检察官法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国民族区域自治法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国香港特别行政区基本法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国澳门特别行政区基本法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国国旗法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国国徽法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国国籍法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国集会游行示威法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国集会游行示威法实施条例',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
      {
        name: '中华人民共和国国家赔偿法',
        cover:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3876806027,1082675659&fm=26&gp=0.jpg',
        frequency: 56943,
        date: '2018-01-02',
      },
    ],
  };
  navBar() {
    let statusBar = {
      backgroundColor: globalStyles.defaultColor,
      barStyle: 'light-content',
    };
    console.log('');
    console.log(this.props.navigation);
    return (
      <NavigationBar
        leftButton={<GoBackBtn routeName={this.props.navigation} />}
        titleView={<TitleText title="视频详情" />}
        statusBar={statusBar}
      />
    );
  }
  // renderList = () => {
  //   return (

  //   )
  // }
  renderItem = data => {
    return (
      <DocumentItem
        item={data.item}
        // onSelect={callback => {
        //   NavigationUtil.goPage('DetailPage', {
        //     callback,
        //   });
        // }}
      />
    );
  };
  renderListLine = () => {
    const lineStyle = {
      borderWidth: 0.5,
      borderColor: '#eee',
    };
    return <ListLine lineStyle={lineStyle} />;
  };
  render() {
    return (
      <View style={styles.pageContainer}>
        {this.navBar()}
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => '' + index}
          ItemSeparatorComponent={this.renderListLine}
        />
      </View>
    );
  }
}
