import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import {gh} from '../../utils/functions';

export default function Button({
  width,
  height,
  borderRadius,
  backgroundColor,
  text,
  icon,
  type,
  onPress,
}) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[s.button, {width, height}]}>
        <View style={[s.buttonBg, {backgroundColor, borderRadius}]} />
        {icon && type === 'google' ? (
          <Image
            style={s.socialLogo}
            source={require('../../assets/google.png')}
          />
        ) : type === 'apple' ? (
          <Image
            style={s.socialLogo}
            source={require('../../assets/apple.png')}
          />
        ) : (
          <Image
            style={s.socialLogo}
            source={require('../../assets/mail.png')}
          />
        )}
        <Text style={s.buttonTitle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const s = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  buttonBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonTitle: {
    color: theme.white,
    fontSize: gh(16),
    fontWeight: 'bold',
  },
  socialLogo: {
    width: gh(25),
    height: gh(25),
    marginRight: gh(10),
  },
});
