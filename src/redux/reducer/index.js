import {combineReducers} from 'redux';
import news from './news';
import lesson from './lesson/lesson';
import video from './lesson/video';

import {rootRouteName, RootNavigator} from '../../navigator/AppNavigators';

//1.指定默认state
const navState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootRouteName),
);

/**
 * 2.创建自己的 navigation reducer，
 */
const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  // 如果`nextState`为null或未定义，只需返回原始`state`
  return nextState || state;
};

/**
 * 3.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
  nav: navReducer,
  news: news,
  lesson: lesson,
  video: video,
});

export default index;
