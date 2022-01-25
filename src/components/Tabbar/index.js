import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import {getBottomSpace} from '../Layout/getStatusBar.js';
import {theme} from '../../utils/theme';
import {gh} from '../../utils/functions';

function Tabbar({state, descriptors, navigation, props}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[s.tabGlobal]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={label}
            style={s.global}
            disabled={label === 'Map' || label === 'PetMarket' ? true : false}
            onPress={onPress}>
            {label === 'Home' && (
              <View style={[s.tabItem]}>
                <Image
                  style={s.icon}
                  source={
                    isFocused
                      ? require('../../assets/home_active.png')
                      : require('../../assets/home.png')
                  }
                />
              </View>
            )}
            {label === 'Search' && (
              <View style={[s.tabItem]}>
                <Image
                  style={s.icon}
                  source={
                    isFocused
                      ? require('../../assets/search_active.png')
                      : require('../../assets/search.png')
                  }
                />
              </View>
            )}
            {label === 'Add' && (
              <View style={[s.tabItem]}>
                <Image
                  style={s.icon}
                  source={
                    isFocused
                      ? require('../../assets/plus_active.png')
                      : require('../../assets/plus.png')
                  }
                />
              </View>
            )}
            {label === 'Messages' && (
              <View style={[s.tabItem]}>
                <Image
                  style={s.icon}
                  source={
                    isFocused
                      ? require('../../assets/messenger_active.png')
                      : require('../../assets/messenger.png')
                  }
                />
              </View>
            )}
            {label === 'Notifications' && (
              <View style={[s.tabItem]}>
                <Image
                  style={s.icon}
                  source={
                    isFocused
                      ? require('../../assets/bell_active.png')
                      : require('../../assets/bell.png')
                  }
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  global: {
    height: gh(60),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabGlobal: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:
      Platform.OS === 'ios' ? (getBottomSpace() > 0 ? gh(12) : 0) : 0,
    height: getBottomSpace() > 0 ? gh(60) + getBottomSpace() / 2 : gh(60),
    backgroundColor: theme.backgroundGray,
    borderTopWidth: 1,
    borderTopColor: theme.inputGray,
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: gh(30),
    height: gh(30),
  },
});

export default Tabbar;
