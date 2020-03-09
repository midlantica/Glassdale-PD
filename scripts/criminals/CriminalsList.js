import { CriminalHtml } from './Criminal.js'
import { useCriminals } from './CriminalProvider.js'

const contentTarget = document.querySelector(".criminalsContainer .flexbox")
export const CriminalList = () => {
  const CriminalItems = useCriminals()

  for (const individual of CriminalItems) {
    contentTarget.innerHTML += CriminalHtml(individual)
  }
}
