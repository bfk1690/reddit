import {Dimensions, Platform, StatusBar} from 'react-native';

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 48 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export {getBottomSpace, getStatusBarHeight, ifIphoneX};

// The neweast Xcode Version 12.1 (12A7403) is same with

// "Here are what I saw with Xcode 12.1 GM

// iPhone11: 48
// iPhone12/12 pro/12 pro max: 47
// iPhone12 mini: 44 but navigation bar starts with 50, this seems to be bug for Apple.
// Other iPhones: 44."

// It is possible that this is Xcode's bug on iphone12mini simulator.
