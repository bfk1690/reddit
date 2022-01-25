let defaultState = {
  is_loaded: false,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'IS_LOADED':
      return {
        ...state,
        is_loaded: true,
      };
    default:
      return state;
  }
};

export default app;
