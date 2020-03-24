import { CriminalHtml } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".criminals")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("associates--")) {
    // Get the id of the criminal that was clicked
    const [junk, criminalId] = clickEvent.target.id.split("--")

    // Yell at the system that a known associates button was clicked
    const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
      // Make sure to tell the system exactly which criminal button was clicked
      detail: {
        chosenCriminal: criminalId,
      },
    })

    eventHub.dispatchEvent(showAssociatesEvent)
  }
})

eventHub.addEventListener("crimeChosen", event => {
  const criminals = useCriminals()
  const theCrimeThatWasChosen = event.detail.chosenCrime

  const guiltyCriminals = criminals.filter(criminal => {
    if (criminal.conviction === theCrimeThatWasChosen) {
      return true
    }
    return false
  })

  // Clear innerHTML
  contentTarget.innerHTML = ""

  // Build up innerHTML
  for (const individual of guiltyCriminals) {
    contentTarget.innerHTML += CriminalHtml(individual)
  }
})

export const CriminalList = () => {
  const CriminalItems = useCriminals()

  for (const individual of CriminalItems) {
    contentTarget.innerHTML += CriminalHtml(individual)
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let visibility = false

/*
  Event handlers
// */
// eventHub.addEventListener("CriminalStateChanged", customEvent => {
//   render()
// })

eventHub.addEventListener("allCriminalsClicked", customEvent => {
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

  getCriminals().then(() => {
    const allTheCriminals = useCriminals()

    contentTarget.innerHTML = allTheCriminals
      .map(currentCriminalObject => {
        return CriminalsHtml(currentCriminalObject)
      })
      .join("")
  })
}

export const NotesList = () => {
  render()
}
