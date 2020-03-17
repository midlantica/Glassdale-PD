import { NotesHtml } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".ContainBox.notes .grid")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
  render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
  render()
})

const render = () => {
  getNotes().then(() => {
    const allTheNotes = useNotes()

    contentTarget.innerHTML = allTheNotes
      .map(currentNoteObject => {
        return NotesHtml(currentNoteObject)
      })
      .join("")
  })
}
