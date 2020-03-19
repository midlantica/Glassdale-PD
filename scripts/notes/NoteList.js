import { NotesHtml } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".notesList")
const eventHub = document.querySelector(".container")

/*
  State variables
*/
let visibility = false

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

    contentTarget.innerHTML = allTheNotes
      .map(currentNoteObject => {
        return NotesHtml(currentNoteObject)
      })
      .join("")
  })
}

export const NotesList = () => {
  render()
}
