export const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  }
}

export const toggleScrolling = () => {
  return {
    type: 'TOGGLE_SCROLLING'
  }
}

export const setFocus = (target, sectionIndex) => {
  return {
    type: 'SET_FOCUS',
    payload: {
      target,
      sectionIndex
    }
  }
}

export const handleScroll = (e) => {
  return (dispatch, getState) => {
    if (!getState().ui.scrolling) {
      dispatch(toggleScrolling());

      let subSections = getState().ui.subSections;
      let sectionIndex = getState().ui.sectionIndex;

      if (e.deltaY > 0) {
        sectionIndex++;
      }
      else if (e.deltaY < 0) {
        sectionIndex--;
      }

      let target = Object.keys(subSections)[sectionIndex];

      dispatch(setFocus(target, sectionIndex));
      console.log(target, subSections);

      const resetScrolling = setTimeout(() => {
        clearTimeout(resetScrolling);
        dispatch(toggleScrolling());
      }, 600);
    }
    else {
      return;
    }
  }
}
