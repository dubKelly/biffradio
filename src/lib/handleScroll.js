let scrolling = false;

const handleScroll = (e) => {
  if (!scrolling) {
    scrolling = true;

    if (e.deltaY > 0) {
      console.log("scroll down");
    }
    else if (e.deltaY < 0) {
      console.log("scroll up")
    }

    const resetScrolling = setTimeout(function() {
      clearTimeout(resetScrolling);
      scrolling = false;
    }, 600);
  }
  else {
    return;
  }
}

export default handleScroll;
