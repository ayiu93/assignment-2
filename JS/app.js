const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const add = document.querySelector(".add");
const main = document.querySelector(".main");
const work = document.querySelector(".workspace");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const bar = document.querySelector(".bar");

notesArray = []

mode.onclick = function themeChange() {
	body.classList.toggle("darkMode");
  if (mode.innerHTML === "Light-theme") {
    mode.innerHTML = "Dark-theme";
  } else {
    mode.innerHTML = "Light-theme";
  }
}

add.onclick = function newNote() {
  const newWork = document.createElement("TEXTAREA");
  newWork.className = "note";
  newWork.placeholder = "your note here";
  const newSave = document.createElement("BUTTON");
  newSave.className = "button save";
  newSave.innerHTML = "save";
  const newCancel = document.createElement("BUTTON");
  newCancel.className = "button cancel";
  newCancel.innerHTML = "cancel";
  work.append(newWork);
  bar.append(newSave);
  bar.append(newCancel);
  //save.classList.toggle("hide");
  //cancel.classList.toggle("hide");
  refresh();
}

cancel.onclick = function closeNote() {
  const note = document.querySelector(".note");
  const cancel = document.querySelector(".cancel");
  const save = document.querySelector(".save");
  note.remove();
  //
  //cancel.classList.toggle("hide");
  save.remove();
  cancel.remove();
}

function refresh() {
  const save = document.querySelector(".save");
  const cancel = document.querySelector(".cancel");
}
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
