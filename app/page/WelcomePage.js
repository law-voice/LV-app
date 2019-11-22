import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import NavigationUtil from "../navigator/NavigationUtil";
// import SplashScreen from 'react-native-splash-screen'
// import actions from "../action";
// import {connect} from "react-redux";

class WelcomePage extends Component {
    componentDidMount() {
        // this.props.onThemeInit();
        // this.timer = setTimeout(() => {
        // SplashScreen.hide();
        console.log('yesx')
        console.log(this.props)
        NavigationUtil.resetToHomPage({
            navigation: this.props.navigation
        })
        // this.props.navigation.navigate("Main");
        // }, 300);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        console.log('666')
        return <Text>Welcome</Text>;
    }
}
export default WelcomePage;

// const mapDispatchToProps = dispatch => ({
//     onThemeInit: () => dispatch(actions.onThemeInit()),
// });

// export default connect(null, mapDispatchToProps)(WelcomePage);
