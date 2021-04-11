const body = document.querySelector("body")
const mode = document.querySelector(".mode")
const add = document.querySelector(".add")
const work = document.querySelector(".workspace")


function themeChange() {
	body.classList.toggle("darkMode");
  if (mode.innerHTML === "Light-theme") {
    mode.innerHTML = "Dark-theme";
  } else {
    mode.innerHTML = "Light-theme";
  }
  console.log("hit")
}

mode.onclick = themeChange;


function newNote() {
  work.classList.toggle("hide")
}

add.onclick = newNote;

/* function to add a new note */
/*
    - create a new blank note area when ' + ' button is pressed
    - make a way to cancel without saving
*/


/* function to select note from side bar*/
/*
    - have the side bar populated with title values from note objects in note
      array
    - google how to do above
    - when a side bar button is pressed, searches array for title matching the 
      button pressed
    - the associated content from note object is displayed in the text area
    - probably have to look that up also
*/


/* function to save note */
/*
    - ask for name to save note as, is used as title in note object
    - note and title saved as note object into note array
    - close note area maybe??
    - add new title to side bar
    - will have to look up the whole updating side bar thing
*/
