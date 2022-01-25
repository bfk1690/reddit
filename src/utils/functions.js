import {PixelRatio, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export function gh(i) {
  let j = i;
  if (height != 896) {
    //İPHONE 8-> 667
    let h = parseFloat(parseFloat(i / 896).toFixed(4));
    j = PixelRatio.roundToNearestPixel(height * h);
  }
  return j;
}
