let defaultState = {
  is_logged: false,
  data: null,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        is_logged: true,
        is_guest: false,
        data: action.payload,
      };
    case 'LOGOUT':
      return {
        is_logged: false,
        is_guest: false,
        data: null,
      };
    default:
      return state;
  }
};

export default app;
