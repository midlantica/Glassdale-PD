let notes = []

const eventHub = document.querySelector(".ContainBox .notes")

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged")

  eventHub.dispatchEvent(noteStateChangedEvent)
}

export const useNotes = () => notes.sort((c, n) => n.timestamp - c.timestamp).slice()

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedNotes => {
      notes = parsedNotes
    })
}

export const saveNote = note => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}
