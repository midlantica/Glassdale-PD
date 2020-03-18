import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteForm")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove("invisible")
  } else {
    contentTarget.classList.add("invisible")
  }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#noteText").value
    const criminalName = document.querySelector("#noteSuspect").value

    // Make a new object representation of a note
    const newNote = {
      noteText: noteText,
      criminal: criminalName,
      timestamp: Date.now(),
    }

    // Change API state and application state
    saveNote(newNote)
  }
})

const render = () => {
  contentTarget.innerHTML = `
  <div class="formWrap">
    <form class="dh-Form">
    <label for="noteSuspect">Suspect:</label>
    <input type="text" id="noteSuspect">

    <label for="noteText">Note:</label>
    <textarea type="text" id="noteText" rows=5></textarea>

    <button id="saveNote" class="marT1">Submit Note</button>
    </form>
  </div>
  `
}

export const NoteForm = () => {
  render()
}
