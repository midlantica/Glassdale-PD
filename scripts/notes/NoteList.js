import { NotesHtml } from "./Note.js"
import { useNotes } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".ContainBox.notes .grid")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
  const notes = useNotes()
  const theCrimeThatWasChosen = event.detail.chosenCrime

  const guiltyNotess = notes.filter(note => {
    if (note.conviction === theCrimeThatWasChosen) {
      return true
    }
    return false
  })

  // Clear innerHTML
  contentTarget.innerHTML = ""

  // Build up innerHTML
  for (const individual of Notes) {
    contentTarget.innerHTML += NotesHtml(individual)
  }
})

export const NoteList = () => {
  const NotesItems = useNotes()

  for (const individual of NotesItems) {
    contentTarget.innerHTML += NotesHtml(individual)
  }
}
