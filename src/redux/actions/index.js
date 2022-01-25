import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../store';

//LOGIN - LOGOUT

export function login(data) {
  AsyncStorage.setItem('is_logged', 'true');
  store.dispatch({
    type: 'LOGIN',
    payload: data,
  });
}
export function logout() {
  AsyncStorage.removeItem('is_logged');
  AsyncStorage.removeItem('member');
  store.dispatch({
    type: 'LOGOUT',
  });
}

export function appLoaded() {
  store.dispatch({
    type: 'IS_LOADED',
  });
}

export function showsearch() {
  store.dispatch({
    type: 'SHOW_SEARCH',
  });
}

export function hidesearch() {
  store.dispatch({
    type: 'HIDE_SEARCH',
  });
}
