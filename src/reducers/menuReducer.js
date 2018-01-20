const menuReducer = (state = {
  menu: false
}, action) => {

  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {...state, menu: !state.menu};
    }
  }

  return state;
}

export default menuReducer;
