import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigators';
import store from './redux/store'



export default class App extends Component {
  render() {
    /**
     * 将store传递给App框架
     */
  console.log(this)
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
    // return <AppNavigator />
  }
}