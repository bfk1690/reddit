import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import {gh} from '../../utils/functions';
import {theme} from '../../utils/theme';
import moment from 'moment';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export default function HotList({item, index}) {
  const openBrowser = async url => {
    try {
      let newUrl = `https://www.reddit.com${url}`;
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(newUrl, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: theme.orange,
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: theme.orange,
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
        });
      } else Linking.openURL(url);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => openBrowser(item.data.permalink)}
      style={s.card}
      key={index}>
      {item.data.thumbnail != 'self' && (
        <View style={s.cardLeft}>
          <Image source={{uri: item.data.thumbnail}} style={[s.thumbnail]} />
        </View>
      )}
      <View
        style={[
          s.cardRight,
          {width: item.data.thumbnail !== 'self' ? '68%' : '100%'},
        ]}>
        <Text style={s.createdAt}>
          {moment.unix(item.data.created_utc).fromNow()}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{color: 'white', fontSize: gh(14), paddingVertical: gh(5)}}>
          {item.data.title}
        </Text>
        <View style={s.flex}>
          <Text style={[s.text]}>{item.data.author}</Text>
          <View style={s.row}>
            <Image
              source={require('../../assets/vote_up.png')}
              style={s.icon}
            />
            <Text style={[s.text]}>{item.data.score}</Text>
            <Image
              source={require('../../assets/vote_down.png')}
              style={s.icon}
            />
          </View>

          <View style={s.row}>
            <Image
              source={require('../../assets/comment.png')}
              style={s.icon}
            />
            <Text style={[s.text]}>{item.data.num_comments}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: gh(10),
    paddingVertical: gh(15),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.inputGray,
    backgroundColor: theme.backgroundGray,
  },
  cardLeft: {
    width: '30%',
    marginRight: gh(10),
  },
  cardRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: '100%',
    height: gh(90),
    resizeMode: 'cover',
    borderRadius: 5,
  },
  createdAt: {
    color: theme.white,
    alignSelf: 'flex-end',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.white,
    marginHorizontal: gh(3),
  },
  icon: {
    width: gh(20),
    height: gh(20),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
