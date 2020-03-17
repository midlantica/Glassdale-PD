import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".ContainBox.notes .noteForm")

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

const NoteForm = () => {
  render()
}

export default NoteForm
