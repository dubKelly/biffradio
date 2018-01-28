const uiReducer = (state = {
  subSections: {
    about_sect_01: {
      focus: false
    },
    about_sect_02: {
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
  // subSections: [
  //   'home',
  //   'about_sect_01',
  //   'about_sect_02',
  //   'work',
  //   'team',
  //   'contact'
  // ],
  sectionIndex: -1,
  scrolling: false,
  menu: false,
  focus: 'home'
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
        // ...state,
        // focus: action.payload.target,
        ...state,
        subSections: {
          ...state.subSections,
          [target]: {
            ...state.subSections[target],
            focus: !state.subSections[target].focus ? [target] : false
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
