import Search from '../page/Search';
import NewsDetail from '../page/news/NewsDetail';
import VideoDetail from '../page/lesson/videoDetail';
import TeacherDetail from '../page/lesson/teacherDetail';
import DocumentDetail from '../page/document/DocumentDetail';

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
      title: '视频',
    },
  },
  TeacherDetail: {
    screen: TeacherDetail,
    navigationOptions: {
      title: '名师',
    },
  },
  DocumentDetail: {
    screen: DocumentDetail,
    navigationOptions: {
      title: '文献',
    },
  },
};
