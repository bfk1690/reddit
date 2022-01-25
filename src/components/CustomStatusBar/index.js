import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Platform} from 'react-native';
import {getStatusBarHeight} from '../Layout/getStatusBar';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : getStatusBarHeight();
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar
      hidden={false}
      translucent
      backgroundColor={'transparent'}
      {...props}
    />
  </View>
);

export default class StatusBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MyStatusBar
        backgroundColor={this.props.bgColor ? this.props.bgColor : '#fff'}
        barStyle={this.props.barStyle ? this.props.barStyle : 'dark-content'}
      />
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
