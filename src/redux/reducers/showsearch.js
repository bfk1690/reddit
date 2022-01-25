let defaultState = {
  show_search: false,
};

const showsearch = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SEARCH':
      return {
        show_search: true,
      };
    case 'HIDE_SEARCH':
      return {
        show_search: false,
      };
    default:
      return state;
  }
};

export default showsearch;
