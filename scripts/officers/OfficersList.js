import { OfficerHtml } from './Officer.js'
import { useOfficers } from './OfficerProvider.js'

const contentTarget = document.querySelector('.officersContainer article')
export const OfficerList = () => {
  const OfficerItems = useOfficers()

  for (const individual of OfficerItems) {
    contentTarget.innerHTML += OfficerHtml(individual)
  }
}
