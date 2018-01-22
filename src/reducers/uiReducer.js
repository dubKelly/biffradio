const uiReducer = (state = {
  subSections: {
    about: {
      focus: false
    },
    work: {
      focus: false
    },
    team: {
      focus: false
    },
    contact: {
      focus: false
    },
  },
  sectionIndex: -1,
  menu: false,
  scrolling: false
}, action) => {

  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {...state, menu: !state.menu ? 'open' : false};
    }
    case 'TOGGLE_SCROLLING': {
      return {...state, scrolling: !state.scrolling};
    }
    case 'SET_FOCUS': {
      let target = action.payload.target;

      return {
        ...state,
        subSections: {
          ...state.subSections,
          [target]: {
            ...state.subSections[target],
            focus: !state.subSections[target].focus ? 'focus' : false
          }
        },
        sectionIndex: action.payload.sectionIndex
      };
    }
    default:
      return state;
  }
}

export default uiReducer;
