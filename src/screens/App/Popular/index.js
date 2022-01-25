import {Text, View, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';
import {theme} from '../../../utils/theme';
import {gh} from '../../../utils/functions';

export class Popular extends Component {
  render() {
    return (
      <View style={s.container}>
        <View style={s.search}></View>
        <Text style={{color: 'white'}}>Popular</Text>
      </View>
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
});

export default Popular;
