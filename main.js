alternateSpanPossition();

function alternateSpanPossition() {
  // Select all elements with the class "span-poss"
  var elements = document.getElementsByClassName("span-poss");
  let cd = elements.length;
  // Loop through the elements and toggle their classes

  let bool = true;
  for (let i = 0; i < cd; i++) {
    console.log(i + ": " + elements[i].innerHTML)
  }

  console.log("FÖrsöker ändra skiten: ")
  //  while(0 <= elements.length) {
    try{
  do {
    if (bool) {
      // elements get "span-left" class
      bool = false;
      console.log("poss => left; " + "elements kvar: "+ elements.length + ", text i elementet: " + elements[0].innerHTML);
      elements[0].classList.remove("span-poss");
      elements[0].classList.add("span-left");
      console.log("antal med left: " + document.getElementsByClassName("span-left").length)
    } else {
      // elements get "span-right" class
      console.log("poss => right; " + "elements kvar: "+ elements.length + ", text i elementet: " + elements[0].innerHTML);
      elements[0].classList.remove("span-poss");
      elements[0].classList.add("span-right");
      console.log("antal med right: " + document.getElementsByClassName("span-right").length)

      bool = true;
    }
  } while (elements.length > 0)
} catch{
  console.log("done! antal element kvar: " + elements.length);
}
  // while (0 <= elements.length){
  //   if (bool) {
  //     // elements get "span-left" class
  //     bool = false;
  //     elements[0].classList.remove("span-poss");
  //     elements[0].classList.add("span-left");
  //     console.log("left: " + elements.length + ", text: " + elements[0].innerHTML);
  //   } else {
  //     // elements get "span-right" class
  //     elements[0].classList.remove("span-poss");
  //     elements[0].classList.add("span-right");
  //     console.log("right: " + elements.length + ", text: " + elements[0].innerHTML);
  //     bool = true;
  //   }
  // }

}
