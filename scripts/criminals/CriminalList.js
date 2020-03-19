import { CriminalHtml } from "./Criminal.js"
// import { useCriminals } from "./CriminalProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".criminalsList")
const eventHub = document.querySelector(".container")

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
