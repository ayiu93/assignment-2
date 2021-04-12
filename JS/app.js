const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const add = document.querySelector(".add");
const work = document.querySelector(".workspace");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const close = document.querySelector(".close")
const open = document.querySelector(".open")
const noteList = document.querySelector(".noteList");

const notesArray = []

mode.onclick = function themeChange() {
	body.classList.toggle("darkMode");
  if (mode.textContent === "Light-theme") {
    mode.textContent = "Dark-theme";
  } else {
    mode.textContent = "Light-theme";
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

save.onclick = function saveNote(noteCount, title = null) {
  const note = document.querySelector(".note");
  let titleText = ''
  if(title == null) {
    titleText = prompt("Please title your note");
  } else {
    titleText = title;
  }
  if (titleText != null && titleText != '') {
    notesArray.push({title: titleText, body: note.value});
    changeNav(titleText, noteCount);
    note.remove();
    save.classList.toggle("hide");
    cancel.classList.toggle("hide");
  }
  console.log(notesArray);
}

function changeNav(text, count) {
  const list = document.querySelector(".list");
  const newNote = document.createElement("LI");
  const newNoteA = document.createElement("BUTTON");
  newNoteA.appendChild(document.createTextNode(text));
  newNoteA.title = text;
  newNoteA.className = "button notes"
  newNote.appendChild(newNoteA)
  list.appendChild(newNote);
}

open.onclick = function openList() {
  noteList.style.width = "auto";
  close.classList.toggle("hide");
  open.classList.toggle("hide");
}

close.onclick = function closeList() {
  noteList.style.width = "0";
  close.classList.toggle("hide");
  open.classList.toggle("hide");
}



function selectNote() {
  const note = document.querySelector(".note");
  if(note && note.value != '') {
    msg = "Would you like to save current note?" + 
          " Enter a title and click OK to save, cancel to discard."
    const titleText = prompt(msg); 

    if (titleText != null && titleText != '') {
      saveNote(noteCount, titleText);
      note.remove();
      //open existing note
    } else {
      note.remove();
      //open existing note
    }
  } else {
    //open existing note
  }
}

closeNote();
cancel.onclick = closeNote;
document.querySelectorAll(".notes").addEventListener("click", selectNote);

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
