import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';

const baseURL = 'https://api.reddit.com/r/pics';

export async function gethotlist(afterId) {
  return new Promise((resolve, reject) => {
    console.log(`${baseURL}/hot.json?after=${afterId ? afterId : ''}`);
    axios
      .get(`${baseURL}/hot.json?after=${afterId ? afterId : ''}`)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}
