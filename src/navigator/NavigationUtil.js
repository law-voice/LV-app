/**
 * 全局导航跳转工具类 by CrazyCodeBoy
 */
export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param page 要跳转的页面名
   * @param params 要传递的参数
   **/
  static goPage(page, params) {
    const navigation = NavigationUtil.navigation;
    console.log(navigation);
    // const { navigation } = params;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate(page, {
      ...params,
    });
  }

  /**
   * 返回上一页
   * @param navigation
   */
  static goBack(navigation) {
    console.log('navigation');
    console.log(navigation);
    navigation.goBack();
  }

  /**
   * 重置到首页
   * @param navigation
   */
  static resetToHomPage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}
