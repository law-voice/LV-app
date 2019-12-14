import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class WelcomePage extends Component {
  componentDidMount() {
    // Alert.alert('欢迎来到法心app');
  }

  jumpToApp = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0ebaff',
        }}>
        <Text style={{fontSize: 28, color: '#fff'}}>Welcome to 法心</Text>
        <Button onPress={this.jumpToApp} title="进入主页面" />
      </View>
    );
  }
}
export default WelcomePage;

// const mapDispatchToProps = dispatch => ({
//     onThemeInit: () => dispatch(actions.onThemeInit()),
// });

// export default connect(null, mapDispatchToProps)(WelcomePage);
