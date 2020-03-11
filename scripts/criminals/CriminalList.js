import { CriminalHtml } from "./Criminal.js"
import { useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".criminalsContainer .grid")
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
