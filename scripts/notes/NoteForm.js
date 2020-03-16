import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

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
    <form>
      <label for="noteSuspect">
        Suspect:
        <input type="text" id="noteSuspect">
      </label>
      <label for="noteText">
        Note:
        <textarea type="text" id="noteText" rows=5></textarea>
      </label>
    </form>
    <button id="saveNote">Submit Note</button>
  `
}

const NoteForm = () => {
  render()
}

export default NoteForm
