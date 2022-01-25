import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {theme} from '../../../utils/theme';

export class Notifications extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundGray,
  },
});

export default Notifications;
