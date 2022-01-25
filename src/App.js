import React, {Component} from 'react';
import {Text} from 'react-native';
import {AppStack, AuthStack} from './router/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {connect} from 'react-redux';
import {theme} from './utils/theme';
import * as Actions from './redux/actions';
import CustomStatusBar from './components/CustomStatusBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.startActions();
  }

  startActions = async () => {
    Actions.appLoaded();
    //App Login kontrol alanı
  };

  render() {
    const {is_loaded} = this.props.app;
    const {is_logged} = this.props.auth;
    const {show_search} = this.props.showsearch;
    if (!is_loaded) {
      return <Text>LOADİNG</Text>; //TODO: Loading ekranı yapılacak
    } else if (is_logged) {
      return (
        <>
          <CustomStatusBar
            bgColor={theme.backgroundGray}
            barStyle={'light-content'}
          />
          <NavigationContainer ref={navigationRef} showsearch={show_search}>
            <AppStack />
          </NavigationContainer>
        </>
      );
    } else if (!is_logged && is_loaded) {
      return (
        <>
          <NavigationContainer ref={navigationRef}>
            <AuthStack />
          </NavigationContainer>
        </>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  app: state.app,
  auth: state.auth,
  showsearch: state.showsearch,
});

export default connect(mapStateToProps)(App);
