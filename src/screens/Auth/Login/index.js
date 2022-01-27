import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import Video from 'react-native-video';
import {gh} from '../../../utils/functions';
import {theme} from '../../../utils/theme';
import Button from '../../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Actions from '../../../redux/actions';

export class Login extends Component {
  render() {
    return (
      <>
        <Video
          source={{uri: 'https://v.redd.it/z08avb339n801/DASH_1_2_M'}}
          ref={ref => {
            this.player = ref;
          }}
          resizeMode="cover"
          repeat={true}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={s.backgroundVideo}
        />
        <SafeAreaView style={s.container}>
          <View style={s.redditLogo}>
            <Image
              style={s.logo}
              source={require('../../../assets/reddit_logo.png')}
            />
          </View>
          <View style={s.center}>
            <Text style={s.title}>Dive into</Text>
            <Text style={s.subTitle}>Reddit</Text>
          </View>
          <View style={s.bottom}>
            <View style={s.aggrements}>
              <Text style={s.aggrementText}>
                By continuing, you aggree to our{' '}
                <Text style={s.underline}>User Agreement</Text> and{' '}
                <Text style={s.underline}>user Policy</Text>.
              </Text>
            </View>
            <View style={s.loginButtons}>
              <Button
                width={wp('70%')}
                height={gh(50)}
                borderRadius={9999}
                text={'Sign up with Google'}
                backgroundColor={theme.black}
                icon={true}
                type={'google'}
                onPress={() => Actions.login()}
              />
              <View style={s.margin} />
              <Button
                width={wp('70%')}
                height={gh(50)}
                borderRadius={9999}
                text={'Sign up with Apple'}
                backgroundColor={theme.black}
                icon={true}
                type={'apple'}
                onPress={() => Actions.login()}
              />
              <View style={s.margin} />
              <Button
                width={wp('70%')}
                height={gh(50)}
                borderRadius={9999}
                text={'Sign up with email'}
                backgroundColor={theme.black}
                icon={true}
                type={'email'}
                onPress={() => Actions.login()}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  redditLogo: {
    flex: 4,
  },
  center: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bottom: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: gh(50),
    height: gh(50),
    marginTop: gh(20),
  },
  title: {
    fontSize: gh(25),
    fontWeight: 'bold',
    color: theme.white,
    letterSpacing: 4,
  },
  subTitle: {
    fontSize: gh(28),
    fontWeight: 'bold',
    color: theme.white,
    letterSpacing: 2,
  },
  aggrementText: {
    fontSize: gh(12),
    fontWeight: 'bold',
    color: theme.white,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationColor: theme.white,
  },
  aggrements: {
    maxWidth: '50%',
    marginBottom: gh(25),
  },
  margin: {
    marginVertical: gh(5),
  },
});

export default Login;
