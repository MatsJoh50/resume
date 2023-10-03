
function alternateSpanPossition() {
  // Select all elements with the class "span-poss"
  let elements = document.getElementsByClassName("poss");
  try {
    while (0 < elements.length) {
      if (elements.length % 2 == 0) {
        // elements get "span-left" class
        elements[0].classList.add("left", "base", "shadow");
        elements[0].classList.remove("poss");
      } else {
        // elements get "span-right" class
        elements[0].classList.add("right", "base", "shadow");
        elements[0].classList.remove("poss");
      }
    }
  } catch (e) {
    console.log(e);
  }
}
