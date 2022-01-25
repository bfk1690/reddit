import React, {Component} from 'react';
import Project from './src/App';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

LogBox.ignoreAllLogs(true);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Project />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
