import { useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteForm")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove("hide")
  } else {
    contentTarget.classList.add("hide")
  }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteText = document.querySelector("#noteText").value
    const criminalId = document.querySelector("#criminalDropdown").value

    // Make a new object representation of a note
    const newNote = {
      noteText: noteText,
      criminal: parseInt(criminalId),
      timestamp: Date.now(),
    }

    // Change API state and application state
    saveNote(newNote)
  }
})

const render = () => {
  contentTarget.classList.add("hide")
  const allCriminals = useCriminals()

  contentTarget.innerHTML = `
    <div class="formWrap">
      <form class="panel dh-Form marB1">

        <label for="noteSuspect">Suspect:</label>
        <select id="criminalDropdown" class="dropdown">
          <option value="0">Please choose a criminal...</option>
          ${allCriminals.map(currentCriminalObject => {
            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
          })}
        </select>

        <label for="noteText">Note:</label>
        <textarea type="text" id="noteText" rows=5></textarea>

        <button id="saveNote" class="btnSmall marT1">Save Note</button>
      </form>
    </div>
  `
}

export const NoteForm = () => {
  render()
}
