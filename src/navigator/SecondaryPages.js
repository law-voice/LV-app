import Search from '../page/searchPage';
import NewsDetail from '../page/news/NewsDetail';
import VideoDetail from '../page/lesson/videoDetail';
import TeacherDetail from '../page/lesson/teacherDetail';
import DocumentList from '../page/document/List';
import Base from '../page/mine/Base';

export default {
  Search: {
    screen: Search,
    navigationOptions: {
      title: '搜索',
    },
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions: {
      title: '新闻详情',
    },
  },
  VideoDetail: {
    screen: VideoDetail,
    navigationOptions: {
      header: null,
    },
  },
  TeacherDetail: {
    screen: TeacherDetail,
    navigationOptions: {
      header: null,
    },
  },
  DocumentList: {
    screen: DocumentList,
    navigationOptions: {
      header: null,
      // title: '文献',
    },
  },
  Base: {
    screen: Base,
    navigationOptions: {
      header: null,
    },
  },
};
