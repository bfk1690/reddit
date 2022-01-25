import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {theme} from '../../../utils/theme';

export class Messages extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text>Messages</Text>
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

export default Messages;
