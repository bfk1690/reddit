import React from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//TABBAR
import {connect} from 'react-redux';
import {navigationRef} from '../RootNavigation';
import Tabbar from '../components/Tabbar';
import TopTabsCustom from '../components/TopTabsCustom';
import {getStatusBarHeight} from '../components/Layout/getStatusBar';

//Auth Stack
const Auth = createNativeStackNavigator();
import Login from '../screens/Auth/Login';
class AuthStack extends React.Component {
  render() {
    return (
      <Auth.Navigator initialRouteName={'Login'}>
        <Auth.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Auth.Navigator>
    );
  }
}

const TopTab = createMaterialTopTabNavigator();
import Home from '../screens/App/Home';
import Popular from '../screens/App/Popular';
import {gh} from '../utils/functions';
import {theme} from '../utils/theme';
class TopTabs extends React.Component {
  render() {
    return (
      <TopTab.Navigator
        // tabBar={props => <TopTabsCustom {...props} />}
        overScrollMode="always"
        screenOptions={{
          tabBarActiveTintColor: theme.white,
          tabBarLabelStyle: {
            fontSize: gh(16),
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          tabBarItemStyle: {width: gh(90)},
          tabBarStyle: {
            width: gh(180),
            height: gh(50),
            backgroundColor: 'transparent',
            alignSelf: 'center',
            position: 'absolute',
            marginTop: gh(20),
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.blue,
            height: gh(3),
          },
        }}>
        <TopTab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: 'Home'}}
        />
        <TopTab.Screen
          name="Popular"
          component={Popular}
          options={{tabBarLabel: 'Popular'}}
        />
      </TopTab.Navigator>
    );
  }
}

//App Stack
const App = createBottomTabNavigator();
import Search from '../screens/App/Search';
import Add from '../screens/App/Add';
import Messages from '../screens/App/Messages';
import Notifications from '../screens/App/Notifications';
class AppStack extends React.Component {
  render() {
    return (
      <>
        {/* Search Bar */}
        <View style={s.searchArea}>
          <View style={s.profile} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.white}
            style={s.searchInput}
          />
          <View style={s.profile} />
        </View>
        {/* Search Bar */}
        <App.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            keyboardHidesTabBar: true,
          }}
          tabBar={props => <Tabbar {...props} />}>
          <App.Screen
            name="Home"
            component={TopTabs}
            options={({route}) => ({
              animationEnabled: true,
              headerShown: false,
            })}
          />
          <App.Screen
            name="Search"
            component={Search}
            options={({route}) => ({
              animationEnabled: true,
              headerShown: false,
            })}
          />
          <App.Screen
            name="Add"
            component={Add}
            options={({route}) => ({
              animationEnabled: true,
              headerShown: false,
            })}
          />

          <App.Screen
            name="Messages"
            component={Messages}
            options={({route}) => ({
              animationEnabled: true,
              headerShown: false,
            })}
          />
          <App.Screen
            name="Notifications"
            component={Notifications}
            options={({route}) => ({
              animationEnabled: true,
              headerShown: false,
            })}
          />
        </App.Navigator>
      </>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundBlack,
  },
  search: {
    backgroundColor: theme.backgroundGray,
    width: '100%',
    height: gh(70),
  },
  searchArea: {
    paddingTop: Platform.OS == 'android' ? gh(20) : 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.backgroundGray,
  },
  searchInput: {
    backgroundColor: theme.inputGray,
    height: gh(35),
    width: '75%',
    borderRadius: 5,
    paddingHorizontal: gh(10),
    color: theme.white,
  },
  profile: {
    width: gh(35),
    height: gh(35),
    borderRadius: 9999,
    backgroundColor: theme.softBlue,
  },
});

export {AuthStack, AppStack};
