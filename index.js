/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './src';
// import App from './demo/App';
// import App from './demo/demo';
// import App from './demo/demo2';
// import App from './demo/demo3';
// import App from './demo/screen/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
