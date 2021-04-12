const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const add = document.querySelector(".add");
const work = document.querySelector(".workspace");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");

notesArray = []
noteCount = 0

mode.onclick = function themeChange() {
	body.classList.toggle("darkMode");
  if (mode.innerHTML === "Light-theme") {
    mode.innerHTML = "Dark-theme";
  } else {
    mode.innerHTML = "Light-theme";
  }
}

add.onclick = function newNote() {
  const note = document.querySelector(".note")
  if(!note) {
    const newWork = document.createElement("TEXTAREA");
    newWork.className = "note";
    newWork.setAttribute("id", "text");
    newWork.placeholder = "your note here";
    work.append(newWork);
    save.classList.toggle("hide")
    cancel.classList.toggle("hide");
  }
}

function closeNote() {
  const note = document.querySelector(".note");
  note.remove();
  save.classList.toggle("hide")
  cancel.classList.toggle("hide");
}

closeNote();
cancel.onclick = closeNote;

save.onclick = function saveNote(noteCount) {
  const note = document.querySelector(".note");
  const titleText = prompt("Please title your note");
  if (titleText != null) {
    notesArray.push({title: titleText, body: note.value});
    changeNav(titleText, noteCount);
    noteCount++;
    note.remove();
    save.classList.toggle("hide");
    cancel.classList.toggle("hide");
  }
}

function changeNav(text, count) {
  const list = document.querySelector(".list");
  const newNote = document.createElement("LI");
  const newNoteA = document.createElement("A");
  newNoteA.appendChild(document.createTextNode(text));
  newNoteA.setAttribute("href", "#");
  newNoteA.title = text;
  newNote.appendChild(newNoteA)
  list.appendChild(newNote);
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
