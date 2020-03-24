import { useCriminals } from "../criminals/CriminalProvider.js"
import { NotesHtml } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".notes")
const eventHub = document.querySelector(".container")

/*
  State variables
*/
let visibility = true

/*
  Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove("hide")
  } else {
    contentTarget.classList.add("hide")
  }
})

const render = () => {
  if (visibility) {
    contentTarget.classList.remove("hide")
  } else {
    contentTarget.classList.add("hide")
  }

  getNotes().then(() => {
    const allTheNotes = useNotes()
    const allTheCriminals = useCriminals()

    contentTarget.innerHTML = allTheNotes
      .map(currentNoteObject => {
        // Find the criminal for the current note
        const theFoundCriminal = allTheCriminals.find(currentCriminalObject => {
          return currentNoteObject.criminal === currentCriminalObject.id
        })

        return NotesHtml(currentNoteObject, theFoundCriminal)
      })
      .join("")
  })
}

export const NotesList = () => {
  render()
}
