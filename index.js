/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// import App from './app/page/WelcomePage';
import App from './app/App';
// import App from './demo/App';
// import App from './demo/demo';
// import App from './demo/demo2';
// import App from './demo/demo3';
// import App from './demo/screen/Home';
import { name as appName } from './app.json';


// import RootScene from './demoTest/RootScene';
// export default class App extends PureComponent {
//   render() {
//     return (
//       <RootScene />
//     );
//   }
// }

AppRegistry.registerComponent(appName, () => App);
